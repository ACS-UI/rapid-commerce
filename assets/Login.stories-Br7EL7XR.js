import{a as s}from"./index-B-lxVbXh.js";import{L as d,c as S}from"./mockCustomerService-5YSjmHqd.js";import"./v4-CtRu48qb.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const g=S(),w={title:"Auth/Login",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},submitLabel:{control:"text"},redirectUrl:{control:"text"}}},r={args:{customerService:g,title:"Sign in",onSuccess:s("onSuccess"),onError:s("onError")}},e={args:{customerService:g,title:"Log in to your account",emailLabel:"Email address",passwordLabel:"Your password",submitLabel:"Log in",onSuccess:s("onSuccess")}},o={args:{customerService:S({signInFails:!0}),title:"Sign in",onError:s("onError")}};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Sign in',
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Log in to your account',
    emailLabel: 'Email address',
    passwordLabel: 'Your password',
    submitLabel: 'Log in',
    onSuccess: action('onSuccess')
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,l,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    customerService: createMockCustomerService({
      signInFails: true
    }),
    title: 'Sign in',
    onError: action('onError')
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const y=["Default","CustomLabels","LoginFailure"];export{e as CustomLabels,r as Default,o as LoginFailure,y as __namedExportsOrder,w as default};
