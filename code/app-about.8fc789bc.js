import{s as c,r as d,$ as h,n as l}from"./index.5e73f5ec.js";var u=Object.defineProperty,i=Object.getOwnPropertyDescriptor,f=(n,r,t,a)=>{for(var e=a>1?void 0:a?i(r,t):r,s=n.length-1,o;s>=0;s--)(o=n[s])&&(e=(a?o(r,t,e):o(e))||e);return a&&e&&u(r,t,e),e};let p=class extends c{static get styles(){return d`

    fluent-card {
      padding: 0px 18px 18px;
    }

    @media(prefers-color-scheme: light) {
      fluent-card {
        --fill-color: #edebe9;
      }
    }

    @media(prefers-color-scheme: dark) {
      fluent-card {
        --fill-color: #4e4e4e;
        color: white;
        border: none;
      }
    }

    @media (min-width: 1024px) {
      fluent-card {
        width: 54%;
      }
    }
    `}constructor(){super()}render(){return h`
      <app-header ?enableBack="${!0}"></app-header>

      <div>
        <h2>About Page</h2>

        <fluent-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games, apps that use machine learning and more!
          </p>

          <p>Check out <fluent-anchor href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these docs</fluent-anchor> to learn more about the advanced features that you can use in your PWA</p>
        </fluent-card>
      </div>
    `}};p=f([l("app-about")],p);export{p as AppAbout};
//# sourceMappingURL=app-about.8fc789bc.js.map
