import{u as e}from"./jsxRuntime.module-Bz831lzD.js";import{k as M}from"./preact.module-AKZfXHO-.js";const A={padding:"var(--usf-space-8, 2rem)",maxWidth:"800px",margin:"0 auto",fontFamily:"var(--usf-font-sans, system-ui, sans-serif)",color:"var(--usf-text-primary, #111)",lineHeight:"1.6"},x={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-3xl, 1.875rem)",fontWeight:"var(--usf-font-weight-bold, 700)"},T={margin:"0 0 var(--usf-space-6, 1.5rem)",fontSize:"var(--usf-font-size-lg, 1.125rem)",color:"var(--usf-text-secondary, #555)"},r={margin:"0 0 var(--usf-space-3, 0.75rem)",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"var(--usf-font-weight-semibold, 600)",color:"var(--usf-text-primary, #111)"},n={margin:"0 0 var(--usf-space-4, 1rem)",padding:"var(--usf-space-4, 1rem)",background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-md, 4px)",fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",fontSize:"var(--usf-font-size-sm, 0.875rem)",overflow:"auto",whiteSpace:"pre",color:"var(--usf-text-primary, #111)"},t={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-base, 1rem)",color:"var(--usf-text-primary, #111)"};function c({title:w,lead:k,children:O}){return e("div",{style:A,children:[e("h1",{style:x,children:w}),e("p",{style:T,children:k}),O]})}const R=e(M,{children:[e("h2",{style:r,children:"Interfaces (@universal-sf-ui/commerce-interface)"}),e("p",{style:t,children:["The library defines abstract service classes, a ",e("code",{children:"CommerceServices"})," type, and"," ",e("code",{children:"createCommerceServices"})," so any backend can be plugged in. Implement the interfaces and pass your services into the UI (e.g. via stores or props)."]}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem",color:"var(--usf-text-secondary)"},children:[e("li",{children:[e("strong",{children:"ProductService"})," – searchProducts, getProduct, getRecommendations"]}),e("li",{children:[e("strong",{children:"CartService"})," – getCart, addToCart, updateCartItem, removeFromCart, clearCart, applyCoupon, placeOrder, getOrderByToken, setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals"]}),e("li",{children:[e("strong",{children:"CustomerService"})," – getCurrentCustomer, signIn, signOut (optional)"]})]}),e("p",{style:t,children:[e("code",{children:"CommerceServices"})," is the generic shape ",e("code",{children:"{ products, cart, customer }"}),". Use"," ",e("code",{children:["createCommerceServices(","{ products, cart, customer }",")"]})," to build a typed object from your implementations. Backends like Adobe Commerce extend this (e.g. add ",e("code",{children:"client"}),")."]}),e("h2",{style:r,children:"Implementing a custom backend"}),e("p",{style:t,children:["Extend the base class and implement each method (e.g. call your REST or GraphQL API). Use the optional ",e("code",{children:"query"}),", ",e("code",{children:"transform"}),", and ",e("code",{children:"afterTransform"})," options per call to customize requests or map responses. The Adobe Commerce package is one implementation."]})]}),L=`import { ProductService } from '@universal-sf-ui/commerce-interface';

class MyProductService extends ProductService {
  async searchProducts(params) {
    const res = await fetch(\`/api/products?q=\${params.query}&page=\${params.page}\`);
    const data = await res.json();
    return { items: data.items, total: data.total };
  }
  async getProduct(id) {
    const res = await fetch(\`/api/products/\${id}\`);
    return res.json();
  }
  async getRecommendations(productId, type) {
    const res = await fetch(\`/api/products/\${productId}/recommendations?type=\${type}\`);
    return res.json();
  }
}

const productService = new MyProductService({});
const results = await productService.searchProducts({ query: 'headphones', page: 1 });`,D=`import { CartService } from '@universal-sf-ui/commerce-interface';

class MyCartService extends CartService {
  async getCart() {
    const res = await fetch('/api/cart');
    return res.json();
  }
  async addToCart(sku, quantity, options = {}) {
    const res = await fetch('/api/cart/items', {
      method: 'POST',
      body: JSON.stringify({ sku, quantity }),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }
  async placeOrder(cartId) {
    const res = await fetch(\`/api/cart/\${cartId}/place-order\`, { method: 'POST' });
    return res.json();
  }
  async getOrderByToken(token) {
    const res = await fetch(\`/api/orders?token=\${token}\`);
    const data = await res.json();
    return { order: data };
  }
  // ... removeFromCart, updateCartItem, clearCart, applyCoupon,
  // setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods,
  // setPaymentMethodOnCart, estimateTotals (for checkout)
}`,U=`import {
  createCommerceServices,
  type CommerceServices,
  ProductService,
  CartService,
  CustomerService,
} from '@universal-sf-ui/commerce-interface';

// Your implementations (extend base classes)
const products = new MyProductService(config);
const cart = new MyCartService(config);
const customer = new MyCustomerService(config);

// Build a typed CommerceServices object
const commerce: CommerceServices = createCommerceServices({
  products,
  cart,
  customer,
});

// Use anywhere that expects CommerceServices
function init(commerce: CommerceServices) {
  commerce.products.searchProducts({ query: 'shirt', page: 1 });
  commerce.cart.getCart();
  commerce.customer.getCurrentCustomer();
}`,_=`import { createAdobeCommerceServices } from '@universal-sf-ui/adobe-commerce';
import type { CommerceServices } from '@universal-sf-ui/commerce-interface';

const config = {
  endpoint: 'https://your-adobe-commerce-edge/graphql',
  apiKey: 'your-api-key',
  storeCode: 'default',
  storeViewCode: 'default',
  websiteCode: 'base',
  environmentId: 'env-id',
};

// Returns { client, products, cart, customer } (extends CommerceServices with client)
const commerce = createAdobeCommerceServices(config);

// Product operations
const results = await commerce.products.searchProducts({ query: 'shirt', page: 1 });
const product = await commerce.products.getProduct('SKU-001');

// Cart operations
const cart = await commerce.cart.getCart();
const updated = await commerce.cart.addToCart('SKU-001', 2);
const orderResult = await commerce.cart.placeOrder(cart.id);

// Order by token (for confirmation page)
const orderData = await commerce.cart.getOrderByToken(orderResult.order.token);`,B={title:"Commerce Services/Commerce Services",parameters:{layout:"fullscreen",docs:{description:{component:"Commerce service interfaces and implementations. Use these to connect the UI to your backend."}}},tags:["autodocs"]},o={render:()=>e(c,{title:"Commerce services overview",lead:"The library separates UI from data: implement ProductService and CartService (and optionally CustomerService) to plug in any backend.",children:R}),parameters:{docs:{description:{story:"Interfaces and how to implement a custom backend."}}}},a={render:()=>e(c,{title:"ProductService",lead:"Search products, get a single product by ID/SKU, and fetch recommendations. Extend the base class and implement these methods for your API.",children:[e("h2",{style:r,children:"Methods"}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem"},children:[e("li",{children:[e("code",{children:"searchProducts(params)"})," – query, filters, sort, page, pageSize → ProductSearchResult"]}),e("li",{children:[e("code",{children:"getProduct(id)"})," – product ID or SKU → Product"]}),e("li",{children:[e("code",{children:"getRecommendations(productId, type)"}),' – e.g. type "related" → Product[]']})]}),e("h2",{style:r,children:"Example implementation"}),e("pre",{style:n,children:L})]}),parameters:{docs:{description:{story:"ProductService interface and a minimal custom implementation example."}}}},s={render:()=>e(c,{title:"CartService",lead:"Manage cart and checkout: get cart, add/update/remove items, apply coupon, place order, and fetch order by token. Checkout methods include setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals.",children:[e("h2",{style:r,children:"Methods"}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem"},children:[e("li",{children:[e("code",{children:"getCart()"})," – current cart (or create one)"]}),e("li",{children:[e("code",{children:"addToCart(sku, quantity, options?)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"updateCartItem(itemId, quantity)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"removeFromCart(itemId)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"clearCart()"})," – clear the cart"]}),e("li",{children:[e("code",{children:"applyCoupon(code, options?)"})," – apply promo code"]}),e("li",{children:[e("code",{children:"placeOrder(cartId)"})," – returns PlaceOrderResult (order + errors)"]}),e("li",{children:[e("code",{children:"getOrderByToken(token)"})," – guest order by token for confirmation page"]}),e("li",{children:[e("code",{children:"setGuestEmailOnCart(cartId, email)"})," – guest checkout contact"]}),e("li",{children:[e("code",{children:"setShippingAddressOnCart(cartId, address)"})," – returns cart + shipping methods"]}),e("li",{children:[e("code",{children:"estimateShippingMethods(cartId, address)"})," – available shipping options"]}),e("li",{children:[e("code",{children:"setPaymentMethodOnCart(cartId, paymentMethodCode)"})," – set payment method"]}),e("li",{children:[e("code",{children:"estimateTotals(cartId, address, shippingMethod)"})," – cart with tax/shipping"]})]}),e("h2",{style:r,children:"Example implementation"}),e("pre",{style:n,children:D})]}),parameters:{docs:{description:{story:"CartService interface and a minimal custom implementation example."}}}},i={render:()=>e(c,{title:"Generic CommerceServices and createCommerceServices",lead:"Use the CommerceServices type and createCommerceServices to build a typed object from your product, cart, and customer service instances. Any backend that implements the interface can be passed where CommerceServices is expected.",children:[e("h2",{style:r,children:"CommerceServices type"}),e("p",{style:t,children:[e("code",{children:"CommerceServices"})," is the contract: ",e("code",{children:"{ products: ProductService; cart: CartService; customer: CustomerService }"}),". Backends (e.g. Adobe Commerce) may extend it with a ",e("code",{children:"client"})," or other properties."]}),e("h2",{style:r,children:"createCommerceServices"}),e("p",{style:t,children:["Pass an object with ",e("code",{children:"products"}),", ",e("code",{children:"cart"}),", and ",e("code",{children:"customer"}),"; the function validates and returns a ",e("code",{children:"CommerceServices"})," object. Use it when wiring custom implementations."]}),e("h2",{style:r,children:"Example"}),e("pre",{style:n,children:U})]}),parameters:{docs:{description:{story:"CommerceServices type and createCommerceServices for custom backends."}}}},d={render:()=>e(c,{title:"Adobe Commerce implementation",lead:"Ready-made implementation for Adobe Commerce (Magento) GraphQL. createAdobeCommerceServices returns an object that extends CommerceServices with a client. Configure endpoint, API key, and store codes; then use products, cart, and customer services.",children:[e("h2",{style:r,children:"Config"}),e("p",{style:t,children:[e("code",{children:"AdobeCommerceConfig"})," requires: endpoint, apiKey, storeCode, storeViewCode, websiteCode, environmentId. Optional: customerGroupId, headers, timeout."]}),e("h2",{style:r,children:"Usage"}),e("pre",{style:n,children:_})]}),parameters:{docs:{description:{story:"createAdobeCommerceServices config and usage; extends CommerceServices with client."}}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <DocLayout title="Commerce services overview" lead="The library separates UI from data: implement ProductService and CartService (and optionally CustomerService) to plug in any backend.">
      {OVERVIEW_BODY}
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'Interfaces and how to implement a custom backend.'
      }
    }
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,h,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DocLayout title="ProductService" lead="Search products, get a single product by ID/SKU, and fetch recommendations. Extend the base class and implement these methods for your API.">
      <h2 style={sectionTitleStyle}>Methods</h2>
      <ul style={{
      margin: '0 0 var(--usf-space-4)',
      paddingLeft: '1.25rem'
    }}>
        <li><code>searchProducts(params)</code> – query, filters, sort, page, pageSize → ProductSearchResult</li>
        <li><code>getProduct(id)</code> – product ID or SKU → Product</li>
        <li><code>getRecommendations(productId, type)</code> – e.g. type "related" → Product[]</li>
      </ul>
      <h2 style={sectionTitleStyle}>Example implementation</h2>
      <pre style={codeBlockStyle}>{PRODUCT_SERVICE_EXAMPLE}</pre>
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'ProductService interface and a minimal custom implementation example.'
      }
    }
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,v,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <DocLayout title="CartService" lead="Manage cart and checkout: get cart, add/update/remove items, apply coupon, place order, and fetch order by token. Checkout methods include setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals.">
      <h2 style={sectionTitleStyle}>Methods</h2>
      <ul style={{
      margin: '0 0 var(--usf-space-4)',
      paddingLeft: '1.25rem'
    }}>
        <li><code>getCart()</code> – current cart (or create one)</li>
        <li><code>addToCart(sku, quantity, options?)</code> – returns updated Cart</li>
        <li><code>updateCartItem(itemId, quantity)</code> – returns updated Cart</li>
        <li><code>removeFromCart(itemId)</code> – returns updated Cart</li>
        <li><code>clearCart()</code> – clear the cart</li>
        <li><code>applyCoupon(code, options?)</code> – apply promo code</li>
        <li><code>placeOrder(cartId)</code> – returns PlaceOrderResult (order + errors)</li>
        <li><code>getOrderByToken(token)</code> – guest order by token for confirmation page</li>
        <li><code>setGuestEmailOnCart(cartId, email)</code> – guest checkout contact</li>
        <li><code>setShippingAddressOnCart(cartId, address)</code> – returns cart + shipping methods</li>
        <li><code>estimateShippingMethods(cartId, address)</code> – available shipping options</li>
        <li><code>setPaymentMethodOnCart(cartId, paymentMethodCode)</code> – set payment method</li>
        <li><code>estimateTotals(cartId, address, shippingMethod)</code> – cart with tax/shipping</li>
      </ul>
      <h2 style={sectionTitleStyle}>Example implementation</h2>
      <pre style={codeBlockStyle}>{CART_SERVICE_EXAMPLE}</pre>
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'CartService interface and a minimal custom implementation example.'
      }
    }
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var g,f,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DocLayout title="Generic CommerceServices and createCommerceServices" lead="Use the CommerceServices type and createCommerceServices to build a typed object from your product, cart, and customer service instances. Any backend that implements the interface can be passed where CommerceServices is expected.">
      <h2 style={sectionTitleStyle}>CommerceServices type</h2>
      <p style={paragraphStyle}>
        <code>CommerceServices</code> is the contract: <code>{'{ products: ProductService; cart: CartService; customer: CustomerService }'}</code>.
        Backends (e.g. Adobe Commerce) may extend it with a <code>client</code> or other properties.
      </p>
      <h2 style={sectionTitleStyle}>createCommerceServices</h2>
      <p style={paragraphStyle}>
        Pass an object with <code>products</code>, <code>cart</code>, and <code>customer</code>; the function validates and returns
        a <code>CommerceServices</code> object. Use it when wiring custom implementations.
      </p>
      <h2 style={sectionTitleStyle}>Example</h2>
      <pre style={codeBlockStyle}>{GENERIC_COMMERCE_EXAMPLE}</pre>
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'CommerceServices type and createCommerceServices for custom backends.'
      }
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var P,E,I;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DocLayout title="Adobe Commerce implementation" lead="Ready-made implementation for Adobe Commerce (Magento) GraphQL. createAdobeCommerceServices returns an object that extends CommerceServices with a client. Configure endpoint, API key, and store codes; then use products, cart, and customer services.">
      <h2 style={sectionTitleStyle}>Config</h2>
      <p style={paragraphStyle}>
        <code>AdobeCommerceConfig</code> requires: endpoint, apiKey, storeCode, storeViewCode, websiteCode, environmentId.
        Optional: customerGroupId, headers, timeout.
      </p>
      <h2 style={sectionTitleStyle}>Usage</h2>
      <pre style={codeBlockStyle}>{ADOBE_COMMERCE_EXAMPLE}</pre>
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'createAdobeCommerceServices config and usage; extends CommerceServices with client.'
      }
    }
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const G=["Overview","ProductService","CartService","GenericCommerceServices","AdobeCommerce"];export{d as AdobeCommerce,s as CartService,i as GenericCommerceServices,o as Overview,a as ProductService,G as __namedExportsOrder,B as default};
