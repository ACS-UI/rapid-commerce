import{f as C}from"./OrderDetails-ulMS3_5W.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./jsxRuntime.module-Bz831lzD.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";const D={title:"Product/ProductRecommendations",component:C,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},columns:{control:"object"}}},c=[{id:"rec-1",sku:"SKU-REC-1",name:"Wireless Earbuds",shortDescription:"Compact wireless earbuds",price:{regular:79.99,special:59.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=400&h=400&fit=crop",label:"Earbuds"}],url:"/products/earbuds",inStock:!0,categories:["electronics"]},{id:"rec-2",sku:"SKU-REC-2",name:"Phone Case",shortDescription:"Protective case",price:{regular:29.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1601593346742-a34b1b2d2c72?w=400&h=400&fit=crop",label:"Case"}],url:"/products/case",inStock:!0,categories:["accessories"]},{id:"rec-3",sku:"SKU-REC-3",name:"USB-C Cable",shortDescription:"Fast charging cable",price:{regular:19.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",label:"Cable"}],url:"/products/cable",inStock:!0,categories:["accessories"]},{id:"rec-4",sku:"SKU-REC-4",name:"Portable Charger",shortDescription:"10,000 mAh power bank",price:{regular:49.99,currency:"USD"},images:[{url:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",label:"Charger"}],url:"/products/charger",inStock:!0,categories:["electronics"]}],e={args:{title:"You may also like",products:c,columns:{mobile:2,tablet:3,desktop:4},onAddToCart:o=>console.log("Add to cart:",o.sku),onProductClick:o=>console.log("Product click:",o.url)}},r={args:{title:"Related products",products:c,onAddToCart:o=>console.log("Add to cart:",o.sku)}},t={args:{title:"Complete your purchase",products:c.slice(0,2),columns:{mobile:1,tablet:2,desktop:2},onAddToCart:o=>console.log("Add to cart:",o.sku)}},s={args:{title:"Frequently bought together",products:c.slice(0,1),columns:{mobile:1,tablet:1,desktop:1}}};var a,l,u;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'You may also like',
    products: mockProducts,
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 4
    },
    onAddToCart: product => console.log('Add to cart:', product.sku),
    onProductClick: product => console.log('Product click:', product.url)
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var n,d,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Related products',
    products: mockProducts,
    onAddToCart: product => console.log('Add to cart:', product.sku)
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Complete your purchase',
    products: mockProducts.slice(0, 2),
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 2
    },
    onAddToCart: product => console.log('Add to cart:', product.sku)
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Frequently bought together',
    products: mockProducts.slice(0, 1),
    columns: {
      mobile: 1,
      tablet: 1,
      desktop: 1
    }
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const U=["Default","CustomTitle","TwoColumns","SingleProduct"];export{r as CustomTitle,e as Default,s as SingleProduct,t as TwoColumns,U as __namedExportsOrder,D as default};
