import{i as e,n as t,t as n}from"./jsx-runtime-BKllkxft.js";import{t as r}from"./link-BY6b89qW.js";import{a as i,c as a,i as o,l as s,n as c,p as l,v as u}from"./index-BmJjWkpy.js";import{t as d}from"./createLucideIcon-BXvMJD5C.js";import{_ as f,a as p,c as m,g as h,h as g,i as _,m as v,n as y,o as b,p as x,s as S,u as C}from"./LeadForm-DTVqFdvB.js";var w=d(`badge-check`,[[`path`,{d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,key:`3c2336`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),T=d(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),E=d(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),D=e(t()),O=n();function k(){let{id:e}=c.useLoaderData(),{t,lang:n,price:d,mileage:k}=a(),A=n,j=o(e),[M,N]=(0,D.useState)(0),P=`${j.brand[A]} ${j.model[A]} ${j.year}`,F=n===`ar`?h:f,I=n===`ar`?E:T,L=n===`ar`?T:E,R=[{icon:g,label:t.cars.specs.year,value:String(j.year)},{icon:x,label:t.cars.specs.mileage,value:k(j.mileage)},{icon:m,label:t.cars.specs.transmission,value:t.cars.transmission[j.transmission]},{icon:v,label:t.cars.specs.fuel,value:t.cars.fuel[j.fuel]},{icon:w,label:t.cars.specs.condition,value:t.cars.condition[j.condition]}];return(0,O.jsxs)(`div`,{className:`min-h-screen bg-background text-foreground`,children:[(0,O.jsx)(_,{}),(0,O.jsx)(`main`,{className:`pb-20 pt-24 sm:pt-28`,children:(0,O.jsxs)(`div`,{className:`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,children:[(0,O.jsxs)(r,{to:`/`,hash:`cars`,className:`\r
              inline-flex items-center gap-2\r
              text-sm font-medium\r
              text-muted-foreground\r
              transition-colors\r
              hover:text-gold\r
            `,children:[(0,O.jsx)(F,{className:`h-4 w-4`}),t.common.backToCars]}),(0,O.jsxs)(`div`,{className:`mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12`,children:[(0,O.jsxs)(`div`,{className:`lg:col-span-3`,children:[(0,O.jsxs)(`div`,{className:`\r
                  group\r
                  relative\r
                  overflow-hidden\r
                  rounded-2xl\r
                  border border-white/10\r
                  bg-surface\r
                  shadow-[0_24px_80px_rgba(0,0,0,0.28)]\r
                `,children:[(0,O.jsx)(`img`,{src:j.images[M],alt:P,width:1200,height:750,className:`\r
                    aspect-[16/10] w-full\r
                    object-cover\r
                    transition-transform duration-700\r
                    group-hover:scale-[1.015]\r
                  `}),(0,O.jsx)(`div`,{"aria-hidden":`true`,className:`\r
                    absolute inset-0\r
                    bg-gradient-to-t\r
                    from-background/45\r
                    via-transparent\r
                    to-transparent\r
                  `}),j.images.length>1&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{type:`button`,onClick:()=>{N(e=>e===0?j.images.length-1:e-1)},"aria-label":`Previous image`,className:`\r
                        absolute start-4 top-1/2\r
                        grid h-11 w-11 -translate-y-1/2 place-items-center\r
                        rounded-full\r
                        border border-white/15\r
                        bg-background/55\r
                        text-foreground\r
                        opacity-0\r
                        backdrop-blur-md\r
                        transition-all\r
                        hover:border-gold/60\r
                        hover:text-gold\r
                        group-hover:opacity-100\r
                      `,children:(0,O.jsx)(I,{className:`h-5 w-5`})}),(0,O.jsx)(`button`,{type:`button`,onClick:()=>{N(e=>e===j.images.length-1?0:e+1)},"aria-label":`Next image`,className:`\r
                        absolute end-4 top-1/2\r
                        grid h-11 w-11 -translate-y-1/2 place-items-center\r
                        rounded-full\r
                        border border-white/15\r
                        bg-background/55\r
                        text-foreground\r
                        opacity-0\r
                        backdrop-blur-md\r
                        transition-all\r
                        hover:border-gold/60\r
                        hover:text-gold\r
                        group-hover:opacity-100\r
                      `,children:(0,O.jsx)(L,{className:`h-5 w-5`})})]}),(0,O.jsxs)(`div`,{className:`\r
                    absolute bottom-4 end-4\r
                    rounded-full\r
                    border border-white/10\r
                    bg-background/60\r
                    px-3 py-1.5\r
                    text-xs text-foreground/75\r
                    backdrop-blur-md\r
                  `,children:[M+1,` / `,j.images.length]})]}),j.images.length>1&&(0,O.jsx)(`div`,{className:`mt-4 flex gap-3 overflow-x-auto pb-2`,"aria-label":t.vehicle.gallery,children:j.images.map((e,n)=>(0,O.jsx)(`button`,{type:`button`,onClick:()=>N(n),"aria-label":`${t.vehicle.gallery} ${n+1}`,className:`
                        relative
                        h-20 w-28 shrink-0
                        overflow-hidden
                        rounded-lg
                        border
                        transition-all duration-200
                        ${n===M?`border-gold shadow-[0_0_0_1px_rgba(198,161,91,0.35)]`:`border-white/10 opacity-65 hover:border-gold/50 hover:opacity-100`}
                      `,children:(0,O.jsx)(`img`,{src:e,alt:``,loading:`lazy`,className:`h-full w-full object-cover`})},e))}),(0,O.jsxs)(`div`,{className:`mt-10`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-sm font-medium text-gold`,children:j.model[A]}),(0,O.jsxs)(`h1`,{className:`mt-2 text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl`,children:[j.model[A],` `,j.year]})]}),(0,O.jsx)(`div`,{className:`text-2xl font-black gold-text sm:text-3xl`,children:j.price>0?d(j.price):A===`ar`?`تواصل لمعرفة السعر`:`Contact for price`})]}),(0,O.jsx)(`div`,{className:`mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3`,children:R.map(e=>(0,O.jsxs)(`div`,{className:`\r
                        rounded-xl\r
                        border border-white/10\r
                        bg-surface\r
                        p-4\r
                        transition-colors\r
                        hover:border-gold/30\r
                      `,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,O.jsx)(e.icon,{className:`h-4 w-4 text-gold`}),e.label]}),(0,O.jsx)(`div`,{className:`mt-2 text-sm font-bold text-foreground sm:text-base`,children:e.value})]},e.label))}),(0,O.jsxs)(`section`,{className:`mt-10 border-t border-white/10 pt-8`,children:[(0,O.jsx)(`h2`,{className:`text-2xl font-black text-foreground`,children:t.vehicle.overview}),(0,O.jsx)(`p`,{className:`mt-4 max-w-2xl text-base leading-8 text-muted-foreground`,children:j.description[A]})]}),(0,O.jsxs)(`section`,{className:`mt-9`,children:[(0,O.jsx)(`h2`,{className:`text-2xl font-black text-foreground`,children:t.vehicle.features}),(0,O.jsx)(`ul`,{className:`mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2`,children:j.features[A].map(e=>(0,O.jsxs)(`li`,{className:`\r
                          flex items-center gap-3\r
                          rounded-lg\r
                          border border-white/8\r
                          bg-surface/55\r
                          px-4 py-3\r
                          text-sm text-foreground/75\r
                        `,children:[(0,O.jsx)(`span`,{className:`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/10 text-gold`,children:(0,O.jsx)(w,{className:`h-4 w-4`})}),e]},e))})]})]})]}),(0,O.jsx)(`aside`,{className:`space-y-4 lg:col-span-2`,children:(0,O.jsxs)(`div`,{className:`lg:sticky lg:top-28`,children:[(0,O.jsxs)(`div`,{className:`\r
                    rounded-2xl\r
                    border border-white/10\r
                    bg-surface\r
                    p-5\r
                    shadow-[0_24px_70px_rgba(0,0,0,0.22)]\r
                    sm:p-6\r
                  `,children:[(0,O.jsxs)(`div`,{className:`mb-5 border-b border-white/10 pb-5`,children:[(0,O.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:j.brand[A]}),(0,O.jsxs)(`p`,{className:`mt-1 text-xl font-black text-foreground`,children:[j.model[A],` `,j.year]}),(0,O.jsx)(`p`,{className:`mt-3 text-2xl font-black gold-text`,children:j.price>0?d(j.price):A===`ar`?`تواصل لمعرفة السعر`:`Contact for price`})]}),s.whatsappEnabled&&(0,O.jsxs)(`a`,{href:u(t.vehicle.inquiryMessage(P)),target:`_blank`,rel:`noopener noreferrer`,className:`\r
                        flex min-h-12 w-full items-center justify-center gap-2\r
                        rounded-md\r
                        bg-whatsapp\r
                        px-6 py-3\r
                        text-sm font-bold\r
                        text-background\r
                        transition-all duration-200\r
                        hover:-translate-y-0.5\r
                        hover:opacity-90\r
                        hover:shadow-[0_14px_35px_rgba(37,211,102,0.18)]\r
                      `,children:[(0,O.jsx)(C,{className:`h-4 w-4`}),t.vehicle.inquire]}),(0,O.jsxs)(`div`,{className:`mt-6`,children:[(0,O.jsx)(`h2`,{className:`text-lg font-bold text-foreground`,children:t.vehicle.testDrive}),(0,O.jsx)(`p`,{className:`mt-1 text-xs leading-6 text-muted-foreground`,children:t.vehicle.testDriveDesc}),(0,O.jsx)(`div`,{className:`mt-5`,children:(0,O.jsx)(y,{kind:`testDrive`,vehicleName:P,submitLabel:t.vehicle.testDrive})})]})]}),(0,O.jsxs)(`p`,{className:`mt-4 text-xs leading-6 text-muted-foreground`,children:[t.footer.disclaimer,` — `,l(n)]})]})})]}),(0,O.jsxs)(`section`,{className:`mt-24 border-t border-white/10 pt-16`,children:[(0,O.jsxs)(`div`,{className:`flex items-end justify-between gap-4`,children:[(0,O.jsx)(`h2`,{className:`text-2xl font-black text-foreground sm:text-3xl`,children:t.vehicle.similar}),(0,O.jsx)(r,{to:`/`,hash:`cars`,className:`text-sm font-medium text-muted-foreground transition-colors hover:text-gold`,children:t.common.backToCars})]}),(0,O.jsx)(`div`,{className:`mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3`,children:i(j).map(e=>(0,O.jsx)(S,{car:e},e.id))})]})]})}),(0,O.jsx)(p,{}),(0,O.jsx)(b,{})]})}export{k as component};