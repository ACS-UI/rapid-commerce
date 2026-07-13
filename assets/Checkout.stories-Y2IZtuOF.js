import{u as F}from"./jsxRuntime.module-Bz831lzD.js";import{d as o}from"./hooks.module-10jW_CO8.js";import{a as T}from"./OrderDetails-DzVgJ2nM.js";import{c as E}from"./cartStore-DHelbZXQ.js";import"./preact.module-AKZfXHO-.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-CZABGTYP.js";function I(e){const a=JSON.parse(JSON.stringify(e));return E({getCart:async()=>a,removeItem:async()=>a})}const q={id:"cart-1",items:[{id:"item-1",product:{id:"p1",sku:"SKU-HEADPHONES",name:"Premium Wireless Headphones",price:{regular:199.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",label:"Headphones"}],inStock:!0,url:"/products/headphones"},quantity:1,price:199.99,subtotal:199.99},{id:"item-2",product:{id:"p2",sku:"Orchard2",name:"Orchard 2",price:{regular:1399.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",label:"Phone"}],inStock:!0,url:"/products/orchard2"},quantity:1,price:1399.99,subtotal:1399.99,options:[{label:"Color",value:"Midnight"},{label:"Memory",value:"256GB"}]}],totals:{subtotal:1599.98,tax:128,shipping:9.99,discount:50,total:1687.97}},r=I(q);r.getState().setCart(q);const Y={title:"Checkout/Checkout",component:T,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},placeOrderLabel:{control:"text"}}},c={args:{cartStore:r,title:"Checkout",backToCartUrl:"/cart",placeOrderLabel:"Place Order"}},l={args:{cartStore:r,title:"Checkout",backToCartUrl:"/cart",placeOrderUrl:"https://payment.example.com/checkout",placeOrderLabel:"Pay now"}},s={args:{cartStore:r,title:"Review & pay",backToCartUrl:"/cart",backToCartLabel:"Edit cart",placeOrderLabel:"Confirm order",totalLabel:"Order total"}},d={args:{cartStore:r,backToCartUrl:"/cart",placeOrderLabel:"Place Order",onPlaceOrder:e=>{console.log("Place order:",e.id,e.totals),alert(`Order placed! Total: $${e.totals.total.toFixed(2)}`)}}},N={email:"",firstName:"",lastName:"",phone:""},H={street:[],city:"",region:"",postcode:"",country:"",telephone:""},R=[{id:"standard",label:"Standard",description:"5–7 business days",price:5.99,currency:"USD"},{id:"express",label:"Express",description:"2–3 business days",price:12.99,currency:"USD"},{id:"free",label:"Free shipping",description:"Over $50",price:0,currency:"USD"}],G=[{id:"card",label:"Credit / Debit card",description:"Visa, Mastercard, Amex"},{id:"paypal",label:"PayPal",description:"Pay with your PayPal account"}],B=[{key:"street",type:"textarea",label:"Street address",placeholder:"123 Main St",autoComplete:"street-address",required:!0,fullWidth:!0,rows:2,validate:e=>e.trim()?void 0:"Street address is required"},{key:"city",type:"text",label:"City",autoComplete:"address-level2",required:!0,validate:e=>e.trim()?void 0:"City is required"},{key:"region",type:"text",label:"State / Region",autoComplete:"address-level1"},{key:"postcode",type:"text",label:"Postal code",autoComplete:"postal-code",required:!0,validate:e=>e.trim()?void 0:"Postal code is required"},{key:"country",type:"select",label:"Country",autoComplete:"country",required:!0,fullWidth:!0,placeholder:"Select a country",options:[{value:"US",label:"United States"},{value:"CA",label:"Canada"},{value:"GB",label:"United Kingdom"},{value:"AU",label:"Australia"},{value:"DE",label:"Germany"},{value:"FR",label:"France"}],validate:e=>e?void 0:"Country is required"},{key:"telephone",type:"tel",label:"Phone",autoComplete:"tel",fullWidth:!0}];function J(){const[e,a]=o(N),[i,A]=o(H),[f,M]=o("standard"),[w,W]=o("card");return F(T,{cartStore:r,title:"Checkout",backToCartUrl:"/cart",placeOrderLabel:"Place Order",contact:e,onContactChange:a,shippingAddress:i,onShippingAddressChange:A,shippingAddressFields:B,shippingOptions:R,selectedShippingId:f,onShippingMethodSelect:M,paymentMethods:G,selectedPaymentId:w,onPaymentMethodSelect:W,onPlaceOrder:($,t)=>{var p;console.log("Place order:",$.id,t),alert(`Order placed! Contact: ${(p=t==null?void 0:t.contact)==null?void 0:p.email}, Shipping: ${t==null?void 0:t.selectedShippingId}, Payment: ${t==null?void 0:t.selectedPaymentId}`)}})}const n={render:()=>F(J,{}),parameters:{layout:"padded"}};var u,m,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Checkout',
    backToCartUrl: '/cart',
    placeOrderLabel: 'Place Order'
  }
}`,...(h=(m=c.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,S,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Checkout',
    backToCartUrl: '/cart',
    placeOrderUrl: 'https://payment.example.com/checkout',
    placeOrderLabel: 'Pay now'
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,g,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    title: 'Review & pay',
    backToCartUrl: '/cart',
    backToCartLabel: 'Edit cart',
    placeOrderLabel: 'Confirm order',
    totalLabel: 'Order total'
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var O,P,v;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    cartStore: checkoutStore,
    backToCartUrl: '/cart',
    placeOrderLabel: 'Place Order',
    onPlaceOrder: cart => {
      console.log('Place order:', cart.id, cart.totals);
      alert(\`Order placed! Total: $\${cart.totals.total.toFixed(2)}\`);
    }
  }
}`,...(v=(P=d.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var U,L,x;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <FullCheckoutForm />,
  parameters: {
    layout: 'padded'
  }
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const Z=["Default","WithPlaceOrderUrl","CustomLabels","WithOnPlaceOrder","FullCheckoutFormStory"];export{s as CustomLabels,c as Default,n as FullCheckoutFormStory,d as WithOnPlaceOrder,l as WithPlaceOrderUrl,Z as __namedExportsOrder,Y as default};
