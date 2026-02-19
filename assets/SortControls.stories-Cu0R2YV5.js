import{p as e,S as h}from"./OrderDetails-BRylLqj3.js";import"./preact.module-AKZfXHO-.js";import"./_commonjsHelpers-Dk-ogFCM.js";import"./jsxRuntime.module-Bz831lzD.js";const F={title:"Components/SortControls",component:h,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["dropdown","buttons"]}}},n=[{value:"relevance",label:"Relevance",field:"relevance",direction:"desc"},{value:"price-asc",label:"Price: Low to High",field:"price",direction:"asc"},{value:"price-desc",label:"Price: High to Low",field:"price",direction:"desc"},{value:"name-asc",label:"Name: A to Z",field:"name",direction:"asc"},{value:"name-desc",label:"Name: Z to A",field:"name",direction:"desc"},{value:"newest",label:"Newest First",field:"created_at",direction:"desc"}],o={args:{store:e,variant:"dropdown",options:n}},r={args:{store:e,variant:"buttons",options:n}},t={args:{store:e,label:"Order by:",options:n}},s={args:{store:e,variant:"buttons",options:[{value:"price-asc",label:"Price ↑",field:"price",direction:"asc"},{value:"price-desc",label:"Price ↓",field:"price",direction:"desc"},{value:"name",label:"Name",field:"name",direction:"asc"}]}},a={args:{store:e,options:n,onSortChange:i=>{console.log("Sort changed:",i),alert(`Sorting by: ${i.field} ${i.direction}`)}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    variant: 'dropdown',
    options: sortOptions
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    variant: 'buttons',
    options: sortOptions
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,g,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    label: 'Order by:',
    options: sortOptions
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,f,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    variant: 'buttons',
    options: [{
      value: 'price-asc',
      label: 'Price ↑',
      field: 'price',
      direction: 'asc'
    }, {
      value: 'price-desc',
      label: 'Price ↓',
      field: 'price',
      direction: 'desc'
    }, {
      value: 'name',
      label: 'Name',
      field: 'name',
      direction: 'asc'
    }] as SortOption[]
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var O,L,C;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    store: productListStore,
    options: sortOptions,
    onSortChange: sort => {
      console.log('Sort changed:', sort);
      alert(\`Sorting by: \${sort.field} \${sort.direction}\`);
    }
  }
}`,...(C=(L=a.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const _=["Dropdown","Buttons","CustomLabel","FewOptions","WithCallback"];export{r as Buttons,t as CustomLabel,o as Dropdown,s as FewOptions,a as WithCallback,_ as __namedExportsOrder,F as default};
