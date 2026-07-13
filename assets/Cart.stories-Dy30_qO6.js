import{C as D}from"./OrderDetails-DzVgJ2nM.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import{c as Q}from"./cartStore-DHelbZXQ.js";import"./jsxRuntime.module-Bz831lzD.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-CZABGTYP.js";function R(O){let t=JSON.parse(JSON.stringify(O));return Q({getCart:async()=>t,removeItem:async a=>(t={...t,items:t.items.filter(e=>e.id!==a),totals:{...t.totals,total:t.items.filter(e=>e.id!==a).reduce((e,s)=>e+s.subtotal,0)}},t),updateItem:async(a,e)=>{const s=Math.max(1,Math.min(999,e)),p=t.items.map(o=>o.id===a?{...o,quantity:s,subtotal:o.price*s}:o);return t={...t,items:p,totals:{...t.totals,total:p.reduce((o,x)=>o+x.subtotal,0)}},t}})}const U={id:"cart-1",items:[{id:"item-1",product:{id:"p1",sku:"SKU-HEADPHONES",name:"Premium Wireless Headphones",price:{regular:199.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",label:"Headphones"}],inStock:!0,url:"/products/headphones"},quantity:1,price:199.99,subtotal:199.99},{id:"item-2",product:{id:"p2",sku:"Orchard2",name:"Orchard 2",price:{regular:1399.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",label:"Phone"}],inStock:!0,url:"/products/orchard2"},quantity:2,price:1399.99,subtotal:2799.98,options:[{label:"Color",value:"Midnight"},{label:"Memory",value:"256GB"}]}],totals:{subtotal:2999.97,tax:0,shipping:0,discount:0,total:2999.97}},r=R(U);r.getState().setCart(U);const T={title:"Cart/Cart",component:D,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},showQuantity:{control:"boolean"},showRemoveItem:{control:"boolean"},showContinueShopping:{control:"boolean"},showCheckout:{control:"boolean"}}},n={args:{cartStore:r,title:"Shopping Cart",checkoutUrl:"/checkout",continueShoppingUrl:"/"}},c={args:{cartStore:r,title:"My Cart",checkoutLabel:"Checkout",continueShoppingLabel:"Keep Shopping",subtotalLabel:"Total"}},i={args:{cartStore:r,showQuantity:!1}},l={args:{cartStore:r,showRemoveItem:!1}},u={args:{cartStore:r,showContinueShopping:!1,checkoutLabel:"Checkout Now"}};var m,h,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    cartStore,
    title: 'Shopping Cart',
    checkoutUrl: '/checkout',
    continueShoppingUrl: '/'
  }
}`,...(d=(h=n.parameters)==null?void 0:h.docs)==null?void 0:d.source}}};var g,S,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cartStore,
    title: 'My Cart',
    checkoutLabel: 'Checkout',
    continueShoppingLabel: 'Keep Shopping',
    subtotalLabel: 'Total'
  }
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,f,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cartStore,
    showQuantity: false
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,w,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    cartStore,
    showRemoveItem: false
  }
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var L,M,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    cartStore,
    showContinueShopping: false,
    checkoutLabel: 'Checkout Now'
  }
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const J=["Default","CustomLabels","NoQuantityControls","NoRemoveButton","MinimalActions"];export{c as CustomLabels,n as Default,u as MinimalActions,i as NoQuantityControls,l as NoRemoveButton,J as __namedExportsOrder,T as default};
