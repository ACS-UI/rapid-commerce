import{d as W}from"./OrderDetails-BWQ5Krzi.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./jsxRuntime.module-Bz831lzD.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";const L={title:"Product/ProductDetails",component:W,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{showQuantity:{control:"boolean"},showWishlist:{control:"boolean"},loading:{control:"boolean"}}},o={id:"1",sku:"SIMPLE-001",name:"Premium Wireless Headphones",shortDescription:"High-quality wireless headphones with active noise cancellation.",description:"<p>Full description with <strong>rich text</strong> and 30-hour battery life.</p>",price:{regular:199.99,special:149.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",label:"Front"},{url:"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",label:"Side"}],url:"/products/headphones",inStock:!0,categories:["electronics","audio"]},v={...o,id:"2",sku:"Orchard2",name:"Orchard 2",shortDescription:"Latest smartphone with multiple color and storage options.",price:{regular:1199.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",label:"Phone"},{url:"https://images.unsplash.com/photo-1592286927505-d7cb0b586f8e?w=600&h=600&fit=crop",label:"Phone back"}],url:"/products/orchard2",attributes:{options:[{id:"176",title:"Color",required:!0,multi:!1,values:[{id:"29",title:"Midnight",inStock:!0,type:"COLOR_HEX",value:"#1a1a1a"},{id:"30",title:"Starlight",inStock:!0,type:"COLOR_HEX",value:"#f5f5dc"},{id:"31",title:"Blue",inStock:!0,type:"COLOR_HEX",value:"#2563eb"}]},{id:"180",title:"Memory",required:!0,multi:!1,values:[{id:"43",title:"128GB",inStock:!0,type:"text"},{id:"44",title:"256GB",inStock:!0,type:"text"},{id:"45",title:"512GB",inStock:!0,type:"text"},{id:"46",title:"1TB",inStock:!0,type:"text"}]}],priceRange:{minimum:799.99,maximum:1399.99,currency:"USD"},attributes:[{name:"Screen",label:"Display",value:'6.1" Super Retina XDR'},{name:"Battery",label:"Battery",value:"Up to 20 hours video playback"}]}},C={...o,id:"3",name:"Out of Stock Item",inStock:!1},r={args:{product:o,showQuantity:!0,showWishlist:!0,shippingMessage:"Ships within 24 hours",onAddToCart:(t,e)=>console.log("Add to cart:",t.sku,e),onWishlist:t=>console.log("Wishlist:",t.sku)}},s={args:{product:v,showQuantity:!0,showWishlist:!0,shippingMessage:"Free delivery on orders over $50",onAddToCart:(t,e,c)=>console.log("Add to cart:",t.sku,e,c),onOptionChange:(t,e,c)=>console.log("Option changed:",t,e,c)}},i={args:{product:C,showQuantity:!0,showWishlist:!0}},a={args:{product:o,loading:!0}},n={args:{product:o,showQuantity:!1,showWishlist:!1}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    product: simpleProduct,
    showQuantity: true,
    showWishlist: true,
    shippingMessage: 'Ships within 24 hours',
    onAddToCart: (product, quantity) => console.log('Add to cart:', product.sku, quantity),
    onWishlist: product => console.log('Wishlist:', product.sku)
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,h,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    product: configurableProduct,
    showQuantity: true,
    showWishlist: true,
    shippingMessage: 'Free delivery on orders over $50',
    onAddToCart: (product, quantity, selectedOptions) => console.log('Add to cart:', product.sku, quantity, selectedOptions),
    onOptionChange: (optionId, valueId, selected) => console.log('Option changed:', optionId, valueId, selected)
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,y,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    product: outOfStockProduct,
    showQuantity: true,
    showWishlist: true
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,w,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    product: simpleProduct,
    loading: true
  }
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,b,P;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    product: simpleProduct,
    showQuantity: false,
    showWishlist: false
  }
}`,...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const M=["SimpleProduct","ConfigurableProduct","OutOfStock","Loading","NoWishlistNoQuantity"];export{s as ConfigurableProduct,a as Loading,n as NoWishlistNoQuantity,i as OutOfStock,r as SimpleProduct,M as __namedExportsOrder,L as default};
