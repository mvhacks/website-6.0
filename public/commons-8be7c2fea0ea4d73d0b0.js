"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{7108:function(e,t,n){n.d(t,{zx:function(){return O}});var a=n(4942),r=n(4925),i=n(9439),c=n(7294),o=n(2996),l=n(7066),s=n(5200),m=n(6219),u=n(8746),d=["children","className"],p=["label","placement","spacing","children","className","__css"],f=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],y=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],v=["icon","children","isRound","aria-label"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},E=function(e){return e?"":void 0},k=(0,m.k)({strict:!1,name:"ButtonGroupContext"}),w=(0,i.Z)(k,2),_=w[0],N=w[1];function x(e){var t=e.children,n=e.className,a=(0,r.Z)(e,d),i=(0,c.isValidElement)(t)?(0,c.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=b("chakra-button__icon",n);return c.createElement(l.m$.span,h(h({display:"inline-flex",alignSelf:"center",flexShrink:0},a),{},{className:o}),i)}function S(e){var t=e.label,n=e.placement,i=e.spacing,o=void 0===i?"0.5rem":i,s=e.children,m=void 0===s?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):s,d=e.className,f=e.__css,y=(0,r.Z)(e,p),v=b("chakra-button__spinner",d),g="start"===n?"marginEnd":"marginStart",E=(0,c.useMemo)((function(){var e;return h((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"},(0,a.Z)(e,g,t?o:0),(0,a.Z)(e,"fontSize","1em"),(0,a.Z)(e,"lineHeight","normal"),e),f)}),[f,t,g,o]);return c.createElement(l.m$.div,h(h({className:v},y),{},{__css:E}),m)}x.displayName="ButtonIcon",S.displayName="ButtonSpinner";var O=(0,l.Gp)((function(e,t){var n,a,m,u,d,p=N(),y=(0,l.mq)("Button",h(h({},p),e)),v=(0,s.Lr)(e),g=v.isDisabled,k=void 0===g?null==p?void 0:p.isDisabled:g,w=v.isLoading,_=v.isActive,x=v.children,O=v.leftIcon,C=v.rightIcon,Z=v.loadingText,A=v.iconSpacing,I=void 0===A?"0.5rem":A,P=v.type,z=v.spinner,D=v.spinnerPlacement,L=void 0===D?"start":D,B=v.className,R=v.as,M=(0,r.Z)(v,f),T=(0,c.useMemo)((function(){var e=h(h({},null==y?void 0:y._focus),{},{zIndex:1});return h(h({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},y),!!p&&{_focus:e})}),[y,p]),q=(n=R,a=(0,c.useState)(!n),m=(0,i.Z)(a,2),u=m[0],d=m[1],{ref:(0,c.useCallback)((function(e){e&&d("BUTTON"===e.tagName)}),[]),type:u?"button":void 0}),$=q.ref,G=q.type,H={rightIcon:C,leftIcon:O,iconSpacing:I,children:x};return c.createElement(l.m$.button,h({disabled:k||w,ref:(0,o.qq)(t,$),as:R,type:null!=P?P:G,"data-active":E(_),"data-loading":E(w),__css:T,className:b("chakra-button",B)},M),w&&"start"===L&&c.createElement(S,{className:"chakra-button__spinner--start",label:Z,placement:"start",spacing:I},z),w?Z||c.createElement(l.m$.span,{opacity:0},c.createElement(j,h({},H))):c.createElement(j,h({},H)),w&&"end"===L&&c.createElement(S,{className:"chakra-button__spinner--end",label:Z,placement:"end",spacing:I},z))}));function j(e){var t=e.leftIcon,n=e.rightIcon,a=e.children,r=e.iconSpacing;return c.createElement(c.Fragment,null,t&&c.createElement(x,{marginEnd:r},t),a,n&&c.createElement(x,{marginStart:r},n))}O.displayName="Button",(0,l.Gp)((function(e,t){var n=e.size,a=e.colorScheme,i=e.variant,o=e.className,s=e.spacing,m=void 0===s?"0.5rem":s,u=e.isAttached,d=e.isDisabled,p=(0,r.Z)(e,y),f=b("chakra-button__group",o),v=(0,c.useMemo)((function(){return{size:n,colorScheme:a,variant:i,isDisabled:d}}),[n,a,i,d]),g={display:"inline-flex"};return g=h(h({},g),{},u?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:m}}),c.createElement(_,{value:v},c.createElement(l.m$.div,h({ref:t,role:"group",__css:g,className:f,"data-attached":u?"":void 0},p)))})).displayName="ButtonGroup",(0,l.Gp)((function(e,t){var n=e.icon,a=e.children,i=e.isRound,o=e["aria-label"],l=(0,r.Z)(e,v),s=n||a,m=(0,c.isValidElement)(s)?(0,c.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(O,h({padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":o},l),m)})).displayName="IconButton"},2996:function(e,t,n){n.d(t,{lq:function(){return i},qq:function(){return c}});var a=n(7294);function r(e,t){if(null!=e)if("function"!=typeof e)try{e.current=t}catch(n){throw new Error("Cannot assign value '".concat(t,"' to ref '").concat(e,"'"))}else e(t)}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){r(t,e)}))}}function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.useMemo)((function(){return i.apply(void 0,t)}),t)}},2302:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(1082),i=n(5205),c=function(){return a.createElement("nav",{style:{backgroundColor:i.af.dark.palette.primary.main}},a.createElement(r.Link,{id:"title",style:{color:i.af.dark.palette.accent.main},to:"/"},"MV Hacks"),a.createElement("div",{className:"links"},a.createElement("div",{className:"link",id:"homeLink"},a.createElement(r.Link,{to:"/"},"Home")),a.createElement("div",{className:"link"},a.createElement(r.Link,{to:"/faq"},"FAQ")),a.createElement("div",{className:"link"},a.createElement(r.Link,{to:"/about-the-team"},"Team")),a.createElement("div",{className:"link"},a.createElement(r.Link,{to:"/sponsors"},"Sponsors")),a.createElement("div",{className:"link"},a.createElement(r.Link,{to:"/apply"},"Apply"))))},o=n.p+"static/insta_logo-0b600938fdc173438e1dbf8666beac85.png",l=n(7108),s=function(e){var t=e.children;return a.createElement("div",{className:"layout",style:{background:i.af.dark.palette.primary.main}},a.createElement("div",{className:"content-wrapper"},a.createElement(c,null),a.createElement("div",{className:"content"},t)),a.createElement("footer",{className:"footer",style:{background:i.af.dark.palette.primary.main,color:i.af.dark.palette.secondary.main,width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap"}},a.createElement("a",{href:"https://www.instagram.com/mvhacks/",target:"_blank",style:{width:"100%"}},a.createElement("img",{src:o,alt:"logo",style:{width:"4vh",marginLeft:"auto",marginRight:"auto"}})),a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",flexDirection:"column"}},a.createElement(l.zx,{variant:"outline",style:{marginTop:"15px"}},a.createElement("a",{href:"mailto:contact@mv-hacks.com"},"Contact us!")),a.createElement(l.zx,{variant:"outline",style:{marginTop:"15px",justifyContent:"center"}},a.createElement("a",{href:"https://mvhacks-4-5.devpost.com/?",target:"_blank"},"Check out our 4.5 winners!")),a.createElement(l.zx,{variant:"outline",style:{marginTop:"15px",justifyContent:"center"}},a.createElement("a",{href:"https://www.mvhacks.dev/",target:"_blank"},"Updated MVHacks Website")))))}},4001:function(e,t,n){var a=n(7294),r=n(1082);function i(e){var t,n,i=e.description,c=e.title,o=e.children,l=(0,r.useStaticQuery)("63159454").site,s=i||l.siteMetadata.description,m=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?c+" | "+m:c),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:s}),o)}i.defaultProps={description:""},t.Z=i},5205:function(e,t,n){n.d(t,{ZP:function(){return f},af:function(){return u}});var a=n(3433),r=(n(8559),n(7284)),i=n(3971),c=n.n(i);function o(e){return"function"==typeof e}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(e,t){return t(e)}),e)}}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c().apply(void 0,[{}].concat(t,[m]))}function m(e,t,n,a){if((o(e)||o(t))&&Object.prototype.hasOwnProperty.call(a,n))return function(){var n=o(e)?e.apply(void 0,arguments):e,a=o(t)?t.apply(void 0,arguments):t;return c()({},n,a,m)}}var u={dark:{palette:{primary:{main:"#171738",secondary:"#26577a"},secondary:{main:"#dedede",secondary:"#dedede"},accent:{main:"#e5e5de",secondary:"#26577a"}}}},d={Button:{baseStyle:{fontWeight:"semibold",fontSize:"lg"},sizes:{xl:{h:"56px",fontSize:"lg",px:"32px"}},variants:{outline:{border:"2px solid",borderColor:u.dark.palette.accent.main,color:u.dark.palette.accent.main,_hover:{color:u.dark.palette.primary.main,bg:u.dark.palette.accent.main},_active:{color:u.dark.palette.primary.main,bg:u.dark.palette.accent.main,opacity:.8}}}}},p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=[].concat(t),c=t[t.length-1];return(0,r.gk)(c)&&i.length>1?i=i.slice(0,i.length-1):c=r.rS,l.apply(void 0,(0,a.Z)(i.map((function(e){return function(t){return o(e)?e(t):s(t,e)}}))))(c)}({semanticTokens:Object.assign({},u),components:Object.assign({},d),styles:{global:{fonts:{body:"'Raleway', sans-serif",head:"'Raleway', sans-serif",footer:"'Raleway', sans-serif"}}}}),f=p}}]);
//# sourceMappingURL=commons-8be7c2fea0ea4d73d0b0.js.map