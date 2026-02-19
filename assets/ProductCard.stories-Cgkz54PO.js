import{b as E}from"./OrderDetails-BRylLqj3.js";import"./preact.module-AKZfXHO-.js";import"./_commonjsHelpers-Dk-ogFCM.js";import"./jsxRuntime.module-Bz831lzD.js";const K={title:"Components/ProductCard",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","compact"]},showBadges:{control:"boolean"},showWishlist:{control:"boolean"},showQuickView:{control:"boolean"}}},o={id:"1",sku:"TEST-SKU-001",name:"Premium Wireless Headphones",description:"High-quality wireless headphones with active noise cancellation and 30-hour battery life.",shortDescription:"Premium wireless headphones",price:{regular:199.99,special:149.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",label:"Wireless Headphones"},{url:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",label:"Headphones side view"}],url:"/products/wireless-headphones",inStock:!0,categories:["electronics","audio"]},L={...o,id:"2",name:"Out of Stock Product",inStock:!1},r={args:{product:o}},t={args:{product:o,showBadges:!0}},s={args:{product:L,showBadges:!0}},c={args:{product:o,showWishlist:!0,onWishlistClick:()=>alert("Added to wishlist!")}},a={args:{product:o,showQuickView:!0,onQuickView:()=>alert("Quick view opened!")}},i={args:{product:o,layout:"horizontal"},parameters:{layout:"padded"}},n={args:{product:o,layout:"compact"}},u={args:{product:o,showWishlist:!0,showQuickView:!0,onClick:e=>console.log("Product clicked:",e),onAddToCart:(e,D)=>console.log("Add to cart:",e.sku,D),onWishlistClick:e=>console.log("Wishlist clicked:",e.sku),onQuickView:e=>console.log("Quick view:",e.sku)}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    product: mockProduct
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,h,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    showBadges: true
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,w,W;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    product: outOfStockProduct,
    showBadges: true
  }
}`,...(W=(w=s.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var S,y,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    showWishlist: true,
    onWishlistClick: () => alert('Added to wishlist!')
  }
}`,...(P=(y=c.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var Q,f,C;a.parameters={...a.parameters,docs:{...(Q=a.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    showQuickView: true,
    onQuickView: () => alert('Quick view opened!')
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var V,O,v;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    layout: 'horizontal'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(v=(O=i.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var b,A,H;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    layout: 'compact'
  }
}`,...(H=(A=n.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var z,B,T;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    product: mockProduct,
    showWishlist: true,
    showQuickView: true,
    onClick: product => console.log('Product clicked:', product),
    onAddToCart: (product, quantity) => console.log('Add to cart:', product.sku, quantity),
    onWishlistClick: product => console.log('Wishlist clicked:', product.sku),
    onQuickView: product => console.log('Quick view:', product.sku)
  }
}`,...(T=(B=u.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const j=["Default","OnSale","OutOfStock","WithWishlist","WithQuickView","HorizontalLayout","CompactLayout","WithEvents"];export{n as CompactLayout,r as Default,i as HorizontalLayout,t as OnSale,s as OutOfStock,u as WithEvents,a as WithQuickView,c as WithWishlist,j as __namedExportsOrder,K as default};
