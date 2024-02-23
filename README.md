# Notepad (PWA)

This was a project that was design to expose the gap between Progressive Web Apps and Native Applications (especially on Windows). Below, you will find discussion of some of the things I discovered a long the way such as ways that PWA outperformed the Native platform, key web APIs that were used in the making of this PWA, as well of some of the limtations of PWA where there is room to grow.

This project was built using only built in web services (ie no NPM packages besides the occassional frontend component or icons). So this is only really scratching the surface of all the power that is available on the web. Even still, I was able to build a pretty good replica that achieves almost everything that the Native Notepad app can do.

## 🔑 Technical Highlights and Key APIs

### 💾 System File Access API

The System File Access API is a MUST include for any app that needs to read/write user files. For the Notepad PWA, we used this API to handle opening and saving files. Even though this API requires permission (which we will discuss more later), it is central to the apps functioning, so we will rely on the user accepting this API to have access to their file system in order for the app to work as expected.

### ✒️ Local Font Access API

The Notepad native application offers a lot of different font families and styles to select and use in the editor. Instead of manually porting the fonts over to the PWA, we can just use the Local Font Access API to grab all available fonts on the users operating system. In the spirit of PWA, this will allow the available fonts to be different across different devices (i.e. Android will have different font selections compared to Windows).

This API is only supported in chromium, so it limits where the PWA can be used. But fret not, if the API is unavailable on your OS, there should be a fallback list that the PWA will rely on.

The Windows OS provides some fonts like "Wingdings 2" and some specific styles like "Sitka Heading" that do not necessarily map to fonts available, by default, on the Web. This is important to consider when using the Local Font Access API to be sure to set up fallbacks or handle cases where the font does not map.

### User permission
The above two APIs both will require user permission. I consider this the double edge sword of the web. For developers, you have to consider the case where the user does not allow access for the necessary API. Sometimes the API is central to the app functioning, like the File System API in this PWA. So, if this were to be a _real_ app, we would probably make sure this was accepted before moving forward. Requesting permission to access certain information it gives the user full transparency and control over what the app is reaching into on their computer, which can transfer to the user being more comfortable using a PWA.

This is a difference between PWA and Native applications that can not be avoided. This should no be viewed as a strictly negative thing because it does indeed benefit the user.

### 🎯 Selection API

Notepad has a set of "Edit" functions that do an array of different text insertion, deletion and searching. In order to figure out what portion of the editor the user is targeting, the Selection API gives the "range" of highlighted text or the singular cursor position. This allows the developer know where to "Time/Date" or where to paste text. For find/replace, we searched beginning and end of the desired substrings within the editor and then used the Selection API to create a range (which highlights the text) at the given start and end point. Once highlighted, we can control whatever text belongs in the range to replace, cut, copy or delete.

The framework being used caused for some hiccups when getting started with this API. Lit is a web components frame work where you can create these smaller building block components and bring them together to create a full webpage and when nested create `shadowRoots` that have thier own scope (per component). This causes functions that are normally called like `window.getSelection()` to not return what the documentation says you should expect because things are buried within shadowRoots. In chromium, `shadowRoot.getSelection()` is supported and due to this, the Notepad PWA will only work in chromium environments since find/replace and all the edit functions are core to the experience.

### 🗄️ Local Storage

This PWA uses local storage to save a lot of state variables and settings. This includes saving the last entered text into the editor (even if the user doesn't save) to make sure the PWA reopens to this text next time the launch the app, also ensuring their settings are persistent across mutiple sessions of using the app.

We began the work of adding tabs to the Notepad PWA to get closer to the Native app, however, we ran out of time and wanted to prioritize discovery of the gap between Native and PWA rather than how well can we code a Notepad PWA. Introducing tabs adds a layer of complexity with using local storage because now there are somethings that need to persist across all of Notepad (Settings or the last thing the user searched) and others that are specific to the Notepad instance or tab (the text in the editor, the file handler).

While using local storage is usually pretty light on processing power, if you are going to be reading and writing to local storage often, it can begin to slow down your App, though we never reached that point with the Notepad PWA.

### 👷🏾‍♂️ Service Worker

Service workers and PWAs go hand in hand with the most common use case being getting the app working (to some extent) offline. On first visit, the Notepad PWA Service worker will register and save all of the assets to the cache. After this, anytime the user loses connection the assets are saved so visually things work and look the same. The data entered while offline uses local storage which doens't need connection anyway so the editor would have worked offline by default.

We gave our service worker the "cache first" stratergy which serves the user anything in the cache before anything else loaded from the apps server. This can create faster load times for your user, however, it can also cause things to become stale if the developer pushes new updates to their app. This is avoided with the addition of a [little bit of code](https://web.dev/articles/offline-cookbook#stale-while-revalidate).

### 🎨 CSS

A lot of this project was an attempt to nail the CSS to create a near 1:1 replica of the native Notepad. I was amazed but all that was possible with vanilla CSS alone and sometimes powered by a little bit of Typescript. Everything from changing the font, toggle color theme, controlling word wrap in the editor, and using `window-contorls-overlay` to create a more _app-like_ look to the PWA when installed on the OS.

I tried my best to keep the CSS organized and take advantage of CSS variables to make my life easier while working on the appearance of this app. Variables allowed me to keep my colors in check and also made it easy to toggle them when the theme switched. I also relied heavily on the Lit directives "StyleMap" and "ClassMap" which allows you to change styles or toggle classes based on conditions (ie the user selecting different settings).

## 📈 Where do I see room for growth for PWA?

Two things I wasn't able to accomplish perfectly were:
1. The title bar with `window-controls-overlay` was close but I had to manually add a back button and ensure that the "browser part" stayed the correct color to match each theme. If there was a way to have the collapse of WCO and also the back button from the minimal-ui display, that would be a nice solution to my problem.
2. I have heard buzz around a [MICA like background](https://twitter.com/diekus/status/1754911118236041630) which would be an amazing addition to the web platform. This is not only just super cool to have in an app, but native applications use this widespread and it would be just another way for PWAs to match up to native applications and even look like them too. The native Notepad uses this in the settings page and I used the guidance of this [github repo](https://github.com/yell0wsuit/acrylic-mica-css) to replicate that as best that I can.


All in all, I was impressed by how close I was able to get to the native Notepad just using the provided web APIs. I didn't use any NPM packages and I believe that a small team could get nearly 1:1 on this project using only built in APIs. The changes I mentioned to WCO and the MICA addition would a lot of different applications and could help close the gap between native and PWA.