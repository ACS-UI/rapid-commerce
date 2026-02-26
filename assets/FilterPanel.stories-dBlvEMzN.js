import{u as D}from"./jsxRuntime.module-Bz831lzD.js";import{p as e,F as B}from"./OrderDetails-ulMS3_5W.js";import"./hooks.module-10jW_CO8.js";import"./preact.module-AKZfXHO-.js";import"./render-1vsVZvwc.js";import"./_commonjsHelpers-DIdUZoHT.js";const _={title:"Product/FilterPanel",component:B,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{title:{control:"text"},showClearAll:{control:"boolean"},defaultExpanded:{control:"boolean"}}},a=[{field:"category",label:"Category",options:[{value:"electronics",label:"Electronics",count:45},{value:"audio",label:"Audio",count:23},{value:"computers",label:"Computers",count:18},{value:"phones",label:"Phones",count:34}]},{field:"color",label:"Color",options:[{value:"black",label:"Black",count:28},{value:"white",label:"White",count:22},{value:"blue",label:"Blue",count:15},{value:"red",label:"Red",count:12},{value:"silver",label:"Silver",count:19}]},{field:"brand",label:"Brand",options:[{value:"apple",label:"Apple",count:24},{value:"samsung",label:"Samsung",count:31},{value:"sony",label:"Sony",count:18},{value:"lg",label:"LG",count:14}]},{field:"size",label:"Size",options:[{value:"xs",label:"XS",count:8},{value:"s",label:"S",count:15},{value:"m",label:"M",count:22},{value:"l",label:"L",count:18},{value:"xl",label:"XL",count:12}]}],t={args:{aggregations:a,store:e}},o={args:{aggregations:a,store:e,title:"Refine Your Search"}},r={args:{aggregations:a,store:e,defaultExpanded:!1}},s={args:{aggregations:a,store:e,showClearAll:!1}},l={args:{aggregations:a,store:e},render:P=>(e.getState().updateFilters({categories:["electronics"],attributes:{color:["black","white"],brand:["apple"]}}),D(B,{...P}))},n={args:{aggregations:[],store:e}},c={args:{aggregations:[{field:"category",label:"Category",options:[{value:"electronics",label:"Electronics",count:45},{value:"audio",label:"Audio",count:23}]}],store:e}};var i,u,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    aggregations: mockAggregations,
    store: productListStore
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    aggregations: mockAggregations,
    store: productListStore,
    title: 'Refine Your Search'
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    aggregations: mockAggregations,
    store: productListStore,
    defaultExpanded: false
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,h,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    aggregations: mockAggregations,
    store: productListStore,
    showClearAll: false
  }
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var y,C,L;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    aggregations: mockAggregations,
    store: productListStore
  },
  render: args => {
    // Set some active filters
    productListStore.getState().updateFilters({
      categories: ['electronics'],
      attributes: {
        color: ['black', 'white'],
        brand: ['apple']
      }
    });
    return <FilterPanel {...args} />;
  }
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,F,E;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    aggregations: [],
    store: productListStore
  }
}`,...(E=(F=n.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var w,x,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    aggregations: [{
      field: 'category',
      label: 'Category',
      options: [{
        value: 'electronics',
        label: 'Electronics',
        count: 45
      }, {
        value: 'audio',
        label: 'Audio',
        count: 23
      }]
    }],
    store: productListStore
  }
}`,...(W=(x=c.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};const G=["Default","WithCustomTitle","CollapsedByDefault","WithoutClearAll","WithActiveFilters","Empty","FewOptions"];export{r as CollapsedByDefault,t as Default,n as Empty,c as FewOptions,l as WithActiveFilters,o as WithCustomTitle,s as WithoutClearAll,G as __namedExportsOrder,_ as default};
