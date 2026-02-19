import{O as C}from"./OrderDetails-BRylLqj3.js";import"./preact.module-AKZfXHO-.js";import"./_commonjsHelpers-Dk-ogFCM.js";import"./jsxRuntime.module-Bz831lzD.js";const e={id:"2000000028",number:"2000000028",status:"Pending",order_date:"2026-02-10T12:00:00Z",email:"customer@example.com",carrier:"Flat Rate",shipping_method:"Flat Rate - Fixed",payment_methods:[{name:"Check / Money order",type:"checkmo"}],items:[{id:"item-1",product_sku:"Orchard1-1-Blue-64GB",product_name:"Orchard 1",quantity_ordered:1,product_sale_price:{value:449.99,currency:"USD"},prices:{price:{value:449.99,currency:"USD"},row_total:{value:449.99,currency:"USD"}},product:{thumbnail:{url:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",label:"Orchard 1"}}},{id:"item-2",product_sku:"SKU-HEADPHONES",product_name:"Premium Wireless Headphones",quantity_ordered:2,product_sale_price:{value:199.99,currency:"USD"},prices:{price:{value:199.99,currency:"USD"},row_total:{value:399.98,currency:"USD"}},product:{thumbnail:{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",label:"Headphones"}}}],total:{grand_total:{value:454.99,currency:"USD"},subtotal_excl_tax:{value:449.99,currency:"USD"},subtotal_incl_tax:{value:449.99,currency:"USD"},total_shipping:{value:5,currency:"USD"},total_tax:{value:0,currency:"USD"},discounts:[]},shipping_address:{firstname:"Narayanan",lastname:"R",street:["123 Main St","Apt 4"],city:"San Jose",region:"CA",postcode:"95101",country_code:"US",telephone:"+1 555-123-4567"},billing_address:{firstname:"Narayanan",lastname:"R",street:["123 Main St","Apt 4"],city:"San Jose",region:"CA",postcode:"95101",country_code:"US",telephone:"+1 555-123-4567"}};var i;const c={...e,items:(i=e.items)==null?void 0:i.slice(0,1),total:{grand_total:{value:454.99,currency:"USD"},subtotal_excl_tax:{value:449.99,currency:"USD"},total_shipping:{value:5,currency:"USD"},total_tax:{value:0,currency:"USD"}}};var l;const M={...c,items:(l=c.items)==null?void 0:l.map(I=>({...I,product:void 0}))},T={title:"Pages/OrderDetails",component:C,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{order:{control:!1},title:{control:"text"},emptyMessage:{control:"text"},continueShoppingUrl:{control:"text"},continueShoppingLabel:{control:"text"}}},r={args:{order:e,title:"Order confirmation",continueShoppingUrl:"/",continueShoppingLabel:"Continue shopping"}},t={args:{order:c,title:"Order confirmation",continueShoppingUrl:"/"}},o={args:{order:{...e,total:{...e.total,total_tax:{value:36.5,currency:"USD"},discounts:[{amount:{value:10},label:"Promo"}],grand_total:{value:481.49,currency:"USD"}}},title:"Order confirmation"}},a={args:{order:M,title:"Order confirmation",itemsLabel:"Order items"}},n={args:{order:null,title:"Order confirmation",emptyMessage:"No order to display.",continueShoppingUrl:"/",continueShoppingLabel:"Continue shopping"}},s={args:{order:c,title:"Thank you for your order",orderNumberLabel:"Order #",statusLabel:"State",orderDateLabel:"Date",itemsLabel:"Products",shippingMethodLabel:"Delivery",paymentMethodLabel:"Payment",totalsSectionLabel:"Charges",continueShoppingLabel:"Back to store"}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    order: mockOrderWithItems,
    title: 'Order confirmation',
    continueShoppingUrl: '/',
    continueShoppingLabel: 'Continue shopping'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    order: mockOrderSingleItem,
    title: 'Order confirmation',
    continueShoppingUrl: '/'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    order: {
      ...mockOrderWithItems,
      total: {
        ...mockOrderWithItems.total!,
        total_tax: {
          value: 36.5,
          currency: 'USD'
        },
        discounts: [{
          amount: {
            value: 10
          },
          label: 'Promo'
        }],
        grand_total: {
          value: 481.49,
          currency: 'USD'
        }
      }
    },
    title: 'Order confirmation'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var _,O,D;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    order: mockOrderNoImages,
    title: 'Order confirmation',
    itemsLabel: 'Order items'
  }
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var U,L,f;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    order: null,
    title: 'Order confirmation',
    emptyMessage: 'No order to display.',
    continueShoppingUrl: '/',
    continueShoppingLabel: 'Continue shopping'
  }
}`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var v,x,k;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    order: mockOrderSingleItem,
    title: 'Thank you for your order',
    orderNumberLabel: 'Order #',
    statusLabel: 'State',
    orderDateLabel: 'Date',
    itemsLabel: 'Products',
    shippingMethodLabel: 'Delivery',
    paymentMethodLabel: 'Payment',
    totalsSectionLabel: 'Charges',
    continueShoppingLabel: 'Back to store'
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const E=["Default","SingleItem","WithTaxAndDiscount","ItemsWithoutImages","EmptyOrder","CustomLabels"];export{s as CustomLabels,r as Default,n as EmptyOrder,a as ItemsWithoutImages,t as SingleItem,o as WithTaxAndDiscount,E as __namedExportsOrder,T as default};
