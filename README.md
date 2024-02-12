# Notepad (PWA)

This was a project that was design to expose the gap between Progressive Web Apps and Native Applications (especially on Windows). Below, you will find discussion of some of the things I discovered a long the way such as ways that PWA outperformed the Native platform, key web APIs that were used in the making of this PWA, as well of some of the limtations of PWA where there is room to grow.

This project was built using only built in web services (ie no NPM packages besides the occassional frontend component or icons). So this is only really scratching the surface of all the power that is available on the web. Even still, I was able to build a pretty good replica that achieves almost everything that the Native Notepad app can do.

## 🔑 Technical Highlights and Key APIs

### 💾 System File Access API
- Save/Save As
- Open
- Limitations
  - Privacy on the web (Losing the file handler on refresh)
  - Requires user permission

### ✒️ System Font API
- Read fonts from users OS
- Fall back on the default list
- Limitations
  - Are there stytles in the OS that aren't supported in CSS
  - Requires user permission

### 🎯 Selection API
- Find (and the unimplemented Replace)
- Column, Col positions
- Copy, Cut, Paste, Select all
- Limitations
  - Gets really tricky with `shadowRoot`. Supported in chromium but not everywhere

#### 🗄️ Local Storage
- Saving state
  - Notepad text
  - Settings
  - Last search string in the find/replace bar
- Limitations
  - Making sure this isn't bogging down someones browser when things get LARGE (is this real?)

### 👷🏾‍♂️ Service Worker
- NOTEPAD PWA ALSO WORKS OFFLINE
- Limitations:
  - How tricky things get with tabs

### 🎨 CSS
- It's amazing how much of this was achievable just using CSS (and sometimes some JS)
  - Changing Font
  - Light mode/Dark mode (exluding system setting)
  - Word wrap
  - `window-contrls-overlay`, contributes to app-like appearance
  - Fake MICA appearance (https://github.com/yell0wsuit/acrylic-mica-css)
  - Scroll bar
- Limitaitons (consideration):
  - It's just important to be organized and efficient with your CSS (ie taking advantage of CSS variables)
  - Does required JS to be used in tandem. I achieved a lot using Classmaps/Stylemaps from Lit as well as CSS manipulation via vanilla JS(TS).

## 📈 Where do I see room for growth for PWA?
- window setting with WCO + built in back button (Windows Specific)
- Something like MICA would be soooo coool + there is already buzz around this (https://twitter.com/diekus/status/1754911118236041630)