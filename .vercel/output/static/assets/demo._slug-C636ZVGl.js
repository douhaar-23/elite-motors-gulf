import{i as e,n as t,t as n}from"./jsx-runtime-BKllkxft.js";import{t as r}from"./index-BmJjWkpy.js";var i=e(t(),1),a=n(),o=(0,i.createContext)(null);function s({value:e,children:t}){return(0,a.jsx)(o.Provider,{value:e,children:t})}function c(){let e=(0,i.useContext)(o);if(!e)throw Error(`useDemo must be used inside DemoProvider`);return e}function l(){return(0,a.jsx)(s,{value:r.useLoaderData(),children:(0,a.jsx)(u,{})})}function u(){let e=c(),t={"--gold":e.theme.primary,"--gold-soft":e.theme.primarySoft,"--ring":e.theme.primary},n=e.country===`US`;return(0,a.jsx)(`main`,{dir:n?`ltr`:`rtl`,lang:n?`en`:`ar`,style:t,className:`min-h-screen bg-background text-foreground transition-colors duration-300`,children:(0,a.jsx)(`div`,{className:`mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16 sm:px-6`,children:(0,a.jsxs)(`div`,{className:`
            w-full
            rounded-2xl
            border border-border
            bg-surface
            p-6
            text-center
            shadow-[0_24px_70px_rgba(0,0,0,0.12)]
            transition-colors duration-300
            sm:p-10
          `,children:[(0,a.jsx)(`img`,{src:e.logoHorizontal||e.logoSquare,alt:n?e.nameEn:e.nameAr,className:`mx-auto mb-6 h-20 max-w-72 object-contain`}),(0,a.jsx)(`h1`,{className:`text-4xl font-black text-foreground`,children:n?e.nameEn:e.nameAr}),(0,a.jsx)(`p`,{className:`mt-3 text-muted-foreground`,children:e.phone}),(0,a.jsx)(`a`,{href:n?`tel:${e.phone}`:`https://wa.me/${e.whatsapp}`,className:`
              mt-6
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gold
              px-6 py-3
              font-bold
              text-background
              transition-all duration-200
              hover:bg-gold-soft
            `,children:n?`Call Us`:`تواصل عبر واتساب`})]})})})}export{l as component};