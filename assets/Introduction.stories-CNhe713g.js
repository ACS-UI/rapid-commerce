import{u as e}from"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";const h={padding:"var(--usf-space-8, 2rem)",maxWidth:"720px",margin:"0 auto",fontFamily:"var(--usf-font-sans, system-ui, sans-serif)",color:"var(--usf-text-primary, #111)",lineHeight:"1.6"},f={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-3xl, 1.875rem)",fontWeight:"var(--usf-font-weight-bold, 700)",letterSpacing:"-0.025em"},y={margin:"0 0 var(--usf-space-8, 2rem)",fontSize:"var(--usf-font-size-lg, 1.125rem)",color:"var(--usf-text-secondary, #555)"},r={margin:"0 0 var(--usf-space-3, 0.75rem)",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"var(--usf-font-weight-semibold, 600)",color:"var(--usf-text-primary, #111)"},v={listStyle:"none",margin:"0 0 var(--usf-space-8, 2rem)",padding:"0"},g={display:"block",padding:"var(--usf-space-2, 0.5rem) 0",color:"var(--usf-text-primary, #111)",textDecoration:"none",fontSize:"var(--usf-font-size-base, 1rem)",borderBottom:"1px solid var(--usf-border-primary, #eee)"},S={background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-lg, 12px)",padding:"var(--usf-space-6, 1.5rem)",margin:"0 0 var(--usf-space-8, 2rem)",textAlign:"center"},b={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridAutoRows:"1fr",alignItems:"stretch",gap:"var(--usf-space-4, 1rem)",listStyle:"none",padding:"0",margin:"0"},n={display:"flex",minHeight:"0"},a={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",flex:"1",minHeight:"140px",gap:"var(--usf-space-3, 0.75rem)",padding:"var(--usf-space-5, 1.25rem)",color:"var(--usf-text-primary, #111)",textDecoration:"none",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"500",background:"var(--usf-bg-primary, #fff)",border:"1px solid var(--usf-border-primary, #e5e7eb)",borderRadius:"var(--usf-radius-md, 8px)",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.06)",transition:"box-shadow 0.2s ease, border-color 0.2s ease",textAlign:"center"},s={width:"40px",height:"40px",flexShrink:"0",color:"var(--usf-primary, #3b82f6)"},x={margin:"0 0 var(--usf-space-8, 2rem)",paddingLeft:"1.25rem",color:"var(--usf-text-secondary, #555)",fontSize:"var(--usf-font-size-sm, 0.875rem)"},i={margin:"0 0 var(--usf-space-6, 1.5rem)",padding:"var(--usf-space-4, 1rem)",background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-md, 4px)",fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",fontSize:"var(--usf-font-size-sm, 0.875rem)",overflow:"auto",whiteSpace:"pre",color:"var(--usf-text-primary, #111)"},k=`// 1. Load CSS (tokens + library styles)
const loadCSS = (href) =>
  new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error('Failed to load ' + href));
    document.head.appendChild(link);
  });

await Promise.all([
  loadCSS('/path/to/tokens.css'),
  loadCSS('/path/to/style.css'),
]);

// 2. Import the component (use your bundler or copy built script)
import { ProductDetails } from '@universal-sf-ui/product';

// 3. Product data (from your API or CMS)
const product = {
  id: '1',
  sku: 'SIMPLE-001',
  name: 'Premium Wireless Headphones',
  description: '<p>High-quality wireless headphones with 30-hour battery.</p>',
  price: { regular: 199.99, special: 149.99, currency: 'USD' },
  images: [
    { url: 'https://example.com/img.jpg', label: 'Front' },
  ],
  url: '/products/headphones',
  inStock: true,
};

// 4. Mount with .render(container, props, options)
const container = document.getElementById('product-details-root');
const instance = ProductDetails.render(container, {
  product,
  showQuantity: true,
  shippingMessage: 'Ships within 24 hours',
  onAddToCart: (p, quantity) => {
    console.log('Add to cart', p.sku, quantity);
  },
}, {
  beforeRender: (el, props) => {
    console.log('About to render ProductDetails', props.product?.name);
    // e.g. clear analytics, prepare DOM
  },
  afterRender: (el, props) => {
    console.log('ProductDetails mounted', el);
    // e.g. track view, measure, or tweak DOM
  },
});

