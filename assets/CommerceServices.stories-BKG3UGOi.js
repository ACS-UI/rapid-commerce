import{u as e}from"./jsxRuntime.module-Bz831lzD.js";import{k as R}from"./preact.module-AKZfXHO-.js";const L={padding:"var(--usf-space-8, 2rem)",maxWidth:"800px",margin:"0 auto",fontFamily:"var(--usf-font-sans, system-ui, sans-serif)",color:"var(--usf-text-primary, #111)",lineHeight:"1.6"},U={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-3xl, 1.875rem)",fontWeight:"var(--usf-font-weight-bold, 700)"},j={margin:"0 0 var(--usf-space-6, 1.5rem)",fontSize:"var(--usf-font-size-lg, 1.125rem)",color:"var(--usf-text-secondary, #555)"},t={margin:"0 0 var(--usf-space-3, 0.75rem)",fontSize:"var(--usf-font-size-base, 1rem)",fontWeight:"var(--usf-font-weight-semibold, 600)",color:"var(--usf-text-primary, #111)"},c={margin:"0 0 var(--usf-space-4, 1rem)",padding:"var(--usf-space-4, 1rem)",background:"var(--usf-bg-secondary, #f5f5f5)",borderRadius:"var(--usf-radius-md, 4px)",fontFamily:"var(--usf-font-mono, ui-monospace, monospace)",fontSize:"var(--usf-font-size-sm, 0.875rem)",overflow:"auto",whiteSpace:"pre",color:"var(--usf-text-primary, #111)"},r={margin:"0 0 var(--usf-space-4, 1rem)",fontSize:"var(--usf-font-size-base, 1rem)",color:"var(--usf-text-primary, #111)"};function o({title:M,lead:T,children:x}){return e("div",{style:L,children:[e("h1",{style:U,children:M}),e("p",{style:j,children:T}),x]})}const q=e(R,{children:[e("h2",{style:t,children:"Interfaces (@universal-sf-ui/commerce-interface)"}),e("p",{style:r,children:["The library defines abstract service classes, a ",e("code",{children:"CommerceServices"})," type, and"," ",e("code",{children:"createCommerceServices"})," so any backend can be plugged in. Implement the interfaces and pass your services into the UI (e.g. via stores or props)."]}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem",color:"var(--usf-text-secondary)"},children:[e("li",{children:[e("strong",{children:"ProductService"})," – searchProducts, getProduct, getRecommendations"]}),e("li",{children:[e("strong",{children:"CartService"})," – getCart, addToCart, updateCartItem, removeFromCart, clearCart, applyCoupon, placeOrder, getOrderByToken, setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals"]}),e("li",{children:[e("strong",{children:"CustomerService"})," – getCurrentCustomer, signIn, signUp, signOut, updateCustomer, changePassword, getCustomerOrders, getOrderByNumber"]})]}),e("p",{style:r,children:[e("code",{children:"CommerceServices"})," is the generic shape ",e("code",{children:"{ products, cart, customer }"}),". Use"," ",e("code",{children:["createCommerceServices(","{ products, cart, customer }",")"]})," to build a typed object from your implementations. Backends like Adobe Commerce extend this (e.g. add ",e("code",{children:"client"}),")."]}),e("h2",{style:t,children:"Implementing a custom backend"}),e("p",{style:r,children:["Extend the base class and implement each method (e.g. call your REST or GraphQL API). Use the optional ",e("code",{children:"query"}),", ",e("code",{children:"transform"}),", and ",e("code",{children:"afterTransform"})," options per call to customize requests or map responses. The Adobe Commerce package is one implementation."]})]}),B=`import { ProductService } from '@universal-sf-ui/commerce-interface';

class MyProductService extends ProductService {
  async searchProducts(params, options = {}) {
    const res = await fetch(\`/api/products?q=\${params.query}&page=\${params.page}\`);
    const data = await res.json();
    return { items: data.items, total: data.total };
  }
  async getProduct(id, options = {}) {
    const res = await fetch(\`/api/products/\${id}\`);
    return res.json();
  }
  async getRecommendations(productId, type = 'related', options = {}) {
    const res = await fetch(\`/api/products/\${productId}/recommendations?type=\${type}\`);
    return res.json();
  }
}

const productService = new MyProductService({});
const results = await productService.searchProducts({ query: 'headphones', page: 1 });`,D=`import { CartService } from '@universal-sf-ui/commerce-interface';

class MyCartService extends CartService {
  async getCart(options = {}) {
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
  async placeOrder(cartId, options = {}) {
    const res = await fetch(\`/api/cart/\${cartId}/place-order\`, { method: 'POST' });
    return res.json();
  }
  async getOrderByToken(token, options = {}) {
    const res = await fetch(\`/api/orders?token=\${token}\`);
    const data = await res.json();
    return { order: data };
  }
  // ... removeFromCart(itemId, options), updateCartItem(itemId, quantity, options),
  // clearCart(), applyCoupon(code, options), setGuestEmailOnCart, setShippingAddressOnCart,
  // estimateShippingMethods, setPaymentMethodOnCart, estimateTotals (for checkout)
}`,_=`import {
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
}`,G=`import { createAdobeCommerceServices } from '@universal-sf-ui/adobe-commerce';
import type { AdobeCommerceServices } from '@universal-sf-ui/adobe-commerce';

const config = {
  endpoint: 'https://your-adobe-commerce-edge/graphql',
  apiKey: 'your-api-key',
  storeCode: 'default',
  storeViewCode: 'default',
  websiteCode: 'base',
  environmentId: 'env-id',
  // optional: customerGroupId, headers, timeout, getAuthToken
};

// Optional per-service defaults (products?, cart?, customer?)
const serviceOptions = {};

// Returns { client, products, cart, customer } (AdobeCommerceServices)
const commerce: AdobeCommerceServices = createAdobeCommerceServices(config, serviceOptions);

// Product operations
const results = await commerce.products.searchProducts({ query: 'shirt', page: 1 });
const product = await commerce.products.getProduct('SKU-001');

// Cart operations
const cart = await commerce.cart.getCart();
const updated = await commerce.cart.addToCart('SKU-001', 2);
const orderResult = await commerce.cart.placeOrder(cart.id);

// Order by token (for confirmation page)
const orderData = await commerce.cart.getOrderByToken(orderResult.order?.token ?? '');

// Customer operations (signIn, signUp, getCurrentCustomer, updateCustomer, etc.)
const customer = await commerce.customer.getCurrentCustomer();`,X={title:"Commerce Services/Commerce Services",parameters:{layout:"fullscreen",docs:{description:{component:"Commerce service interfaces and implementations. Use these to connect the UI to your backend."}}},tags:["autodocs"]},s={render:()=>e(o,{title:"Commerce services overview",lead:"The library separates UI from data: implement ProductService and CartService (and optionally CustomerService) to plug in any backend.",children:q}),parameters:{docs:{description:{story:"Interfaces and how to implement a custom backend."}}}},a={render:()=>e(o,{title:"ProductService",lead:"Search products, get a single product by ID/SKU, and fetch recommendations. Extend the base class and implement these methods. Each method accepts an optional options object (query, transform, afterTransform) for customizing requests.",children:[e("h2",{style:t,children:"Methods"}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem"},children:[e("li",{children:[e("code",{children:"searchProducts(params, options?)"})," – query, filters, sort, page, pageSize → ProductSearchResult"]}),e("li",{children:[e("code",{children:"getProduct(id, options?)"})," – product ID or SKU → Product"]}),e("li",{children:[e("code",{children:"getRecommendations(productId, type?, options?)"}),' – type defaults to "related" → Product[]']})]}),e("h2",{style:t,children:"Example implementation"}),e("pre",{style:c,children:B})]}),parameters:{docs:{description:{story:"ProductService interface and a minimal custom implementation example."}}}},N=`import { CustomerService } from '@universal-sf-ui/commerce-interface';

class MyCustomerService extends CustomerService {
  async getCurrentCustomer(options = {}) {
    const res = await fetch('/api/customer');
    if (!res.ok) return null;
    return res.json();
  }
  async signIn(email, password, options = {}) {
    const res = await fetch('/api/customer/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }
  async signUp(input, options = {}) {
    const res = await fetch('/api/customer', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: { 'Content-Type': 'application/json' },
    });
    return res.json();
  }
  async signOut() { await fetch('/api/customer/logout', { method: 'POST' }); }
  async updateCustomer(input, options = {}) { /* ... */ }
  async changePassword(input, options = {}) { /* ... */ }
  async getCustomerOrders(params = {}, options = {}) { /* ... */ }
  async getOrderByNumber(orderNumber, options = {}) { /* ... */ }
}`,i={render:()=>e(o,{title:"CartService",lead:"Manage cart and checkout: get cart, add/update/remove items, apply coupon, place order, and fetch order by token. Checkout methods include setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals. All methods accept an optional options object (query, transform, afterTransform) for customizing requests.",children:[e("h2",{style:t,children:"Methods"}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem"},children:[e("li",{children:[e("code",{children:"getCart(options?)"})," – current cart (or create one)"]}),e("li",{children:[e("code",{children:"addToCart(sku, quantity, options?)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"updateCartItem(itemId, quantity, options?)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"removeFromCart(itemId, options?)"})," – returns updated Cart"]}),e("li",{children:[e("code",{children:"clearCart()"})," – clear the cart"]}),e("li",{children:[e("code",{children:"applyCoupon(code, options?)"})," – apply promo code"]}),e("li",{children:[e("code",{children:"placeOrder(cartId, options?)"})," – returns PlaceOrderResult (order + errors)"]}),e("li",{children:[e("code",{children:"getOrderByToken(token, options?)"})," – guest order by token for confirmation page"]}),e("li",{children:[e("code",{children:"setGuestEmailOnCart(cartId, email, options?)"})," – guest checkout contact"]}),e("li",{children:[e("code",{children:"setShippingAddressOnCart(cartId, address, options?)"})," – returns SetShippingAddressOnCartResult (cart + shippingMethods)"]}),e("li",{children:[e("code",{children:"estimateShippingMethods(cartId, address, options?)"})," – returns ShippingMethodOption[]"]}),e("li",{children:[e("code",{children:"setPaymentMethodOnCart(cartId, paymentMethodCode, options?)"})," – set payment method"]}),e("li",{children:[e("code",{children:"estimateTotals(cartId, address, shippingMethod, options?)"})," – cart with tax/shipping"]})]}),e("h2",{style:t,children:"Example implementation"}),e("pre",{style:c,children:D})]}),parameters:{docs:{description:{story:"CartService interface and a minimal custom implementation example."}}}},n={render:()=>e(o,{title:"CustomerService",lead:"Customer account and auth: get current customer, sign in/up/out, update profile, change password, and list order history. Extend the base class and implement these methods for your API.",children:[e("h2",{style:t,children:"Methods"}),e("ul",{style:{margin:"0 0 var(--usf-space-4)",paddingLeft:"1.25rem"},children:[e("li",{children:[e("code",{children:"getCurrentCustomer(options?)"})," – current customer or null"]}),e("li",{children:[e("code",{children:"signIn(email, password, options?)"})," – returns Customer"]}),e("li",{children:[e("code",{children:"signUp(input, options?)"})," – CreateCustomerInput (firstName, lastName, email, password) → Customer"]}),e("li",{children:[e("code",{children:"signOut()"})," – sign out"]}),e("li",{children:[e("code",{children:"updateCustomer(input, options?)"})," – UpdateCustomerInput (firstName?, lastName?, email?) → Customer"]}),e("li",{children:[e("code",{children:"changePassword(input, options?)"})," – ChangePasswordInput (currentPassword, newPassword) → void"]}),e("li",{children:[e("code",{children:"getCustomerOrders(params?, options?)"})," – page, pageSize, filter, sort → GetCustomerOrdersResult"]}),e("li",{children:[e("code",{children:"getOrderByNumber(orderNumber, options?)"})," – logged-in order detail → GetOrderByNumberResult"]})]}),e("h2",{style:t,children:"Example implementation"}),e("pre",{style:c,children:N})]}),parameters:{docs:{description:{story:"CustomerService interface and a minimal custom implementation example."}}}},d={render:()=>e(o,{title:"Generic CommerceServices and createCommerceServices",lead:"Use the CommerceServices type and createCommerceServices to build a typed object from your product, cart, and customer service instances. Any backend that implements the interface can be passed where CommerceServices is expected.",children:[e("h2",{style:t,children:"CommerceServices type"}),e("p",{style:r,children:[e("code",{children:"CommerceServices"})," is the contract: ",e("code",{children:"{ products: ProductService; cart: CartService; customer: CustomerService }"}),". Backends (e.g. Adobe Commerce) may extend it with a ",e("code",{children:"client"})," or other properties."]}),e("h2",{style:t,children:"createCommerceServices"}),e("p",{style:r,children:["Pass an object with ",e("code",{children:"products"}),", ",e("code",{children:"cart"}),", and ",e("code",{children:"customer"}),"; the function validates and returns a ",e("code",{children:"CommerceServices"})," object. Use it when wiring custom implementations."]}),e("h2",{style:t,children:"Example"}),e("pre",{style:c,children:_})]}),parameters:{docs:{description:{story:"CommerceServices type and createCommerceServices for custom backends."}}}},m={render:()=>e(o,{title:"Adobe Commerce implementation",lead:"Ready-made implementation for Adobe Commerce (Magento) GraphQL. createAdobeCommerceServices returns an object that extends CommerceServices with a client. Configure endpoint, API key, and store codes; then use products, cart, and customer services.",children:[e("h2",{style:t,children:"Config"}),e("p",{style:r,children:[e("code",{children:"AdobeCommerceConfig"})," requires: endpoint, apiKey, storeCode, storeViewCode, websiteCode, environmentId. Optional: customerGroupId, headers, timeout, getAuthToken (for customer cart when logged in).",e("code",{children:"createAdobeCommerceServices(config, serviceOptions?)"})," accepts an optional second argument"," ",e("code",{children:"AdobeCommerceServiceOptions"})," (products?, cart?, customer?) for per-service default options."]}),e("h2",{style:t,children:"Usage"}),e("pre",{style:c,children:G})]}),parameters:{docs:{description:{story:"createAdobeCommerceServices config and usage; extends CommerceServices with client."}}}};var l,p,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,y,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DocLayout title="ProductService" lead="Search products, get a single product by ID/SKU, and fetch recommendations. Extend the base class and implement these methods. Each method accepts an optional options object (query, transform, afterTransform) for customizing requests.">
      <h2 style={sectionTitleStyle}>Methods</h2>
      <ul style={{
      margin: '0 0 var(--usf-space-4)',
      paddingLeft: '1.25rem'
    }}>
        <li><code>searchProducts(params, options?)</code> – query, filters, sort, page, pageSize → ProductSearchResult</li>
        <li><code>getProduct(id, options?)</code> – product ID or SKU → Product</li>
        <li><code>getRecommendations(productId, type?, options?)</code> – type defaults to "related" → Product[]</li>
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
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var g,f,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DocLayout title="CartService" lead="Manage cart and checkout: get cart, add/update/remove items, apply coupon, place order, and fetch order by token. Checkout methods include setGuestEmailOnCart, setShippingAddressOnCart, estimateShippingMethods, setPaymentMethodOnCart, estimateTotals. All methods accept an optional options object (query, transform, afterTransform) for customizing requests.">
      <h2 style={sectionTitleStyle}>Methods</h2>
      <ul style={{
      margin: '0 0 var(--usf-space-4)',
      paddingLeft: '1.25rem'
    }}>
        <li><code>getCart(options?)</code> – current cart (or create one)</li>
        <li><code>addToCart(sku, quantity, options?)</code> – returns updated Cart</li>
        <li><code>updateCartItem(itemId, quantity, options?)</code> – returns updated Cart</li>
        <li><code>removeFromCart(itemId, options?)</code> – returns updated Cart</li>
        <li><code>clearCart()</code> – clear the cart</li>
        <li><code>applyCoupon(code, options?)</code> – apply promo code</li>
        <li><code>placeOrder(cartId, options?)</code> – returns PlaceOrderResult (order + errors)</li>
        <li><code>getOrderByToken(token, options?)</code> – guest order by token for confirmation page</li>
        <li><code>setGuestEmailOnCart(cartId, email, options?)</code> – guest checkout contact</li>
        <li><code>setShippingAddressOnCart(cartId, address, options?)</code> – returns SetShippingAddressOnCartResult (cart + shippingMethods)</li>
        <li><code>estimateShippingMethods(cartId, address, options?)</code> – returns ShippingMethodOption[]</li>
        <li><code>setPaymentMethodOnCart(cartId, paymentMethodCode, options?)</code> – set payment method</li>
        <li><code>estimateTotals(cartId, address, shippingMethod, options?)</code> – cart with tax/shipping</li>
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
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,b,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DocLayout title="CustomerService" lead="Customer account and auth: get current customer, sign in/up/out, update profile, change password, and list order history. Extend the base class and implement these methods for your API.">
      <h2 style={sectionTitleStyle}>Methods</h2>
      <ul style={{
      margin: '0 0 var(--usf-space-4)',
      paddingLeft: '1.25rem'
    }}>
        <li><code>getCurrentCustomer(options?)</code> – current customer or null</li>
        <li><code>signIn(email, password, options?)</code> – returns Customer</li>
        <li><code>signUp(input, options?)</code> – CreateCustomerInput (firstName, lastName, email, password) → Customer</li>
        <li><code>signOut()</code> – sign out</li>
        <li><code>updateCustomer(input, options?)</code> – UpdateCustomerInput (firstName?, lastName?, email?) → Customer</li>
        <li><code>changePassword(input, options?)</code> – ChangePasswordInput (currentPassword, newPassword) → void</li>
        <li><code>getCustomerOrders(params?, options?)</code> – page, pageSize, filter, sort → GetCustomerOrdersResult</li>
        <li><code>getOrderByNumber(orderNumber, options?)</code> – logged-in order detail → GetOrderByNumberResult</li>
      </ul>
      <h2 style={sectionTitleStyle}>Example implementation</h2>
      <pre style={codeBlockStyle}>{CUSTOMER_SERVICE_EXAMPLE}</pre>
    </DocLayout>,
  parameters: {
    docs: {
      description: {
        story: 'CustomerService interface and a minimal custom implementation example.'
      }
    }
  }
}`,...(O=(b=n.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var w,P,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var I,A,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DocLayout title="Adobe Commerce implementation" lead="Ready-made implementation for Adobe Commerce (Magento) GraphQL. createAdobeCommerceServices returns an object that extends CommerceServices with a client. Configure endpoint, API key, and store codes; then use products, cart, and customer services.">
      <h2 style={sectionTitleStyle}>Config</h2>
      <p style={paragraphStyle}>
        <code>AdobeCommerceConfig</code> requires: endpoint, apiKey, storeCode, storeViewCode, websiteCode, environmentId.
        Optional: customerGroupId, headers, timeout, getAuthToken (for customer cart when logged in).
        <code>createAdobeCommerceServices(config, serviceOptions?)</code> accepts an optional second argument{' '}
        <code>AdobeCommerceServiceOptions</code> (products?, cart?, customer?) for per-service default options.
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
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const K=["Overview","ProductService","CartService","CustomerService","GenericCommerceServices","AdobeCommerce"];export{m as AdobeCommerce,i as CartService,n as CustomerService,d as GenericCommerceServices,s as Overview,a as ProductService,K as __namedExportsOrder,X as default};
