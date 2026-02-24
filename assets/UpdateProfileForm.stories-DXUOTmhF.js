import{a as t}from"./index-B-lxVbXh.js";import{m as d,U as C,c as S}from"./mockCustomerService-B7ChX4Io.js";import"./v4-CtRu48qb.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const g=S(),U={title:"Auth/UpdateProfileForm",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},submitLabel:{control:"text"}}},r={args:{customerService:g,customer:d,title:"Profile",onCustomerChange:t("onCustomerChange"),onSuccess:t("onSuccess"),onError:t("onError")}},e={args:{customerService:g,customer:null,title:"Profile"}},o={args:{customerService:S({updateFails:!0}),customer:d,title:"Profile",onError:t("onError")}};var s,c,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    customer: mockCustomer,
    title: 'Profile',
    onCustomerChange: action('onCustomerChange'),
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }
}`,...(a=(c=r.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var n,m,u;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    customer: null,
    title: 'Profile'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,l,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    customerService: createMockCustomerService({
      updateFails: true
    }),
    customer: mockCustomer,
    title: 'Profile',
    onError: action('onError')
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Default","NoCustomer","UpdateFailure"];export{r as Default,e as NoCustomer,o as UpdateFailure,x as __namedExportsOrder,U as default};
