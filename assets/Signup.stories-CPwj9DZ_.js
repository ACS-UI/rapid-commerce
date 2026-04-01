import{a as o}from"./index-B-lxVbXh.js";import{S as d,c as S}from"./mockCustomerService-DtXHL1TL.js";import"./v4-CtRu48qb.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const g=S(),k={title:"Auth/Signup",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},submitLabel:{control:"text"}}},e={args:{customerService:g,title:"Create account",onSuccess:o("onSuccess"),onError:o("onError")}},r={args:{customerService:g,title:"Register",firstNameLabel:"Given name",lastNameLabel:"Family name",submitLabel:"Register",onSuccess:o("onSuccess")}},t={args:{customerService:S({signUpFails:!0}),title:"Create account",onError:o("onError")}};var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Create account',
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Register',
    firstNameLabel: 'Given name',
    lastNameLabel: 'Family name',
    submitLabel: 'Register',
    onSuccess: action('onSuccess')
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    customerService: createMockCustomerService({
      signUpFails: true
    }),
    title: 'Create account',
    onError: action('onError')
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Default","CustomLabels","SignupFailure"];export{r as CustomLabels,e as Default,t as SignupFailure,x as __namedExportsOrder,k as default};
