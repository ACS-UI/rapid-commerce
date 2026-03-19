import{a as o}from"./index-B-lxVbXh.js";import{C as S,c as l}from"./mockCustomerService-5YSjmHqd.js";import"./v4-CtRu48qb.js";import"./jsxRuntime.module-Bz831lzD.js";import"./preact.module-AKZfXHO-.js";import"./hooks.module-10jW_CO8.js";import"./render-1vsVZvwc.js";const w=l(),f={title:"Auth/ChangePasswordForm",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},submitLabel:{control:"text"}}},r={args:{customerService:w,title:"Change password",onSuccess:o("onSuccess"),onError:o("onError")}},e={args:{customerService:w,title:"Update password",currentPasswordLabel:"Current password",newPasswordLabel:"New password",confirmPasswordLabel:"Confirm new password",submitLabel:"Update password",onSuccess:o("onSuccess")}},s={args:{customerService:l({changePasswordFails:!0}),title:"Change password",onError:o("onError")}};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Change password',
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    customerService: mockService,
    title: 'Update password',
    currentPasswordLabel: 'Current password',
    newPasswordLabel: 'New password',
    confirmPasswordLabel: 'Confirm new password',
    submitLabel: 'Update password',
    onSuccess: action('onSuccess')
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,u,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    customerService: createMockCustomerService({
      changePasswordFails: true
    }),
    title: 'Change password',
    onError: action('onError')
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const E=["Default","CustomLabels","ChangePasswordFailure"];export{s as ChangePasswordFailure,e as CustomLabels,r as Default,E as __namedExportsOrder,f as default};
