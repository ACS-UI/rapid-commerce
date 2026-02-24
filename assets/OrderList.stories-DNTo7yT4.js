import{O as b,c as S}from"./mockCustomerService-B7ChX4Io.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const s=S(),M={title:"Auth/OrderList",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},pageSize:{control:"number"},orderViewUrl:{control:"text"},emptyMessage:{control:"text"}}},e={args:{customerService:s,title:"Order history",pageSize:10,orderViewUrl:"/customer/orders/view?order_id={id}",viewOrderLabel:"View"}},r={args:{customerService:s,title:"My orders",orderNumberLabel:"Order #",dateLabel:"Date",statusLabel:"Status",totalLabel:"Total",actionsLabel:"Actions",viewOrderLabel:"View order",emptyMessage:"You have no orders yet.",loadingMessage:"Loading orders…"}},o={args:{customerService:s,title:"Order history",orderViewUrl:void 0}},t={args:{customerService:S({ordersFails:!0}),title:"Order history"}};var a,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Order history',
    pageSize: 10,
    orderViewUrl: '/customer/orders/view?order_id={id}',
    viewOrderLabel: 'View'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,n,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'My orders',
    orderNumberLabel: 'Order #',
    dateLabel: 'Date',
    statusLabel: 'Status',
    totalLabel: 'Total',
    actionsLabel: 'Actions',
    viewOrderLabel: 'View order',
    emptyMessage: 'You have no orders yet.',
    loadingMessage: 'Loading orders…'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Order history',
    orderViewUrl: undefined
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,L,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    customerService: createMockCustomerService({
      ordersFails: true
    }),
    title: 'Order history'
  }
}`,...(v=(L=t.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const k=["Default","CustomLabels","NoViewLink","OrdersLoadFailure"];export{r as CustomLabels,e as Default,o as NoViewLink,t as OrdersLoadFailure,k as __namedExportsOrder,M as default};
