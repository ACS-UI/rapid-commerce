import{a as m}from"./index-B-lxVbXh.js";import{m as i,A as l,c as p}from"./mockCustomerService-B7ChX4Io.js";import"./v4-CtRu48qb.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const u=p(),v={title:"Auth/AccountSettings",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},profileTitle:{control:"text"},passwordTitle:{control:"text"}}},e={args:{customerService:u,customer:i,title:"Account settings",onCustomerChange:m("onCustomerChange")}},t={args:{customerService:u,customer:i,title:"My account",profileTitle:"Profile information",passwordTitle:"Security",onCustomerChange:m("onCustomerChange")}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    customer: mockCustomer,
    title: 'Account settings',
    onCustomerChange: action('onCustomerChange')
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,n,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    customer: mockCustomer,
    title: 'My account',
    profileTitle: 'Profile information',
    passwordTitle: 'Security',
    onCustomerChange: action('onCustomerChange')
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const k=["Default","CustomTitles"];export{t as CustomTitles,e as Default,k as __namedExportsOrder,v as default};
