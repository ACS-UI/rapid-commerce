import{u as n}from"./jsxRuntime.module-Bz831lzD.js";import{p as e,e as s}from"./OrderDetails-ulMS3_5W.js";import"./hooks.module-10jW_CO8.js";import"./preact.module-AKZfXHO-.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";const A={title:"Product/ProductGrid",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{columns:{control:"object"},gap:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"}}},o=Array.from({length:12},(r,t)=>({id:`product-${t}`,sku:`SKU-${t}`,name:`Product ${t+1}`,description:`Description for product ${t+1}`,price:{regular:99.99+t*10,special:t%3===0?79.99+t*10:void 0,currency:"USD"},images:[{url:`https://images.unsplash.com/photo-${1505740420928+t}?w=400&h=400&fit=crop`,label:`Product ${t}`}],url:`/products/product-${t}`,inStock:t%5!==4,categories:["electronics"]})),a={args:{store:e,columns:{mobile:2,tablet:3,desktop:4}},render:r=>(e.getState().setProducts(o,o.length),n(s,{...r}))},c={args:{store:e,columns:{mobile:1,tablet:2,desktop:2}},render:r=>(e.getState().setProducts(o.slice(0,6),6),n(s,{...r}))},d={args:{store:e,columns:{mobile:2,tablet:3,desktop:5}},render:r=>(e.getState().setProducts(o,o.length),n(s,{...r}))},u={args:{store:e,columns:{mobile:2,tablet:3,desktop:4},loading:!0,skeletonCount:8}},m={args:{store:e,columns:{mobile:2,tablet:3,desktop:4},emptyMessage:"No products found"},render:r=>(e.getState().setProducts([],0),n(s,{...r}))},p={args:{store:e},render:r=>{const t=e;return t.getState().setProducts(o,o.length),t.getState().setViewMode("list"),n(s,{...r,store:t})}},l={args:{store:e,gap:"lg",columns:{mobile:2,tablet:3,desktop:4}},render:r=>(e.getState().setProducts(o,o.length),n(s,{...r}))};var i,g,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 4
    }
  },
  render: args => {
    // Set mock data
    productListStore.getState().setProducts(mockProducts, mockProducts.length);
    return <ProductGrid {...args} />;
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var P,b,k;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 2
    }
  },
  render: args => {
    productListStore.getState().setProducts(mockProducts.slice(0, 6), 6);
    return <ProductGrid {...args} />;
  }
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var L,h,f;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 5
    }
  },
  render: args => {
    productListStore.getState().setProducts(mockProducts, mockProducts.length);
    return <ProductGrid {...args} />;
  }
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var G,y,w;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 4
    },
    loading: true,
    skeletonCount: 8
  }
}`,...(w=(y=u.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var $,C,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 4
    },
    emptyMessage: 'No products found'
  },
  render: args => {
    productListStore.getState().setProducts([], 0);
    return <ProductGrid {...args} />;
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var M,V,v;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    store: productListStore
  },
  render: args => {
    const store = productListStore;
    store.getState().setProducts(mockProducts, mockProducts.length);
    store.getState().setViewMode('list');
    return <ProductGrid {...args} store={store} />;
  }
}`,...(v=(V=p.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var E,T,_;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    gap: 'lg',
    columns: {
      mobile: 2,
      tablet: 3,
      desktop: 4
    }
  },
  render: args => {
    productListStore.getState().setProducts(mockProducts, mockProducts.length);
    return <ProductGrid {...args} />;
  }
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const K=["Default","TwoColumns","FiveColumns","Loading","Empty","ListView","WithGaps"];export{a as Default,m as Empty,d as FiveColumns,p as ListView,u as Loading,c as TwoColumns,l as WithGaps,K as __namedExportsOrder,A as default};
