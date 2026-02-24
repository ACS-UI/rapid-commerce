import{u as F}from"./jsxRuntime.module-Bz831lzD.js";import{d as c}from"./hooks.module-10jW_CO8.js";import{a as v}from"./OrderDetails-BWQ5Krzi.js";import{c as N}from"./cartStore-CkMzKp-J.js";import"./preact.module-AKZfXHO-.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";function W(r){const a=JSON.parse(JSON.stringify(r));return N({getCart:async()=>a,removeItem:async()=>a})}const M={id:"cart-1",items:[{id:"item-1",product:{id:"p1",sku:"SKU-HEADPHONES",name:"Premium Wireless Headphones",price:{regular:199.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",label:"Headphones"}],inStock:!0,url:"/products/headphones"},quantity:1,price:199.99,subtotal:199.99},{id:"item-2",product:{id:"p2",sku:"Orchard2",name:"Orchard 2",price:{regular:1399.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",label:"Phone"}],inStock:!0,url:"/products/orchard2"},quantity:1,price:1399.99,subtotal:1399.99,options:[{label:"Color",value:"Midnight"},{label:"Memory",value:"256GB"}]}],totals:{subtotal:1599.98,tax:128,shipping:9.99,discount:50,total:1687.97}},t=W(M);t.getState().setCart(M);const X={title:"Checkout/Checkout",component:v,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},placeOrderLabel:{control:"text"}}},o={args:{cartStore:t,title:"Checkout",backToCartUrl:"/cart",placeOrderLabel:"Place Order"}},s={args:{cartStore:t,title:"Checkout",backToCartUrl:"/cart",placeOrderUrl:"https://payment.example.com/checkout",placeOrderLabel:"Pay now"}},l={args:{cartStore:t,title:"Review & pay",backToCartUrl:"/cart",backToCartLabel:"Edit cart",placeOrderLabel:"Confirm order",totalLabel:"Order total"}},n={args:{cartStore:t,backToCartUrl:"/cart",placeOrderLabel:"Place Order",onPlaceOrder:r=>{console.log("Place order:",r.id,r.totals),alert(`Order placed! Total: $${r.totals.total.toFixed(2)}`)}}},H={email:"",firstName:"",lastName:"",phone:""},q={street:[],city:"",region:"",postcode:"",country:"",telephone:""},J=[{id:"standard",label:"Standard",description:"5–7 business days",price:5.99,currency:"USD"},{id:"express",label:"Express",description:"2–3 business days",price:12.99,currency:"USD"},{id:"free",label:"Free shipping",description:"Over $50",price:0,currency:"USD"}],R=[{id:"card",label:"Credit / Debit card",description:"Visa, Mastercard, Amex"},{id:"paypal",label:"PayPal",description:"Pay with your PayPal account"}];function _(){const[r,a]=c(H),[i,$]=c(q),[w,I]=c("standard"),[f,A]=c("card");return F(v,{cartStore:t,title:"Checkout",backToCartUrl:"/cart",placeOrderLabel:"Place Order",contact:r,onContactChange:a,shippingAddress:i,onShippingAddressChange:$,shippingOptions:J,selectedShippingId:w,onShippingMethodSelect:I,paymentMethods:R,selectedPaymentId:f,onPaymentMethodSelect:A,onPlaceOrder:(E,e)=>{var p;console.log("Place order:",E.id,e),alert(`Order placed! Contact: ${(p=e==null?void 0:e.contact)==null?void 0:p.email}, Shipping: ${e==null?void 0:e.selectedShippingId}, Payment: ${e==null?void 0:e.selectedPaymentId}`)}})}const d={render:()=>F(_,{}),parameters:{layout:"padded"}};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Checkout',
    backToCartUrl: '/cart',
    placeOrderLabel: 'Place Order'
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var S,g,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Checkout',
    backToCartUrl: '/cart',
    placeOrderUrl: 'https://payment.example.com/checkout',
    placeOrderLabel: 'Pay now'
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var C,O,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Review & pay',
    backToCartUrl: '/cart',
    backToCartLabel: 'Edit cart',
    placeOrderLabel: 'Confirm order',
    totalLabel: 'Order total'
  }
}`,...(y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var k,P,U;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    backToCartUrl: '/cart',
    placeOrderLabel: 'Place Order',
    onPlaceOrder: cart => {
      console.log('Place order:', cart.id, cart.totals);
      alert(\`Order placed! Total: $\${cart.totals.total.toFixed(2)}\`);
    }
  }
}`,...(U=(P=n.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var L,T,x;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <FullCheckoutForm />,
  parameters: {
    layout: 'padded'
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const Y=["Default","WithPlaceOrderUrl","CustomLabels","WithOnPlaceOrder","FullCheckoutFormStory"];export{l as CustomLabels,o as Default,d as FullCheckoutFormStory,n as WithOnPlaceOrder,s as WithPlaceOrderUrl,Y as __namedExportsOrder,X as default};