// 5. Update or unmount later
// instance.update({ product: newProduct });
// instance.unmount();`;function w(){return e("div",{style:h,children:[e("h1",{style:f,children:"Universal Storefront UI"}),e("p",{style:y,children:"A configurable e-commerce component library built with Preact for modern storefronts. It works with Preact, React, or vanilla JavaScript and is designed for headless or hybrid setups where you own the page shell and plug in UI where needed."}),e("ul",{style:x,children:[e("li",{children:["Framework-friendly: use as Preact/React components or via vanilla ",e("code",{children:".render()"})]}),e("li",{children:"Pluggable commerce: generic interfaces with an Adobe Commerce (Magento) implementation"}),e("li",{children:"Responsive, accessible (WCAG 2.1 AA), and themeable via CSS custom properties (tokens)"})]}),e("div",{style:{textAlign:"center"},children:[e("h2",{style:r,children:"Demos"}),e("p",{style:{margin:"0 0 var(--usf-space-4)",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Live storefronts built with Edge Delivery Services (EDS) and Universal Storefront UI."})]}),e("style",{children:".intro-demo-card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border-color: var(--usf-primary, #3b82f6); }"}),e("div",{style:S,children:e("ul",{style:b,children:[e("li",{style:n,children:e("a",{href:"https://main--eds-commerce-boilerplate--acs-ui.aem.live/",target:"_blank",rel:"noopener noreferrer",className:"intro-demo-card",style:a,children:[e("span",{style:s,"aria-hidden":!0,children:e("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M3 21h18"}),e("path",{d:"M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"}),e("path",{d:"M5 21V11h4v10"}),e("path",{d:"M15 21V11h4v10"})]})}),"EDS with Adobe Commerce Demo"]})}),e("li",{style:n,children:e("a",{href:"https://fakestore--eds-commerce-boilerplate--acs-ui.aem.live/",target:"_blank",rel:"noopener noreferrer",className:"intro-demo-card",style:a,children:[e("span",{style:s,"aria-hidden":!0,children:e("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M3 21h18"}),e("path",{d:"M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"}),e("path",{d:"M5 21V11h4v10"}),e("path",{d:"M15 21V11h4v10"})]})}),"EDS with Fakestore API Demo"]})}),e("li",{style:n,children:e("a",{href:"https://bot--eds-commerce-boilerplate--acs-ui.aem.live/bot-full",target:"_blank",rel:"noopener noreferrer",className:"intro-demo-card",style:a,children:[e("span",{style:s,"aria-hidden":!0,children:e("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M3 21h18"}),e("path",{d:"M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"}),e("path",{d:"M5 21V11h4v10"}),e("path",{d:"M15 21V11h4v10"})]})}),"Bot / Stepper demo"]})})]})})]})}function C(){return e("div",{style:h,children:[e("h1",{style:f,children:"Setup"}),e("p",{style:y,children:["Install the packages, load the library styles, then mount components with the ",e("code",{children:".render()"})," API. For a full vanilla JS example including ",e("code",{children:"beforeRender"})," and ",e("code",{children:"afterRender"}),", see below."]}),e("h2",{style:r,children:"1. Install"}),e("pre",{style:i,children:"npm install @universal-sf-ui/product @universal-sf-ui/adobe-commerce"}),e("h2",{style:r,children:"2. Load styles"}),e("p",{style:{margin:"0 0 0.25rem",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Include the library tokens and base styles (paths depend on your build or CDN):"}),e("pre",{style:i,children:`<link rel="stylesheet" href="/path/to/tokens.css">
<link rel="stylesheet" href="/path/to/style.css">`}),e("h2",{style:r,children:"3. Use a component"}),e("p",{style:{margin:"0 0 0.5rem",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:["With vanilla JS, call ",e("code",{children:".render(container, props, options)"}),". The third argument is optional and can include ",e("code",{children:"beforeRender"})," and ",e("code",{children:"afterRender"})," callbacks. Example with ProductDetails:"]}),e("pre",{style:i,children:k}),e("h2",{style:r,children:"Theming"}),e("p",{style:{margin:"0 0 var(--usf-space-2)",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Override CSS custom properties to match your brand."}),e("ul",{style:v,children:e("li",{children:e("a",{href:"?path=/story/introduction-design-system--design-system",style:g,children:"Design System"})})})]})}const D={title:"Introduction",parameters:{layout:"fullscreen",docs:{description:{component:"Universal Storefront UI: overview, architecture, and setup for vanilla JS."}}},tags:["autodocs"]},t={render:()=>e(w,{}),parameters:{docs:{description:{story:"Overview, description, and architecture. Use the sidebar to open Pages and Components."}}}},o={render:()=>e(C,{}),parameters:{docs:{description:{story:"Install, load CSS, and a full JavaScript example using ProductDetails.render() with beforeRender and afterRender."}}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <WelcomeContent />,
  parameters: {
    docs: {
      description: {
        story: 'Overview, description, and architecture. Use the sidebar to open Pages and Components.'
      }
    }
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <SetupContent />,
  parameters: {
    docs: {
      description: {
        story: 'Install, load CSS, and a full JavaScript example using ProductDetails.render() with beforeRender and afterRender.'
      }
    }
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["Welcome","Setup"];export{o as Setup,t as Welcome,I as __namedExportsOrder,D as default};
