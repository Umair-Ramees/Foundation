"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{82966:function(a,b,c){var d,e,f,g=c(67294);function h(){return(h=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}b.Z=function(a){return g.createElement("svg",h({viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=g.createElement("path",{d:"M8.72727 4.88451C8.9815 4.87137 9.23882 4.86365 9.5 4.86365C14.1943 4.86365 18 6.93919 18 9.50001C18 12.0608 14.1943 14.1364 9.5 14.1364C4.80568 14.1364 1 12.0608 1 9.50001C1.03571 8.96842 1.19377 8.45228 1.46185 7.99185C1.72993 7.53142 2.10078 7.13916 2.54545 6.84569",stroke:"currentColor",strokeWidth:1.54545,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),e||(e=g.createElement("path",{d:"M14.1155 10.2727C14.1286 10.0185 14.1364 9.76118 14.1364 9.5C14.1364 4.80568 12.0608 1 9.50001 1C6.93919 1 4.86365 4.80568 4.86365 9.5C4.86365 14.1943 6.93919 18 9.50001 18C10.0316 17.9643 10.5477 17.8062 11.0082 17.5381C11.4686 17.2701 11.8609 16.8992 12.1543 16.4545",stroke:"currentColor",strokeWidth:1.54545,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),f||(f=g.createElement("path",{d:"M9.50002 10.2727C9.92679 10.2727 10.2727 9.92679 10.2727 9.50002C10.2727 9.07326 9.92679 8.72729 9.50002 8.72729C9.07326 8.72729 8.72729 9.07326 8.72729 9.50002C8.72729 9.92679 9.07326 10.2727 9.50002 10.2727Z",stroke:"currentColor",strokeWidth:1.54545,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))}},56781:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(85893),e=c(34051),f=c.n(e),g=c(88767),h=c(6702);function i(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(){return l.apply(this,arguments)}function l(){var a;return(l=(a=f().mark(function a(){var b,c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=ethereum");case 2:if(!(200!==(b=a.sent).status)){a.next=5;break}throw new Error("Price fetch error");case 5:return a.next=7,b.json();case 7:return c=a.sent,a.abrupt("return",c);case 9:case"end":return a.stop()}},a)}),function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){i(f,d,e,g,h,"next",a)}function h(a){i(f,d,e,g,h,"throw",a)}g(void 0)})})).apply(this,arguments)}function m(a){return(0,g.useQuery)(m.getKey(),k,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}({},a,{select:function(a){return a.ethereum.usd},refetchOnMount:!1,refetchOnWindowFocus:!1,staleTime:36e5,retry:10,retryDelay:2500}))}m.getKey=function(){return[h.V.ETHPrice]};var n=c(21435),o=c(949),p=c(6859);function q(a){var b=a.amount,c=m(),e=c.data,f=c.isLoading,g=c.isError,h=(0,o.zg)([f,g,!e]);if(h)return(0,d.jsx)(p.Z,{as:"span",css:{opacity:0},children:"—"});var i=parseFloat(b);return(0,d.jsx)(d.Fragment,{children:(0,n.MV)(i*e)})}},71005:function(a,b,c){c.d(b,{SV:function(){return S},kZ:function(){return T},X9:function(){return R},ZP:function(){return N}});var d=c(85893),e=c(50265),f=c(6859),g=c(37878),h=c(73612),i=c(54472),j=c(21032),k=c(29320),l=c(30825),m=c(36027);function n(a){var b=a.users,c=(0,l.GYS)(b);return(0,d.jsx)(e.Z,{css:{flexDirection:"row-reverse",paddingRight:"$3"},children:c.map(function(a){return(0,d.jsx)(j.Z,{css:{marginRight:"-$3"},children:(0,d.jsx)(m.Z,{publicKey:a.publicKey,imageUrl:a.profileImageUrl,maxSize:34,css:{width:34,height:34}})},a.publicKey)})})}var o=c(56964),p=c(78613),q=c(61523),r=c(55781),s=c(58824),t=c(57592);function u(a){var b=a.split,c=a.index,h="".concat(b.sharePercent,"%");return(0,d.jsxs)(s.Z,{css:{gap:"$6","@bp1":{gap:"$7"}},children:[(0,d.jsxs)(e.Z,{css:{justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(g.Z,{user:b.user,hoverable:!0}),(0,d.jsx)(f.Z,{size:3,weight:"semibold",children:h})]}),(0,d.jsx)(w,{children:(0,d.jsx)(v,{as:t.E.div,initial:{width:0},animate:{width:h},transition:{delay:(c+1)*.15}})})]})}var v=(0,i.zo)(j.Z,{background:"linear-gradient(110.78deg, #76E650 -1.13%, #F9D649 15.22%, #F08E35 32.09%, #EC5157 48.96%, #FF18BD 67.94%, #1A4BFF 85.34%, #62D8F9 99.57%)",height:4,borderRadius:"$round"}),w=(0,i.zo)(j.Z,{height:4,display:"grid",gridTemplateRows:"1fr",backgroundColor:"$black10",borderRadius:"$round"});function x(a){var b=a.splits;return(0,d.jsx)(s.Z,{css:{gap:"$7"},children:b.map(function(a,b){return(0,d.jsx)(u,{split:a,index:b},a.user.publicKey)})})}var y=c(76162),z=c(88636),A=c(86411),B=c(1746),C=c(949),D=c(10201);function E(a){var b=a.percentSplits,c=(0,C.sD)(b);return(0,d.jsx)(o.Z,{modalKey:B.$.ARTWORK_SPLITS,children:(0,d.jsx)(p.Z,{css:{maxWidth:520,paddingBottom:"$8","@bp1":{paddingX:"$9",paddingBottom:"$9",paddingTop:"$8"}},children:(0,d.jsxs)(s.Z,{children:[(0,d.jsxs)(s.Z,{css:{gap:"$5",marginBottom:"$7","@bp1":{marginBottom:"$8"}},children:[(0,d.jsxs)(e.Z,{css:{alignItems:"center"},children:[(0,d.jsx)(k.Z,{icon:A.Z,width:36,height:31,style:{top:3}}),(0,d.jsx)(q.ZP,{tracking:"tight",leading:"tight",size:{"@initial":4,"@bp1":5},css:{marginLeft:"$4"},children:"Split"})]}),(0,d.jsxs)(r.Z,{css:{maxWidth:320},children:["Split earnings are automatically deposited into each recipient’s wallet."," ",(0,d.jsx)(z.Z,{as:"a",target:"_blank",rel:"noreferrer",href:"https://help.foundation.app/hc/en-us/articles/4513530159131-FAQ-Splits-for-NFTs",css:{display:"inline"},children:"Learn more →"})]})]}),(0,d.jsx)(s.Z,{css:{marginBottom:"$8","@bp1":{marginBottom:"$9"}},children:(0,d.jsx)(x,{splits:b})}),c&&(0,d.jsx)(y.Z,{href:(0,D.pJ)("/address/".concat(c.contractAddress)),txHash:c.contractAddress})]})})})}var F,G,H,I=c(25607),J=c(30281),K=(0,i.zo)(j.Z,{color:"$black20",marginRight:"$6",transition:"color $0 $ease"}),L=(0,i.zo)(e.Z,{boxShadow:"$0",borderRadius:"$round",minHeight:52,alignItems:"center",paddingLeft:"$6",paddingRight:"$3",cursor:"pointer",transition:"transform $1 $ease, box-shadow $1 $ease",willChange:"transform","@hover":{"&:hover":(F={boxShadow:"$1",transform:"translateY(-2px)"},H={color:"$black100"},(G="& ".concat(K))in F?Object.defineProperty(F,G,{value:H,enumerable:!0,configurable:!0,writable:!0}):F[G]=H,F),"&:active":{boxShadow:"$0",transform:"translateY(0)"}}});function M(a){var b=a.percentSplits,c=a.creatorPublicKey,f=b.map(function(a){return a.user}).filter(function(a){return!(0,I.yv)([a.publicKey,c])}),g=(0,J.Z)().setCurrentModal;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(E,{percentSplits:b}),(0,d.jsx)(e.Z,{children:(0,d.jsxs)(L,{onClick:function(){g(B.$.ARTWORK_SPLITS)},children:[(0,d.jsx)(K,{children:(0,d.jsx)(k.Z,{icon:A.Z,width:24,height:20})}),(0,d.jsx)(n,{users:f})]})})]})}function N(a){var b=a.creator,c=a.collection,f=a.percentSplits,i=a.creatorPublicKey,j=(0,C.KO)(f);return(0,d.jsxs)(T,{children:[(0,d.jsxs)(S,{children:[(0,d.jsx)(R,{spacing:"large",children:"Created by"}),(0,d.jsx)(e.Z,{children:(0,d.jsx)(g.Z,{user:b})})]}),j&&(0,d.jsxs)(S,{children:[(0,d.jsx)(R,{spacing:"large",children:"Split with"}),(0,d.jsx)(M,{creatorPublicKey:i,percentSplits:f})]}),(0,d.jsxs)(S,{children:[(0,d.jsx)(R,{spacing:"large",children:"Collection"}),(0,d.jsx)(h.Z,{user:b,collection:c,appearance:"normal",size:28,fontSize:2})]})]})}var O,P,Q,R=(0,i.zo)(f.Z,{color:"$black60",fontWeight:"$semibold",variants:{spacing:{regular:{marginBottom:"$1"},large:{marginBottom:"$3"}}}}),S=(0,i.zo)(e.Z,{flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start"}),T=(0,i.zo)(e.Z,(O={flexDirection:"column","@bp0":{flexDirection:"row"}},Q={paddingBottom:"$6","@bp0":{paddingRight:"$6",paddingBottom:0,marginRight:"$6",borderRight:"1px solid $black5"}},(P="> ".concat(S,":not(:last-of-type)"))in O?Object.defineProperty(O,P,{value:Q,enumerable:!0,configurable:!0,writable:!0}):O[P]=Q,O))},15437:function(a,b,c){c.d(b,{Z:function(){return x},j:function(){return y}});var d,e,f,g,h,i,j,k=c(85893),l=c(67294),m=c(62391);function n(){return(n=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var o=function(a){return l.createElement("svg",n({viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),d||(d=l.createElement("path",{d:"M7.92517 13.2561L13.0498 17.0998C13.1818 17.1995 13.3408 17.2498 13.4998 17.2498C13.6138 17.2498 13.7293 17.2235 13.835 17.171C14.0893 17.0435 14.2498 16.784 14.2498 16.4998V6.93152L7.92517 13.2561Z",fill:"currentColor"})),e||(e=l.createElement("path",{d:"M1.5001 12.7499H5.25002L14.2498 3.75011V1.50016C14.2498 1.21592 14.0893 0.956427 13.8351 0.82893C13.5816 0.703683 13.2771 0.729932 13.0498 0.900178L7.25022 5.25008H1.5001C1.08536 5.25008 0.750122 5.58532 0.750122 6.00006V11.9999C0.750122 12.4147 1.08536 12.7499 1.5001 12.7499Z",fill:"currentColor"})),f||(f=l.createElement("path",{d:"M0.75017 17.9998C0.558174 17.9998 0.366179 17.9263 0.219932 17.78C-0.0733108 17.4868 -0.0733108 17.0128 0.219932 16.7195L16.7195 0.219932C17.0128 -0.0733108 17.4868 -0.0733108 17.78 0.219932C18.0733 0.513175 18.0733 0.987164 17.78 1.28041L1.28041 17.78C1.13416 17.9263 0.942165 17.9998 0.75017 17.9998Z",fill:"currentColor"})))};function p(){return(p=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var q=function(a){return l.createElement("svg",p({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},a),g||(g=l.createElement("g",{clipPath:"url(#clip0)",fill:"currentColor"},l.createElement("path",{d:"M10.84 1.078a.755.755 0 00-.785.072L4.252 5.502H.75a.75.75 0 00-.75.75v6.003c0 .415.335.75.75.75h3.502l5.803 4.352a.747.747 0 00.785.071.751.751 0 00.415-.671V1.75a.751.751 0 00-.415-.672zM13.689 6.07l-.53-.53-1.062 1.06.53.531a3.003 3.003 0 010 4.244l-.53.53 1.061 1.062.53-.53a4.507 4.507 0 000-6.367z"}),l.createElement("path",{d:"M15.28 3.417l-1.06 1.061.53.53a6.01 6.01 0 010 8.49l-.53.53 1.06 1.061.53-.53c2.926-2.926 2.926-7.686 0-10.612l-.53-.53z"}))),h||(h=l.createElement("defs",null,l.createElement("clipPath",{id:"clip0"},l.createElement("path",{fill:"currentColor",d:"M0 0h18v18H0z"})))))};function r(){return(r=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var s=function(a){return l.createElement("svg",r({viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),i||(i=l.createElement("path",{d:"M9 2H12.6L8.6 6L10 7.4L14 3.4V7H16V0H9V2ZM6 8.6L2 12.6V9H0V16H7V14H3.4L7.4 10L6 8.6Z",fill:"currentColor"})))};function t(){return(t=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var u=function(a){return l.createElement("svg",t({viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),j||(j=l.createElement("path",{d:"M0.4 11.4H4L0 15.4L1.4 16.8L5.4 12.8V16.4H7.4V9.4H0.4V11.4ZM15.4 0L11.4 4V0.4H9.4V7.4H16.4V5.4H12.8L16.8 1.4L15.4 0Z",fill:"currentColor"})))},v=c(21032);function w(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function x(a){var b=a.onClick,c=a.isMuted;return(0,k.jsx)(v.Z,{as:"button",css:{appearance:"none",background:"unset",border:"none",borderRadius:"$round",height:36,width:36,padding:0,cursor:"pointer",outline:"none",color:"$black60",transition:"color $1 $ease, background-color $1 $ease, border-radius $1 $ease",textAlign:"center","@hover":{"&:hover":{color:"$black100",backgroundColor:"$black10",borderRadius:"$round"}}},onClick:b,children:(0,k.jsx)(v.Z,{css:{display:"flex"},children:c?(0,k.jsx)(o,{style:{width:18,height:"100%",marginLeft:"auto",marginRight:"auto"}}):(0,k.jsx)(q,{style:{width:19,height:"100%",marginLeft:"auto",marginRight:"auto"}})})})}function y(a){var b=a.css,c=a.onClick,d=a.isFullscreen,e=(0,l.useState)(!1),f=e[0],g=e[1];return((0,l.useEffect)(function(){g((0,m.Z)())},[]),f)?(0,k.jsx)(v.Z,{as:"button",css:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){w(a,b,c[b])})}return a}({appearance:"none",background:"unset",border:"none",borderRadius:"$round",height:36,width:36,padding:0,cursor:"pointer",outline:"none",color:"$black60",transition:"color $1 $ease, background-color $1 $ease, border-radius $1 $ease",textAlign:"center","@hover":{"&:hover":{color:"$black100",backgroundColor:"$black10",borderRadius:"$round"}}},b),onClick:c,children:(0,k.jsx)(v.Z,{css:{display:"flex"},children:d?(0,k.jsx)(u,{style:{width:16,height:"100%",marginLeft:"auto",marginRight:"auto"}}):(0,k.jsx)(s,{style:{width:16,height:"100%",marginLeft:"auto",marginRight:"auto"}})})}):null}},43519:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(85893),e=c(45912);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(a){return(0,d.jsx)(e.Z,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){f(a,b,c[b])})}return a}({},a,{appearance:"frosted",shape:2}))}},75:function(a,b,c){c.d(b,{i:function(){return y}});var d=c(85893),e=c(21032),f=c(6859),g=c(50265),h=c(58824),i=c(52938),j=c(72839),k=c(43519),l=c(33181),m=c(21435),n=c(26280),o=c(37878),p=c(54472),q=c(67294),r=c(96854);function s(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var t=(0,q.createContext)({breakpoint:v()}),u=function(){return(0,q.useContext)(t)};function v(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:4;return{min:"@bp".concat(a),max:"@bp".concat(a,"-max")}}function w(a){var b=a.hasDarkBackground,c=a.symbol,f=u().breakpoint;return(0,d.jsx)(e.Z,{css:s({},f.max,s({},"".concat(j.R),{fontSize:"$0"})),children:(0,d.jsx)(j.Z,{frosted:b,contract:c})})}function x(a){var b=a.artworkCount,c=a.hasDarkBackground,h=a.name,j=a.symbol,k=u().breakpoint;return(0,d.jsxs)(g.Z,{css:{flexDirection:"column"},children:[(0,d.jsx)(i.Z,{color:c?"light":"dark",css:{marginBottom:"$2"},size:{"@initial":3,"@bp1":4},children:h}),(0,d.jsxs)(g.Z,{css:{alignItems:"center"},children:[(0,d.jsx)(e.Z,{css:s({marginRight:"$3",display:"none","@bp1":{display:"block"}},k.min,{display:"none"}),children:(0,d.jsx)(w,{hasDarkBackground:c,symbol:j})}),(0,d.jsxs)(f.Z,{as:"p",css:{color:c?"$white100":"$black100",fontWeight:"$semibold"},children:[(0,m.Gl)(b)," ",(0,n.DV)("NFT",b)]})]})]})}var y={Contract:w,Details:function(a){var b=a.artworkCount,c=a.collection,f=a.hasDarkBackground,h=u().breakpoint;return(0,d.jsxs)(g.Z,{css:s({alignItems:"center"},h.min,{flex:1,flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",textAlign:"left",height:"inherit",minHeight:"inherit"}),children:[c.collectionImageUrl&&(0,d.jsx)(e.Z,{css:s({marginRight:"$4"},h.min,{marginBottom:"auto"}),children:(0,d.jsx)(k.Z,{alt:c.name,stroke:{"@initial":2,"@bp5":3},css:s({width:(0,r.C5)(15),height:(0,r.C5)(15)},h.min,{width:(0,r.C5)(32),height:(0,r.C5)(32)}),imageUrl:(0,l.nJ)(160,c.collectionImageUrl)})}),(0,d.jsx)(e.Z,{css:s({paddingY:"$6",display:"none"},h.min,{display:"block"}),children:(0,d.jsx)(w,{hasDarkBackground:f,symbol:c.symbol})}),(0,d.jsx)(x,{artworkCount:b,hasDarkBackground:f,name:c.name,symbol:c.symbol})]})},Grid:(0,p.zo)(h.Z,{gridTemplateColumns:"repeat(3, 1fr)",gap:"$4","@bp3":{gap:"$6"},"@bp4":{gap:"$7"},"@bp4-max":{overflow:"auto",paddingBottom:"$3",paddingX:"$6",width:"100vw",scrollSnapType:"x mandatory",scrollPaddingLeft:"$6",scrollPaddingRight:"$6","& .artwork-card":{minWidth:"340px",scrollSnapAlign:"center","&:first-of-type":{scrollSnapAlign:"end"},"&:last-of-type":{scrollSnapAlign:"start"}}},"@bp0-max":{"& .artwork-card":{minWidth:"80vw"}}}),Provider:function(a){return(0,d.jsx)(t.Provider,{value:{breakpoint:v(a.mobileLayoutBreakpoint)},children:a.children})},Summary:x,User:function(a){var b=a.hasDarkBackground,c=a.user;return(0,d.jsx)(o.Z,{appearance:b?"frosted":"normal",user:c,hoverable:!0})}}},52938:function(a,b,c){var d=c(61523),e=c(54472),f=(0,e.zo)(d.ZP,{lineHeight:1,color:"$white100",wordBreak:"break-word",maxWidth:720,"@bp2":{fontSize:"$8"},variants:{color:{dark:{color:"$black100"},light:{color:"$white100"}}}});b.Z=f},74956:function(a,b,c){c.d(b,{SI:function(){return p},AQ:function(){return s}});var d=c(85893),e=c(67294),f=c(2801),g=c(73158),h=c(15437),i=c(28343),j=c(50835),k=c(21032),l=c(33181),m=c(62391);function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}var p=(0,e.memo)(function(a){var b=(0,d.jsx)(q,o({},a));if(!a.ratio)return b;var c=a.ratio||1;return(0,d.jsx)(i.Z,{ratio:c,css:{display:"flex",alignItems:"center",justifyContent:"center"},children:b})});function q(a){var b=a.artwork,c=a.controls,e=(0,l.RY)(b),f=(0,l.AI)(b),g=(0,l.Wv)(e);return g?(0,d.jsx)(s,{assetUrl:e,posterUrl:f,controls:c}):(0,d.jsx)(r,{imageUrl:e,controls:c,alt:b.name})}function r(a){var b=a.imageUrl,c=a.controls,i=a.alt,l=(0,e.useState)(!1),n=l[0],o=l[1],p=(0,e.useRef)(null);(0,e.useEffect)(function(){p.current.complete&&o(!0)},[p]);var q=(0,f.r)(),r=function(){return q.active?q.exit():q.enter()};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.I,{handle:q,children:[(0,d.jsx)(g.Z,{isLoading:!n,size:32}),(0,d.jsx)(j.Z,{alt:i,ref:p,src:b,css:{display:"block",width:"100%",height:"100%",objectFit:"contain",cursor:q.active?"default":"zoom-in"},onLoad:function(){o(!0)},onClick:function(){if(!q.active&&c&&(0,m.Z)())return q.enter()}}),q.active&&(0,d.jsx)(k.Z,{css:{position:"absolute",bottom:"$3",right:"$3",display:"flex",flexDirection:"column"},children:(0,d.jsx)(h.j,{onClick:r,isFullscreen:q.active})})]}),c&&(0,d.jsx)(k.Z,{css:{position:"absolute",bottom:0,right:0,paddingRight:"$5",paddingBottom:"$5"},children:(0,d.jsx)(h.j,{onClick:r,isFullscreen:q.active})})]})}function s(a){var b=a.assetUrl,c=a.posterUrl,i=a.controls,j=a.css,l=(0,e.useRef)(null),n=(0,e.useState)(!0),p=n[0],q=n[1],r=(0,e.useState)(!1),s=r[0],t=r[1],u=(0,e.useState)(!0),v=u[0],w=u[1],x=(0,f.r)();(0,e.useEffect)(function(){if(l.current){var a=l.current,b=function(){var b;t(Boolean(null==a?void 0:a.mozHasAudio)||Boolean(null==a?void 0:a.webkitAudioDecodedByteCount)||Boolean(null==a?void 0:null===(b=a.audioTracks)|| void 0===b?void 0:b.length))},c=function(){w(!1)};return a.addEventListener("loadeddata",b),v?a.addEventListener("timeupdate",c):a.removeEventListener("timeupdate",c),function(){a.removeEventListener("loadeddata",b),a.removeEventListener("timeupdate",c)}}},[l,v]);var y=function(){l.current.muted?(l.current.muted=!1,q(!1)):(l.current.muted=!0,q(!0))},z=function(){return x.active?x.exit():x.enter()};return(0,d.jsxs)(k.Z,{css:o({display:"flex",justifyContent:"center",width:"100%"},j),children:[(0,d.jsxs)(f.I,{handle:x,children:[(0,d.jsx)("video",{ref:l,style:{width:"100%",height:"100%",margin:"auto",transition:"filter 0.3s ease-in-out",cursor:x.active||!i?"default":"zoom-in",filter:v?"blur(10px)":""},src:b,poster:c,loop:!0,autoPlay:!0,muted:!0,playsInline:!0,onClick:function(){if(!x.active&&i&&(0,m.Z)())return x.enter()}}),(0,d.jsx)(g.Z,{isLoading:v,size:32}),x.active&&(0,d.jsxs)(k.Z,{css:{position:"absolute",bottom:"$4",right:"$4",display:"flex",flexDirection:"column"},children:[s&&(0,d.jsx)(h.Z,{isMuted:p,onClick:y}),(0,d.jsx)(h.j,{onClick:z,isFullscreen:x.active})]})]}),i&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(k.Z,{css:{position:"absolute",bottom:"$4",right:"$4"},children:[s&&(0,d.jsx)(h.Z,{isMuted:p,onClick:y}),(0,d.jsx)(h.j,{css:{marginLeft:"$2"},onClick:z,isFullscreen:x.active})]})})]})}p.displayName="ProductMedia"},15157:function(a,b,c){c.d(b,{Z:function(){return h}});var d=c(85893),e=c(5152),f=c(21032),g=(0,e.default)(function(){return Promise.all([c.e(5246),c.e(2323)]).then(c.bind(c,42323))},{loadableGenerated:{webpack:function(){return[42323]}},ssr:!1});function h(a){var b=a.src,c=a.className,e=a.disableAR,h=a.toBlob;return(0,d.jsx)(f.Z,{className:c,children:(0,d.jsx)(g,{src:b,toBlob:h,disableAR:e})})}},76162:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(85893),e=c(6859),f=c(18181),g=c(10106),h=c(10201);function i(a){var b=a.txHash,c=a.href,i=(0,h.pJ)("/tx/".concat(b));return(0,d.jsxs)(f.Z,{href:c||i,css:{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",color:"$black60",transition:"color $2 $ease","@hover":{"&:hover":{color:"$black100"}}},target:"_blank",rel:"noreferrer",children:[(0,d.jsx)(g.Z,{sx:{display:"block"},width:16,height:16}),(0,d.jsx)(e.Z,{weight:"semibold",css:{marginLeft:"$4",position:"relative",top:-1},children:"View on Etherscan"})]})}},4308:function(a,b,c){c.d(b,{n:function(){return h}});var d=c(31514),e=c(88767),f=c(92558),g="\n    query ArtworkByContractTokenId($contractSlug: citext!, $tokenId: Int!) {\n  artworks: artwork(\n    where: {tokenId: {_eq: $tokenId}, collection: {slug: {_eq: $contractSlug}}}\n  ) {\n    ...ArtworkFragmentExtended\n  }\n}\n    ".concat(d.lr),h=function(a,b){return(0,e.useQuery)(["ArtworkByContractTokenId",a],(0,f.aT)(g,a),b)};h.getKey=function(a){return["ArtworkByContractTokenId",a]}},62416:function(a,b,c){c.d(b,{Z:function(){return i},F:function(){return j}});var d=c(4308),e=c(82402),f=c(949),g=c(2880);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a,b){return(0,d.n)({tokenId:a.tokenId,contractSlug:a.contractSlug},function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}({},b,{enabled:(0,f.IE)([a.contractSlug,(0,f.hj)(a.tokenId),(0,g.F)(b),]),select:function(a){return(0,f.sD)(a.artworks)}}))}function j(a){var b=(0,e.Z)(),c=b.contractSlug,d=b.tokenId;return i({contractSlug:c,tokenId:Number(d)},a)}i.getKey=d.n.getKey},82402:function(a,b,c){c.d(b,{Z:function(){return f}});var d=c(11163),e=c(949);function f(){var a,b=(0,d.useRouter)();return{txHash:(0,e.sD)(b.query.txHash),tokenId:(0,e.sD)(b.query.tokenId),contractSlug:null!==(a=(0,e.sD)(b.query.contractAddress))&& void 0!==a?a:(0,e.sD)(b.query.addressOrSlug)}}},62391:function(a,b,c){c.d(b,{Z:function(){return d}});function d(){return(null==document?void 0:document.fullscreenEnabled)||(null==document?void 0:document.webkitFullscreenEnabled)||(null==document?void 0:document.mozFullscreenEnabled)}}}])
//# sourceMappingURL=390-f6e87e5a404a16e2.js.map