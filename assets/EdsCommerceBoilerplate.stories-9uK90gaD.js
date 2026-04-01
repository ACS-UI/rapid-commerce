import{u as e}from"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";const u={padding:"var(--usf-space-8, 2rem)",maxWidth:"720px",margin:"0 auto",fontFamily:"var(--usf-font-sans, system-ui, sans-serif)",color:"var(--usf-text-primary, #111)",lineHeight:"1.6"},y={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-3xl, 1.875rem)",fontWeight:"var(--usf-font-weight-bold, 700)",letterSpacing:"-0.025em"},f={margin:"0 0 var(--usf-space-8, 2rem)",fontSize:"var(--usf-font-size-lg, 1.125rem)",color:"var(--usf-text-secondary, #555)"},n={margin:"var(--usf-space-8, 2rem) 0 var(--usf-space-3, 0.75rem)",fontSize:"var(--usf-font-size-xl, 1.25rem)",fontWeight:"var(--usf-font-weight-semibold, 600)",color:"var(--usf-text-primary, #111)"},o={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-sm, 0.875rem)",color:"var(--usf-text-secondary, #555)"},t={margin:"0 0 var(--usf-space-6, 1.5rem)",padding:"var(--usf-space-4, 1rem)",background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-md, 4px)",fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",fontSize:"var(--usf-font-size-sm, 0.875rem)",overflow:"auto",whiteSpace:"pre",color:"var(--usf-text-primary, #111)"},a={margin:"0 0 var(--usf-space-6, 1.5rem)",padding:"var(--usf-space-4, 1rem) var(--usf-space-5, 1.25rem)",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:"var(--usf-radius-md, 8px)",fontSize:"var(--usf-font-size-sm, 0.875rem)",color:"#1e40af",lineHeight:"1.6"},g={...a,background:"#f0fdf4",border:"1px solid #bbf7d0",color:"#166534"},M={margin:"0 0 var(--usf-space-6, 1.5rem)",paddingLeft:"1.25rem",fontSize:"var(--usf-font-size-sm, 0.875rem)",color:"var(--usf-text-secondary, #555)"},l={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"24px",height:"24px",borderRadius:"50%",background:"var(--usf-primary, #3b82f6)",color:"#fff",fontSize:"0.75rem",fontWeight:"700",flexShrink:"0",marginRight:"0.5rem"},c={display:"flex",alignItems:"center",margin:"0 0 var(--usf-space-2, 0.5rem)",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"500"},v={border:"none",borderTop:"1px solid var(--usf-border-primary, #e5e7eb)",margin:"var(--usf-space-8, 2rem) 0"},R={width:"100%",borderCollapse:"collapse",fontSize:"var(--usf-font-size-sm, 0.875rem)",margin:"0 0 var(--usf-space-6, 1.5rem)"},s={textAlign:"left",padding:"0.5rem 0.75rem",background:"var(--usf-bg-secondary, #f5f5f5)",fontWeight:"600",borderBottom:"1px solid var(--usf-border-primary, #e5e7eb)"},r={padding:"0.5rem 0.75rem",borderBottom:"1px solid var(--usf-border-primary, #e5e7eb)",color:"var(--usf-text-secondary, #555)"},i={...r,fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",color:"var(--usf-text-primary, #111)"};function L(){return e("div",{style:u,children:[e("h1",{style:y,children:"EDS Commerce Boilerplate"}),e("p",{style:f,children:["A production-ready starting point for building e-commerce storefronts on"," ",e("strong",{children:"Adobe Experience Manager Edge Delivery Services (EDS)"})," with"," ",e("strong",{children:"Universal Storefront UI"})," components and"," ",e("strong",{children:"Adobe Commerce"})," (Magento 2.4+)."]}),e("div",{style:a,children:[e("strong",{children:"What you get:"})," A fully functional storefront — product listing, product details, cart, checkout, and auth — deployed globally at the edge with sub-second load times. No build step required for content changes."]}),e("h2",{style:n,children:"Architecture"}),e("p",{style:o,children:"The boilerplate combines three layers:"}),e("table",{style:R,children:[e("thead",{children:e("tr",{children:[e("th",{style:s,children:"Layer"}),e("th",{style:s,children:"Technology"}),e("th",{style:s,children:"Purpose"})]})}),e("tbody",{children:[e("tr",{children:[e("td",{style:r,children:e("strong",{children:"Page delivery"})}),e("td",{style:i,children:"AEM Edge Delivery Services"}),e("td",{style:r,children:"Renders HTML from Google Docs / SharePoint content at the edge"})]}),e("tr",{children:[e("td",{style:r,children:e("strong",{children:"UI components"})}),e("td",{style:i,children:"Universal Storefront UI"}),e("td",{style:r,children:"Preact components (ProductList, Cart, Checkout, Auth…) loaded via import map"})]}),e("tr",{children:[e("td",{style:r,children:e("strong",{children:"Commerce data"})}),e("td",{style:i,children:"Adobe Commerce / mock API"}),e("td",{style:r,children:"GraphQL product catalog, cart, and customer data"})]})]})]}),e("h2",{style:n,children:"Key features"}),e("ul",{style:M,children:[e("li",{children:[e("strong",{children:"No build step"})," — uses ES Modules with an import map; content authors publish directly from Google Docs or SharePoint."]}),e("li",{children:[e("strong",{children:"Edge-cached HTML"})," — pages served from Fastly CDN nodes globally."]}),e("li",{children:[e("strong",{children:"Reactive components"})," — Preact + Zustand for cart state, filters, pagination."]}),e("li",{children:[e("strong",{children:"Plug-in commerce"})," — ships with mock data by default; swap in ",e("code",{children:"commerce-config.js"})," for real Adobe Commerce."]}),e("li",{children:[e("strong",{children:"Automatic preview/live URLs"})," — every branch gets a preview URL instantly."]}),e("li",{children:[e("strong",{children:"Theming via CSS tokens"})," — override ",e("code",{children:"--usf-*"})," variables to match your brand without touching component code."]})]}),e("h2",{style:n,children:"Project structure"}),e("pre",{style:t,children:`eds-commerce-boilerplate/
├── blocks/
│   ├── header/              ← Site header + nav
│   ├── product-list-page/   ← PLP with filters, sort, pagination
│   ├── product-details/     ← PDP with gallery, add-to-cart
│   ├── cart/                ← Cart drawer / page
│   ├── checkout/            ← Checkout flow
│   └── hero/                ← CMS-driven hero block
├── scripts/
│   ├── aem.js               ← EDS core — DO NOT MODIFY
│   ├── scripts.js           ← Page decoration logic
│   ├── commerce-config.js   ← Your commerce endpoint + API key
│   ├── commerce-services.js ← Wraps Universal SF UI commerce client
│   └── universal-sf-ui/     ← Generated UI library (npm run setup:ui)
├── styles/
│   ├── styles.css           ← Critical above-fold styles
│   └── lazy-styles.css      ← Below-fold styles
├── head.html                ← Global <head> with ES module import map
└── fstab.yaml               ← Maps content sources to URL paths`}),e("div",{style:g,children:[e("strong",{children:"Live demos:"})," ",e("a",{href:"https://main--eds-commerce-boilerplate--acs-ui.aem.live/",target:"_blank",rel:"noopener noreferrer",children:"Adobe Commerce"})," · ",e("a",{href:"https://fakestore--eds-commerce-boilerplate--acs-ui.aem.live/",target:"_blank",rel:"noopener noreferrer",children:"Fakestore API"})]}),e("div",{style:a,children:[e("strong",{children:"New to EDS?"})," Learn how Edge Delivery Services works at"," ",e("a",{href:"https://www.aem.live/docs/",target:"_blank",rel:"noopener noreferrer",children:"aem.live/docs"}),". Key reads: the"," ",e("a",{href:"https://www.aem.live/docs/setup-customer-sharepoint",target:"_blank",rel:"noopener noreferrer",children:"setup guide"}),","," ",e("a",{href:"https://www.aem.live/docs/block-collection",target:"_blank",rel:"noopener noreferrer",children:"block collection"}),", and"," ",e("a",{href:"https://www.aem.live/developer/tutorial",target:"_blank",rel:"noopener noreferrer",children:"developer tutorial"}),"."]})]})}function T(){return e("div",{style:u,children:[e("h1",{style:y,children:"Use This Template & Setup"}),e("p",{style:f,children:"Get a storefront running locally in under five minutes. You only need Node 18+, Git, and the AEM CLI."}),e("div",{style:c,children:[e("span",{style:l,children:"1"})," Create a repo from the template"]}),e("p",{style:o,children:["Go to"," ",e("a",{href:"https://github.com/acs-ui/eds-commerce-boilerplate",target:"_blank",rel:"noopener noreferrer",children:"github.com/acs-ui/eds-commerce-boilerplate"})," ","and click ",e("strong",{children:"Use this template → Create a new repository"}),". Give the repo a name that matches your brand — it will appear in your preview URLs."]}),e("div",{style:a,children:["Install the"," ",e("a",{href:"https://github.com/apps/aem-code-sync",target:"_blank",rel:"noopener noreferrer",children:"AEM Code Sync"})," ","GitHub App on your new repository. This is required for preview and live deployments."]}),e("hr",{style:v}),e("div",{style:c,children:[e("span",{style:l,children:"2"})," Clone & install"]}),e("pre",{style:t,children:`git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
npm install`}),e("hr",{style:v}),e("div",{style:c,children:[e("span",{style:l,children:"3"})," Generate the UI library"]}),e("p",{style:o,children:["This copies the built Universal SF UI packages into"," ",e("code",{children:"scripts/universal-sf-ui/"})," and writes the import map used by"," ",e("code",{children:"head.html"}),"."]}),e("pre",{style:t,children:"npm run setup:ui"}),e("div",{style:g,children:["Re-run this any time you upgrade the ",e("code",{children:"@universal-sf-ui/*"})," packages in"," ",e("code",{children:"package.json"}),"."]}),e("hr",{style:v}),e("div",{style:c,children:[e("span",{style:l,children:"4"})," Start the dev server"]}),e("p",{style:o,children:"The AEM CLI proxies content from aem.page and serves your local blocks and scripts."}),e("pre",{style:t,children:`npm start
# or: npx @adobe/aem-cli up

# → http://localhost:3000`}),e("p",{style:o,children:["Open ",e("code",{children:"http://localhost:3000"}),". Product data comes from the mock API by default — no Adobe Commerce account needed to get started."]})]})}function z(){return e("div",{style:u,children:[e("h1",{style:y,children:"Connecting Adobe Commerce"}),e("p",{style:f,children:"The boilerplate ships with mock product data so you can develop without a live Commerce instance. When you're ready to connect a real store, two files need updating."}),e("div",{style:a,children:[e("strong",{children:"Default (mock):"})," no configuration needed — just run ",e("code",{children:"npm start"}),".",e("br",{}),e("strong",{children:"Real Adobe Commerce (Magento 2.4+):"})," follow the steps below."]}),e("h2",{style:n,children:"1. Create commerce-config.js"}),e("p",{style:o,children:"Copy the example config and fill in your Commerce endpoint and API mesh key:"}),e("pre",{style:t,children:"cp scripts/commerce-config.example.js scripts/commerce-config.js"}),e("pre",{style:t,children:`// scripts/commerce-config.js
export default {
  // Your Adobe Commerce GraphQL endpoint (API Mesh recommended)
  commerceEndpoint: 'https://api-mesh-endpoint.example.com/graphql',

  // API Mesh / Commerce API key
  apiKey: 'your-api-key-here',

  // Store view code (leave blank for default)
  storeViewCode: '',

  // Enable/disable features
  enableWishlist: true,
  enableCompare: false,
};`}),e("h2",{style:n,children:"2. Update head.html meta tags"}),e("p",{style:o,children:["For production deployments, set the commerce endpoint and key via meta tags in"," ",e("code",{children:"head.html"})," so the values can differ per environment without code changes:"]}),e("pre",{style:t,children:`<!-- head.html -->
<meta name="commerce-endpoint" content="https://api-mesh.example.com/graphql" />
<meta name="api-key" content="your-api-key-here" />`}),e("div",{style:g,children:["Meta tags in ",e("code",{children:"head.html"})," are picked up by the EDS runtime and override values in"," ",e("code",{children:"commerce-config.js"}),". This makes it easy to keep credentials out of source control for production branches."]}),e("h2",{style:n,children:"3. Verify the connection"}),e("p",{style:o,children:"Start the dev server and open a product list page. If products load, the GraphQL connection is working. Check the browser console for any CORS or auth errors if products don't appear."}),e("pre",{style:t,children:`npm start
# open http://localhost:3000/products`})]})}function G(){return e("div",{style:u,children:[e("h1",{style:y,children:"Deployment"}),e("p",{style:f,children:"EDS uses a branch-based deployment model. Every push to GitHub generates a preview URL automatically — no CI/CD pipeline to configure."}),e("div",{style:a,children:[e("strong",{children:"Prerequisite:"})," The"," ",e("a",{href:"https://github.com/apps/aem-code-sync",target:"_blank",rel:"noopener noreferrer",children:"AEM Code Sync"})," ","GitHub App must be installed on your repository."]}),e("h2",{style:n,children:"URL patterns"}),e("table",{style:R,children:[e("thead",{children:e("tr",{children:[e("th",{style:s,children:"Environment"}),e("th",{style:s,children:"URL pattern"}),e("th",{style:s,children:"When"})]})}),e("tbody",{children:[e("tr",{children:[e("td",{style:r,children:"Local dev"}),e("td",{style:i,children:"http://localhost:3000"}),e("td",{style:r,children:["Running ",e("code",{children:"npm start"})]})]}),e("tr",{children:[e("td",{style:r,children:"Branch preview"}),e("td",{style:i,children:"https://{branch}--{repo}--{owner}.aem.page/"}),e("td",{style:r,children:"Any push to a feature branch"})]}),e("tr",{children:[e("td",{style:r,children:"Main preview"}),e("td",{style:i,children:"https://main--{repo}--{owner}.aem.page/"}),e("td",{style:r,children:"Merged to main (pre-production)"})]}),e("tr",{children:[e("td",{style:r,children:"Production live"}),e("td",{style:i,children:"https://main--{repo}--{owner}.aem.live/"}),e("td",{style:r,children:"Published from AEM Sidekick"})]})]})]}),e("h2",{style:n,children:"Development workflow"}),e("pre",{style:t,children:`# 1. Create a feature branch
git checkout -b feature/my-change

# 2. Make your changes locally (auto-reload at localhost:3000)

# 3. Lint before committing
npm run lint

# 4. Push — a preview URL is generated automatically
git push origin feature/my-change

# 5. Open a PR and merge to main
# → https://main--{repo}--{owner}.aem.page/ is updated

# 6. Publish via AEM Sidekick to push to .aem.live/`}),e("h2",{style:n,children:"Customising your fork"}),e("ul",{style:M,children:[e("li",{children:[e("strong",{children:"Blocks"})," — edit or add directories under ",e("code",{children:"blocks/"}),". Each block is a self-contained JS + CSS module."]}),e("li",{children:[e("strong",{children:"Styles"})," — override ",e("code",{children:"--usf-*"})," CSS tokens in ",e("code",{children:"styles/styles.css"})," for branding."]}),e("li",{children:[e("strong",{children:"Content"})," — author pages in Google Docs or SharePoint and mount them via ",e("code",{children:"fstab.yaml"}),"."]}),e("li",{children:[e("strong",{children:"UI upgrades"})," — bump ",e("code",{children:"@universal-sf-ui/*"})," in ",e("code",{children:"package.json"}),", then re-run ",e("code",{children:"npm run setup:ui"}),"."]})]}),e("div",{style:g,children:["See the docs in your forked repo: ",e("code",{children:"ARCHITECTURE.md"}),","," ",e("code",{children:"UNIVERSAL-SF-UI-GUIDE.md"}),", and ",e("code",{children:"ADOBE-COMMERCE-INTEGRATION.md"})," ","for deeper guidance on each area."]})]})}const O={title:"Introduction/EDS Commerce Boilerplate",parameters:{layout:"fullscreen",docs:{description:{component:"How to use this template, configure, and deploy the EDS Commerce Boilerplate."}}},tags:["autodocs"]},d={render:()=>e(L,{}),parameters:{docs:{description:{story:"What the boilerplate is, its architecture, and the project structure."}}}},h={name:"Use This Template & Setup",render:()=>e(T,{}),parameters:{docs:{description:{story:"Create a repo from the template on GitHub, install dependencies, generate the UI library, and start the local dev server."}}}},p={name:"Connecting Adobe Commerce",render:()=>e(z,{}),parameters:{docs:{description:{story:"Configure commerce-config.js and head.html to connect a real Adobe Commerce (Magento 2.4+) store."}}}},m={render:()=>e(G,{}),parameters:{docs:{description:{story:"Branch-based deployment, URL patterns, and how to publish to production using AEM Sidekick."}}}};var b,S,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <OverviewContent />,
  parameters: {
    docs: {
      description: {
        story: 'What the boilerplate is, its architecture, and the project structure.'
      }
    }
  }
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var k,w,A;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Use This Template & Setup',
  render: () => <ForkAndSetupContent />,
  parameters: {
    docs: {
      description: {
        story: 'Create a repo from the template on GitHub, install dependencies, generate the UI library, and start the local dev server.'
      }
    }
  }
}`,...(A=(w=h.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,x,I;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Connecting Adobe Commerce',
  render: () => <CommerceConfigContent />,
  parameters: {
    docs: {
      description: {
        story: 'Configure commerce-config.js and head.html to connect a real Adobe Commerce (Magento 2.4+) store.'
      }
    }
  }
}`,...(I=(x=p.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var U,P,D;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <DeploymentContent />,
  parameters: {
    docs: {
      description: {
        story: 'Branch-based deployment, URL patterns, and how to publish to production using AEM Sidekick.'
      }
    }
  }
}`,...(D=(P=m.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const B=["Overview","ForkAndSetup","ConnectingAdobeCommerce","Deployment"];export{p as ConnectingAdobeCommerce,m as Deployment,h as ForkAndSetup,d as Overview,B as __namedExportsOrder,O as default};
