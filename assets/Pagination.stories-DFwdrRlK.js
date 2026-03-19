import{u as t}from"./jsxRuntime.module-Bz831lzD.js";import{P as r,p as e}from"./OrderDetails-BdeG987M.js";import"./hooks.module-10jW_CO8.js";import"./preact.module-AKZfXHO-.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";const F={title:"Product/Pagination",component:r,parameters:{layout:"padded"},tags:["autodocs"]},o=(a=120,I=20,N=1)=>{e.getState().setProducts([],a),e.getState().setPageSize(I),e.getState().setPage(N)},s={render:()=>(o(120,20,1),t(r,{store:e}))},n={render:()=>(o(200,20,5),t(r,{store:e}))},c={render:()=>(o(100,20,5),t(r,{store:e}))},p={render:()=>(o(500,20,15),t(r,{store:e}))},i={render:()=>(o(120,20,1),t(r,{store:e,showPageSize:!0,pageSizeOptions:[10,20,50,100]}))},u={render:()=>(o(80,20,2),t(r,{store:e,showInfo:!1,maxButtons:5}))},d={render:()=>(o(120,20,1),t(r,{store:e,onPageChange:a=>{console.log("Page changed:",a),alert(`Navigated to page ${a}`)}}))};var g,m,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    setupStore(120, 20, 1);
    return <Pagination store={productListStore} />;
  }
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var l,P,h;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    setupStore(200, 20, 5);
    return <Pagination store={productListStore} />;
  }
}`,...(h=(P=n.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var L,f,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    setupStore(100, 20, 5);
    return <Pagination store={productListStore} />;
  }
}`,...(z=(f=c.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var C,w,x;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    setupStore(500, 20, 15);
    return <Pagination store={productListStore} />;
  }
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,W,y;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    setupStore(120, 20, 1);
    return <Pagination store={productListStore} showPageSize={true} pageSizeOptions={[10, 20, 50, 100]} />;
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var O,b,k;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    setupStore(80, 20, 2);
    return <Pagination store={productListStore} showInfo={false} maxButtons={5} />;
  }
}`,...(k=(b=u.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var v,B,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    setupStore(120, 20, 1);
    return <Pagination store={productListStore} onPageChange={page => {
      console.log('Page changed:', page);
      alert(\`Navigated to page \${page}\`);
    }} />;
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const G=["Default","MiddlePage","LastPage","ManyPages","WithPageSizeSelector","Compact","WithCallback"];export{u as Compact,s as Default,c as LastPage,p as ManyPages,n as MiddlePage,d as WithCallback,i as WithPageSizeSelector,G as __namedExportsOrder,F as default};
