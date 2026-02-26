import{M as f}from"./OrderDetails-ulMS3_5W.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import{c as w}from"./cartStore-CkFZHipg.js";import"./jsxRuntime.module-Bz831lzD.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";function S(y){let t=JSON.parse(JSON.stringify(y));return w({getCart:async()=>t,removeItem:async s=>(t={...t,items:t.items.filter(r=>r.id!==s),totals:{...t.totals,total:t.items.filter(r=>r.id!==s).reduce((r,v)=>r+v.subtotal,0)}},t)})}const g={id:"cart-1",items:[{id:"item-1",product:{id:"p1",sku:"SKU-001",name:"Wireless Headphones",price:{regular:199.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",label:"Headphones"}],inStock:!0,url:"/products/headphones"},quantity:2,price:199.99,subtotal:399.98,options:[{label:"Color",value:"Black"}]}],totals:{subtotal:399.98,tax:0,shipping:0,discount:0,total:399.98}},k={id:"cart-empty",items:[],totals:{subtotal:0,tax:0,shipping:0,discount:0,total:0}},c=S(g);c.getState().setCart(g);const U=S(k);U.getState().setCart(k);const H={title:"Cart/MiniCart",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checkoutUrl:{control:"text"},viewCartUrl:{control:"text"}}},e={args:{cartStore:c,checkoutUrl:"/checkout",viewCartUrl:"/cart"}},a={args:{cartStore:U,checkoutUrl:"/checkout",viewCartUrl:"/cart"}},o={args:{cartStore:c,checkoutUrl:"https://store.example.com/checkout",viewCartUrl:"/cart"}};var i,n,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cartStore: miniCartStoreWithItems,
    checkoutUrl: '/checkout',
    viewCartUrl: '/cart'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cartStore: miniCartStoreEmpty,
    checkoutUrl: '/checkout',
    viewCartUrl: '/cart'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,d,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    cartStore: miniCartStoreWithItems,
    checkoutUrl: 'https://store.example.com/checkout',
    viewCartUrl: '/cart'
  }
}`,...(C=(d=o.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};const J=["Default","Empty","CustomUrls"];export{o as CustomUrls,e as Default,a as Empty,J as __namedExportsOrder,H as default};
