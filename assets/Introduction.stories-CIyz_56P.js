import{u as e}from"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";const h={padding:"var(--usf-space-8, 2rem)",maxWidth:"720px",margin:"0 auto",fontFamily:"var(--usf-font-sans, system-ui, sans-serif)",color:"var(--usf-text-primary, #111)",lineHeight:"1.6"},f={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-3xl, 1.875rem)",fontWeight:"var(--usf-font-weight-bold, 700)",letterSpacing:"-0.025em"},m={margin:"0 0 var(--usf-space-8, 2rem)",fontSize:"var(--usf-font-size-lg, 1.125rem)",color:"var(--usf-text-secondary, #555)"},t={margin:"0 0 var(--usf-space-3, 0.75rem)",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"var(--usf-font-weight-semibold, 600)",color:"var(--usf-text-primary, #111)"},a={listStyle:"none",margin:"0 0 var(--usf-space-8, 2rem)",padding:0},r={display:"block",padding:"var(--usf-space-2, 0.5rem) 0",color:"var(--usf-text-primary, #111)",textDecoration:"none",fontSize:"var(--usf-font-size-base, 1rem)",borderBottom:"1px solid var(--usf-border-primary, #eee)"},y={margin:"0 0 var(--usf-space-8, 2rem)",paddingLeft:"1.25rem",color:"var(--usf-text-secondary, #555)",fontSize:"var(--usf-font-size-sm, 0.875rem)"},s={margin:"0 0 var(--usf-space-6, 1.5rem)",padding:"var(--usf-space-4, 1rem)",background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-md, 4px)",fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",fontSize:"var(--usf-font-size-sm, 0.875rem)",overflow:"auto",whiteSpace:"pre",color:"var(--usf-text-primary, #111)"},g=`// 1. Load CSS (tokens + library styles)
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
// instance.unmount();`;function v(){return e("div",{style:h,children:[e("h1",{style:f,children:"Universal Storefront UI"}),e("p",{style:m,children:"A configurable e-commerce component library built with Preact for modern storefronts. It works with Preact, React, or vanilla JavaScript and is designed for headless or hybrid setups where you own the page shell and plug in UI where needed."}),e("ul",{style:y,children:[e("li",{children:["Framework-friendly: use as Preact/React components or via vanilla ",e("code",{children:".render()"})]}),e("li",{children:"Pluggable commerce: generic interfaces with an Adobe Commerce (Magento) implementation"}),e("li",{children:"Responsive, accessible (WCAG 2.1 AA), and themeable via CSS custom properties (tokens)"})]}),e("h2",{style:t,children:"Theming"}),e("p",{style:{margin:"0 0 var(--usf-space-2)",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Override CSS custom properties to match your brand."}),e("ul",{style:a,children:e("li",{children:e("a",{href:"?path=/story/introduction-design-system--design-system",style:r,children:"Design System"})})}),e("h2",{style:t,children:"Pages"}),e("p",{style:{margin:"0 0 var(--usf-space-2)",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Full-page flows: cart, checkout, product details, order confirmation."}),e("ul",{style:a,children:[e("li",{children:e("a",{href:"?path=/story/cart-cart--default",style:r,children:"Cart"})}),e("li",{children:e("a",{href:"?path=/story/checkout-checkout--default",style:r,children:"Checkout"})}),e("li",{children:e("a",{href:"?path=/story/product-productdetails--default",style:r,children:"Product Details"})}),e("li",{children:e("a",{href:"?path=/story/checkout-orderdetails--default",style:r,children:"Order Details"})})]}),e("h2",{style:t,children:"Components"}),e("p",{style:{margin:"0 0 var(--usf-space-2)",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Building blocks: product card, grid, filters, pagination, sort, mini cart, recommendations."}),e("ul",{style:a,children:[e("li",{children:e("a",{href:"?path=/story/product-productcard--default",style:r,children:"Product Card"})}),e("li",{children:e("a",{href:"?path=/story/product-productgrid--default",style:r,children:"Product Grid"})}),e("li",{children:e("a",{href:"?path=/story/product-filterpanel--default",style:r,children:"Filter Panel"})}),e("li",{children:e("a",{href:"?path=/story/product-pagination--default",style:r,children:"Pagination"})}),e("li",{children:e("a",{href:"?path=/story/product-sortcontrols--default",style:r,children:"Sort Controls"})}),e("li",{children:e("a",{href:"?path=/story/cart-minicart--default",style:r,children:"Mini Cart"})}),e("li",{children:e("a",{href:"?path=/story/product-productrecommendations--default",style:r,children:"Product Recommendations"})})]})]})}function S(){return e("div",{style:h,children:[e("h1",{style:f,children:"Setup"}),e("p",{style:m,children:["Install the packages, load the library styles, then mount components with the ",e("code",{children:".render()"})," API. For a full vanilla JS example including ",e("code",{children:"beforeRender"})," and ",e("code",{children:"afterRender"}),", see below."]}),e("h2",{style:t,children:"1. Install"}),e("pre",{style:s,children:"npm install @universal-sf-ui/product @universal-sf-ui/adobe-commerce"}),e("h2",{style:t,children:"2. Load styles"}),e("p",{style:{margin:"0 0 0.25rem",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:"Include the library tokens and base styles (paths depend on your build or CDN):"}),e("pre",{style:s,children:`<link rel="stylesheet" href="/path/to/tokens.css">
<link rel="stylesheet" href="/path/to/style.css">`}),e("h2",{style:t,children:"3. Use a component"}),e("p",{style:{margin:"0 0 0.5rem",fontSize:"var(--usf-font-size-sm)",color:"var(--usf-text-secondary)"},children:["With vanilla JS, call ",e("code",{children:".render(container, props, options)"}),". The third argument is optional and can include ",e("code",{children:"beforeRender"})," and ",e("code",{children:"afterRender"})," callbacks. Example with ProductDetails:"]}),e("pre",{style:s,children:g})]})}const w={title:"Introduction",parameters:{layout:"fullscreen",docs:{description:{component:"Universal Storefront UI: overview, architecture, and setup for vanilla JS."}}},tags:["autodocs"]},n={render:()=>e(v,{}),parameters:{docs:{description:{story:"Overview, description, and architecture. Use the sidebar to open Pages and Components."}}}},o={render:()=>e(S,{}),parameters:{docs:{description:{story:"Install, load CSS, and a full JavaScript example using ProductDetails.render() with beforeRender and afterRender."}}}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <WelcomeContent />,
  parameters: {
    docs: {
      description: {
        story: 'Overview, description, and architecture. Use the sidebar to open Pages and Components.'
      }
    }
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SetupContent />,
  parameters: {
    docs: {
      description: {
        story: 'Install, load CSS, and a full JavaScript example using ProductDetails.render() with beforeRender and afterRender.'
      }
    }
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const P=["Welcome","Setup"];export{o as Setup,n as Welcome,P as __namedExportsOrder,w as default};
