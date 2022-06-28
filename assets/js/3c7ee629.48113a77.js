"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[8984],{1749:function(e,t,n){var a=n(5987),o=n(7462),r=n(7294),i=(n(5697),n(6010)),s=n(5557),l=[0,1,2,3,4,5,6,7,8,9,10],c=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,l=e.alignItems,c=void 0===l?"stretch":l,u=e.classes,d=e.className,h=e.component,p=void 0===h?"div":h,f=e.container,m=void 0!==f&&f,g=e.direction,k=void 0===g?"row":g,y=e.item,v=void 0!==y&&y,w=e.justify,b=void 0===w?"flex-start":w,x=e.lg,T=void 0!==x&&x,F=e.md,N=void 0!==F&&F,O=e.sm,S=void 0!==O&&O,j=e.spacing,I=void 0===j?0:j,P=e.wrap,W=void 0===P?"wrap":P,E=e.xl,M=void 0!==E&&E,C=e.xs,D=void 0!==C&&C,Z=e.zeroMinWidth,B=void 0!==Z&&Z,G=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=(0,i.Z)(u.root,d,m&&[u.container,0!==I&&u["spacing-xs-".concat(String(I))]],v&&u.item,B&&u.zeroMinWidth,"row"!==k&&u["direction-xs-".concat(String(k))],"wrap"!==W&&u["wrap-xs-".concat(String(W))],"stretch"!==c&&u["align-items-xs-".concat(String(c))],"stretch"!==s&&u["align-content-xs-".concat(String(s))],"flex-start"!==b&&u["justify-xs-".concat(String(b))],!1!==D&&u["grid-xs-".concat(String(D))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==N&&u["grid-md-".concat(String(N))],!1!==T&&u["grid-lg-".concat(String(T))],!1!==M&&u["grid-xl-".concat(String(M))]);return r.createElement(p,(0,o.Z)({className:z,ref:t},G))})),h=(0,s.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(o,2)),width:"calc(100% + ".concat(u(o),")"),"& > $item":{padding:u(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};c.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=h},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},216:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return h},default:function(){return f}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(1749),s=n(4996),l=["components"],c={id:"nfts-on-eosio",title:"NFTs on EOSIO ecosystem",sidebar_label:"NFTs on EOSIO ecosystem"},u=void 0,d={unversionedId:"eos-learn/nfts-on-eosio",id:"eos-learn/nfts-on-eosio",title:"NFTs on EOSIO ecosystem",description:"Digital assets have been foraying into the everyday living of hundreds of people. Utilities such as product verification, traceability or authentication are some of the most important facts which Non-Fungible-Tokens are being used for.",source:"@site/docs/eos-learn/nft-on-eosio.mdx",sourceDirName:"eos-learn",slug:"/eos-learn/nfts-on-eosio",permalink:"/docs/eos-learn/nfts-on-eosio",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/nft-on-eosio.mdx",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656451092,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"nfts-on-eosio",title:"NFTs on EOSIO ecosystem",sidebar_label:"NFTs on EOSIO ecosystem"},sidebar:"docs",previous:{title:"Security",permalink:"/docs/eos-learn/blockchain-security"},next:{title:"Markdown Guide",permalink:"/docs/tutorials/markdown-guide"}},h=[{value:"What are NFTS ?",id:"what-are-nfts-",children:[],level:2},{value:"NTFs Marketplaces",id:"ntfs-marketplaces",children:[],level:2},{value:"Which NFT Marketplaces are used on EOSIO ?",id:"which-nft-marketplaces-are-used-on-eosio-",children:[],level:2},{value:"What is IPFS and how is it used for NFTs?",id:"what-is-ipfs-and-how-is-it-used-for-nfts",children:[],level:2},{value:"What advantages &amp; disadvantages do EOSIO Ecosystem marketplaces have over others?",id:"what-advantages--disadvantages-do-eosio-ecosystem-marketplaces-have-over-others",children:[],level:2}],p={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Digital assets have been foraying into the everyday living of hundreds of people. Utilities such as product verification, traceability or authentication are some of the most important facts which Non-Fungible-Tokens are being used for. "),(0,r.kt)("p",null,"To walkthrough the topic you can learn the following aspects:"),(0,r.kt)("h2",{id:"what-are-nfts-"},"What are NFTS ?"),(0,r.kt)("p",null,"NFT is the abridged version of Non-Fungible-Token, a blockchain application that represents the ownership of any physical or digital asset, it has the characteristic that is unique and uncommon. Music, videos and art (digitals) Real estate, jewelry or automobilistic are only some examples of pieces that can be tokenized as NFTs. "),(0,r.kt)("h2",{id:"ntfs-marketplaces"},"NTFs Marketplaces"),(0,r.kt)("p",null,"NFT Marketplace is a convenient place for people to discover, buy and sell NFTs. People can find what they're looking for, whether it's art, videos, images, or more.\nCurrently there is a wide variety of markets for NFTs that offer us content of all kinds. "),(0,r.kt)("p",null,"We can highlight important features when choosing a marketplace for our NFT.\nWe need to consider which platform is best suited to the type of NFT we have or are looking for, how much the market will charge per sale, if any, and which blockchain it uses."),(0,r.kt)("h2",{id:"which-nft-marketplaces-are-used-on-eosio-"},"Which NFT Marketplaces are used on EOSIO ?"),(0,r.kt)("p",null,"In this table are some of the best NFT marketplaces on EOSIO where you can create and sell NFTs, or just buy and collect new projects. Whether you are buying, selling, or just curious about NFT."),(0,r.kt)(i.Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Marketplace"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Specifications")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.protonmarket.com/"},(0,r.kt)("img",{src:"https://www.protonmarket.com/beta-logo.svg"}))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Through the Proton Market, anyone can easily and quickly create, mint, and sell NFTs at a fraction of the cost of other NFT platforms.")),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"NFT Type:")," Games, music, collectibles, virtual characters and more."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Blockchain:")," Proton."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://areaxnft.com/"},(0,r.kt)("img",{src:"https://areaxnft.com/img/areax%20logo%20light.68b6831b.svg"}))),(0,r.kt)("td",null,(0,r.kt)("p",null,"AreaX NFT is an NFT Marketplace based on Marble standard on Telos blockchain.")),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"NFT Type:")," Digital art, memes, music, videos and more."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Blockchain:")," Telos."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wax.atomichub.io/"},(0,r.kt)("img",{className:"atomicHubLogo",src:"https://wax.atomichub.io/images/logos/atomichub.svg"}))),(0,r.kt)("td",null,(0,r.kt)("p",null,"The NFT marketplace for rare collections.")),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"NFT Type:")," Digital art, cars, rare collections and more."),(0,r.kt)("p",null,(0,r.kt)("strong",null,"Blockchain:")," Wax."))))),(0,r.kt)("h2",{id:"what-is-ipfs-and-how-is-it-used-for-nfts"},"What is IPFS and how is it used for NFTs?"),(0,r.kt)("p",null,"First let's define what IPFS is, in a nutshell IPFS is a distributed file system that stores images, videos, documents and more. When we talk about how IPFS is used for NFT it comes down to storage and security."),(0,r.kt)("p",null,"When we create an NFT it is automatically linked to a digital file that is stored in a system, therefore we must consider the importance of how the data is linked to that system."),(0,r.kt)("p",null,"Normally HTTP links do not provide much security to the file since it can be changed by anyone who has access to it, for example the owner of the server."),(0,r.kt)("p",null,"This is where IPFS storage provides better file care. IPFS has content addressing, this generates a content identifier (CID) that is linked directly to the file stored on the IPFS network, CID can only be linked to a specific file, this gives us the security that no one can replace the content without damaging the link."),(0,r.kt)("p",null,"Also, if you want to change the content of our NFT, it is not a problem for IPFS, the file always keeps a history of the changes, which gives us security."),(0,r.kt)("h2",{id:"what-advantages--disadvantages-do-eosio-ecosystem-marketplaces-have-over-others"},"What advantages & disadvantages do EOSIO Ecosystem marketplaces have over others?"),(0,r.kt)(i.Z,{className:"table-nft-marketplaces",mdxType:"Grid"},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("p",{className:"icono"},(0,r.kt)("img",{src:(0,s.Z)("img/nft-on-eosio/check-32.png")})),"Advantages "),(0,r.kt)("th",null,(0,r.kt)("p",{className:"icono"},(0,r.kt)("img",{src:(0,s.Z)("img/nft-on-eosio/delete-32.png")})),"Disadvantages")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"Proton, WAX & Telos have distinguishable differences over other Blockchains. One of the main concerns is the gas fee per transaction, which is very low. The ecosystem has that advantage.")),(0,r.kt)("td",null,(0,r.kt)("p",null,"These Market Places do not receive connections with most popular wallets such as Metamask, CoinbaseWallet, Wallet Connect or others."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"Mint the NFT is a process where you should be careful and be prepared to manage the process. The experience of uploading your cryptoart is one of the easiest, no more than 5 steps.")),(0,r.kt)("td",null,(0,r.kt)("p",null,"You can only use the ecosystem available wallets."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"On Proton, you only need to have the wallet authentication managed by your profile.")),(0,r.kt)("td",null,(0,r.kt)("p",null,"They aren\u2019t well known as Ethereum\u2019s Marketplaces."))))))}f.isMDXComponent=!0}}]);