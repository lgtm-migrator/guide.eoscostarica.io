"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[8446],{1749:function(e,t,n){var a=n(5987),o=n(7462),r=n(7294),i=n(6010),s=n(5557),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var p=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,m=e.classes,p=e.className,d=e.component,g=void 0===d?"div":d,h=e.container,u=void 0!==h&&h,k=e.direction,f=void 0===k?"row":k,b=e.item,S=void 0!==b&&b,w=e.justify,v=e.justifyContent,y=void 0===v?"flex-start":v,O=e.lg,E=void 0!==O&&O,x=e.md,_=void 0!==x&&x,j=e.sm,N=void 0!==j&&j,P=e.spacing,C=void 0===P?0:P,T=e.wrap,D=void 0===T?"wrap":T,I=e.xl,M=void 0!==I&&I,L=e.xs,A=void 0!==L&&L,R=e.zeroMinWidth,B=void 0!==R&&R,W=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),Z=(0,i.Z)(m.root,p,u&&[m.container,0!==C&&m["spacing-xs-".concat(String(C))]],S&&m.item,B&&m.zeroMinWidth,"row"!==f&&m["direction-xs-".concat(String(f))],"wrap"!==D&&m["wrap-xs-".concat(String(D))],"stretch"!==l&&m["align-items-xs-".concat(String(l))],"stretch"!==s&&m["align-content-xs-".concat(String(s))],"flex-start"!==(w||y)&&m["justify-content-xs-".concat(String(w||y))],!1!==A&&m["grid-xs-".concat(String(A))],!1!==N&&m["grid-sm-".concat(String(N))],!1!==_&&m["grid-md-".concat(String(_))],!1!==E&&m["grid-lg-".concat(String(E))],!1!==M&&m["grid-xl-".concat(String(M))]);return r.createElement(g,(0,o.Z)({className:Z,ref:t},W))})),d=(0,s.Z)((function(e){return(0,o.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var o=e.spacing(a);0!==o&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(m(o,2)),width:"calc(100% + ".concat(m(o),")"),"& > $item":{padding:m(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(p);t.Z=d},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=o,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return v},eosio_networks_data:function(){return S},frontMatter:function(){return g},metadata:function(){return u},projectsData:function(){return b},toc:function(){return f}});var a=n(7462),o=n(3366),r=n(7294),i=n(3905),s=n(1749),c=n(4996),l=function(e){var t=e.projectData;return r.createElement(s.Z,{item:!0,md:4,xs:12},r.createElement(s.Z,{className:"container-border"},t.logos.map((function(e,n){return r.createElement(s.Z,{container:!0,key:n,alignItems:"center",justifyContent:"center"},r.createElement("a",{href:e.link},r.createElement("img",{className:"logo",src:(0,c.Z)(e.image),loading:"lazy",alt:t.name+" logo"})))})),r.createElement(s.Z,{container:!0,spacing:1,alignItems:"center",justifyContent:"center"},t.images.map((function(e,n){var a;return r.createElement(r.Fragment,null,r.createElement(s.Z,{item:!0,xs:6,md:6},r.createElement("a",{href:e.link,id:n},r.createElement("img",{className:null!=(a=e.class)?a:"",src:(0,c.Z)(e.image),loading:"lazy",height:"60%",alt:t.name+" screenshot preview "+(n+1)}))),r.createElement("a",{href:t.href,className:"lightbox",id:e.id},r.createElement("img",{className:"box-img",src:(0,c.Z)(e.image),loading:"lazy",alt:t.name+" screenshot fullsize "+(n+1)})))})))))},m=function(e){var t=e.projectData;return r.createElement(r.Fragment,null,t.website&&t.website.map((function(e,n){var a;return r.createElement("ul",{key:n},r.createElement("li",null,r.createElement("p",null,r.createElement("strong",null,null!=(a=e.title)?a:"Website",": "),e.image?r.createElement("a",{href:e.link},r.createElement("img",{src:e.image,width:"9%",alt:t.name+" website icon",loading:"lazy"})):r.createElement("a",{href:e.link},e.name))))})),t.github&&t.github.map((function(e,n){var a;return r.createElement("ul",{key:n},r.createElement("li",null,r.createElement("p",null,r.createElement("strong",null,"GitHub: "),r.createElement("a",{href:e.link},r.createElement("img",{src:null!=(a=e.image)?a:"https://cdn-icons-png.flaticon.com/32/25/25231.png",loading:"lazy",width:"32px",height:"32px",alt:"Link to "+t.name+" Github repository"})))))})))},p=function(e){var t,n=e.projectData,a=(null==(t=n.images)?void 0:t.length)>0;return r.createElement(s.Z,{container:!0},r.createElement(s.Z,{item:!0,md:a?8:12,xs:12},r.createElement(s.Z,{className:"content"},n.description&&n.description.map((function(e,t){return r.createElement("p",{key:t},e)})),r.createElement(m,{projectData:n}))),a&&n.logos&&r.createElement(l,{projectData:n}))},d=["components"],g={id:"open-source-projects",title:"Open Source Projects",sidebar_label:"Open Source Projects",description:"Open Source projects developed by EOS Costa Rica",keywords:["Open Source Projects Edenia","What is a Open Source Project","EOS Costa Rica Projects"]},h=void 0,u={unversionedId:"open-source-projects",id:"open-source-projects",title:"Open Source Projects",description:"Open Source projects developed by EOS Costa Rica",source:"@site/docs/open-source-projects.mdx",sourceDirName:".",slug:"/open-source-projects",permalink:"/docs/open-source-projects",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/open-source-projects.mdx",tags:[],version:"current",frontMatter:{id:"open-source-projects",title:"Open Source Projects",sidebar_label:"Open Source Projects",description:"Open Source projects developed by EOS Costa Rica",keywords:["Open Source Projects Edenia","What is a Open Source Project","EOS Costa Rica Projects"]},sidebar:"docs",previous:{title:"UX / UI Design",permalink:"/docs/developer-tools-ux-ui"},next:{title:"Project Boilerplate",permalink:"/docs/boilerplate"}},k={},f=[{value:"Community Projects",id:"community-projects",level:2},{value:"EOSIO Dashboard",id:"eosio-dashboard",level:3},{value:"EOS Rate",id:"eos-rate",level:3},{value:"Proton Affiliate Program",id:"proton-affiliate-program",level:3},{value:"Libre Dao Smart Contracts",id:"libre-dao-smart-contracts",level:3},{value:"LACChain EOSIO Testnet",id:"lacchain-eosio-testnet",level:3},{value:"Evodex",id:"evodex",level:3},{value:"MyvoteEOS Proxy Website",id:"myvoteeos-proxy-website",level:3},{value:"Eden Smart Contracts",id:"eden-smart-contracts",level:3},{value:"EOS Token Sale Platform",id:"eos-token-sale-platform",level:3},{value:"EOS Token Sale Contract",id:"eos-token-sale-contract",level:3},{value:"Tools",id:"tools",level:2},{value:"Eden Members Check",id:"eden-members-check",level:3},{value:"Digital Notary Smart Contract",id:"digital-notary-smart-contract",level:3},{value:"Local Development Environments",id:"local-development-environments",level:3},{value:"EOSIO Network Bootstrap",id:"eosio-network-bootstrap",level:3},{value:"Sample Nodeos Configurations",id:"sample-nodeos-configurations",level:3},{value:"Boilerplates",id:"boilerplates",level:2},{value:"React Components for EOSIO",id:"react-components-for-eosio",level:2},{value:"Proof of Payment of Municipal Taxes",id:"proof-of-payment-of-municipal-taxes",level:2},{value:"EOSIO Hackathons",id:"eosio-hackathons",level:2},{value:"LifeBank",id:"lifebank",level:3},{value:"gGoods",id:"ggoods",level:3},{value:"NPM Packages",id:"npm-packages",level:2}],b=[{name:"EOSIO Dashboard",description:["An EOSIO Infrastructure monitor and node dashboard."],href:"#eosio-dashboard",website:[{link:"https://eosio.online/",name:"EOSIO Dashboard"}],github:[{link:"https://github.com/eoscostarica/eosio-dashboard",image:"https://cdn-icons-png.flaticon.com/32/25/25231.png"}],logos:[{image:"https://eosio.online/images/d-logo.svg",link:"https://eosio.online/"}],images:[{image:"img/OSS_screnshots/EOSIO_Network_monitor.webp",link:"#screen-eos-1",id:"screen-eos-1"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_2.webp",link:"#screen-eos-2",id:"screen-eos-2"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_3.webp",link:"#screen-eos-3",id:"screen-eos-3"},{image:"img/OSS_screnshots/EOSIO_Network_monitor_4.webp",link:"#screen-eos-4",id:"screen-eos-4"}]},{name:"EOS Rate",description:["EOS Rate is an open-source dApp that allows EOS token holders to rate Block Producers (BPs) in just a few clicks. Users can access a rating system and voting portal, making it easier for token holders to make an informed decision."],href:"#eos-rate",website:[{link:"https://eosrate.io/",name:"EOS Rate"}],github:[{link:"https://github.com/eoscostarica/eos-rate"}],logos:[{image:"/img/eosrate-logo.webp",link:"https://eosrate.io/"}],images:[{image:"img/OSS_screnshots/EOS_Rate.webp",link:"#screen-rate-1",id:"screen-rate-1"},{image:"img/OSS_screnshots/EOS_Rate_2.webp",link:"#screen-rate-2",id:"screen-rate-2"}]},{name:"Proton Affiliate Program",description:["Edenia, also known as EOS Costa Rica , is glad to announce our strategic collaboration with the team of Proton, a blockchain developed by Metallicus. Proton was built to streamline on-chain payments processing, adding governance, network resources allocation, and rewards staking. For the past few months, our team has been working on an Affiliate Program (AP) feature for the Proton wallet, which launched in the beta stage for selected countries."],href:"#proton-affiliate-program",website:[{link:"https://www.protonchain.com/",image:"/img/proton.webp"},{title:"Project Announcement",link:"https://eoscostarica.io/blog/proton-announcement/",name:"Proton Affiliate Program"}],logos:[{image:"img/OSS_screnshots/Proton_Program_Logo.webp",link:"https://www.protonchain.com/"}],images:[{image:"img/OSS_screnshots/Proton_Program.webp",link:"#screen-proton-1",id:"screen-proton-1"},{image:"img/OSS_screnshots/Proton_Program_2.webp",link:"#screen-proton-2",id:"screen-proton-2"},{image:"img/OSS_screnshots/Proton_Program_3.webp",link:"#screen-proton-3",id:"screen-proton-3"},{image:"img/OSS_screnshots/Proton_Program_4.webp",link:"#screen-proton-4",id:"screen-proton-4"}]},{name:"Libre Dao Smart Contracts",description:["The system works as a decentralized voting mechanism set up in the rules governing the blockchain, where budgets for specific projects are proposed and funded once they receive sufficient votes from token holders."],href:"#libre-dao-smart-contracts",website:[{link:"https://dao.libre.org/",name:"Libre Dao Smart Contracts"}],github:[{link:"https://github.com/eoscostarica/btc-libre-governance"}],logos:[{image:"img/OSS_screnshots/Libre_Dao_Smart_Contracts.webp",link:"https://dao.libre.org/"}],images:[{image:"img/OSS_screnshots/Bitcoin_Libre.webp",link:"#screen-dao-1",id:"screen-dao-1"},{image:"img/OSS_screnshots/Bitcoin_Libre_2.webp",link:"#screen-dao-2",id:"screen-dao-2"}]},{name:"LACChain EOSIO",description:["We are part of LACChain EOSIO, an open-source initiative that offers an EOSIO blockchain network that integrates into LACChain."],href:"#lacchain-eosio-testnet",website:[{link:"https://eosio.lacchain.net/en/",name:"LACChain EOSIO"}],github:[{link:"https://github.com/lacchain/eosio.lacchain.net"}],logos:[{image:"/img/lacchain-eosio.webp",link:"https://eosio.lacchain.net/en/"}],images:[{image:"img/OSS_screnshots/Lacchain_EOSIO.webp",link:"#screen-chain-1",id:"screen-chain-1"},{image:"img/OSS_screnshots/Lacchain_EOSIO_2.webp",link:"#screen-chain-2",id:"screen-chain-2"},{image:"img/OSS_screnshots/Lacchain_EOSIO_3.webp",link:"#screen-chain-3",id:"screen-chain-3"},{image:"img/OSS_screnshots/Lacchain_EOSIO_4.webp",link:"#screen-chain-4",id:"screen-chain-4"}]},{name:"Evodex",description:["Evolution DEX is a Protocol created by EOS Argentina that allows anyone to create and launch their own trading pairs in a decentralized exchange and gain trading fees by adding liquidity to the token\u2019s pool. EOS Costa Rica is working with EOS Argentina creating a web interface that will provide access to liquidity amongst all exchanges that connect to Evolution DEX."],href:"#evodex",website:[{link:"https://evodex.io",name:"Evodex"}],github:[{link:"https://github.com/eoscostarica/evodex"}],logos:[{image:"/img/evodex-logo.webp",link:"https://evodex.io"}],images:[{image:"img/OSS_screnshots/Evodex.webp",link:"#screen-evodex-1",id:"screen-evodex-1"},{image:"img/OSS_screnshots/Evodex_2.webp",link:"#screen-evodex-2",id:"screen-evodex-2"},{image:"img/OSS_screnshots/Evodex_3.webp",link:"#screen-evodex-3",id:"screen-evodex-3"},{image:"img/OSS_screnshots/Evodex_4.webp",link:"#screen-evodex-4",id:"screen-evodex-4"}]},{name:"React Components for EOSIO",description:["A collection of React components for the EOSIO developer community."],href:"#react-components-for-eosio",website:[{link:"https://components.edenia.cloud",name:"React Components"}],github:[{link:"https://github.com/eoscostarica/eoscr-components"}],logos:[{image:"/img/React_logo.webp",link:"https://components.edenia.cloud/"}],images:[{image:"img/OSS_screnshots/React_EOS.webp",link:"#screen-react-1",id:"screen-react-1"},{image:"img/OSS_screnshots/React_EOS_2.webp",link:"#screen-react-2",id:"screen-react-2"},{image:"img/OSS_screnshots/React_EOS_3.webp",link:"#screen-react-3",id:"screen-react-3"},{image:"img/OSS_screnshots/React_EOS_4.webp",link:"#screen-react-4",id:"screen-react-4"}]},{name:"LifeBank",description:["Lifebank is an EOSIO-based dapp that helps local communities create a virtuous circle of value exchange between three parties \u2014 eligible life donors, community donation centers, and participating local businesses (sponsors).","Lifebank is an initiative of EOS Costa Rica, a company that develops blockchain-based solutions to solve real-world problems. Lifebank is our entry to the Coding for Change challenge organized by leading blockchain company, Block.one."],href:"#lifebank",website:[{link:"https://lifebank.io/",name:"LifeBank"}],github:[{link:"https://github.com/eoscostarica/lifebank",image:"https://cdn-icons-png.flaticon.com/32/25/25231.png"}],logos:[{image:"/img/life-bank-logo.webp",link:"https://lifebank.io/"}],images:[{image:"img/OSS_screnshots/LifeBank.webp",link:"#screen-lifebank-1",id:"screen-lifebank-1"},{image:"img/OSS_screnshots/LifeBank_2.webp",link:"#screen-lifebank-2",id:"screen-lifebank-2"},{image:"img/OSS_screnshots/LifeBank_3.webp",link:"#screen-lifebank-3",id:"screen-lifebank-3"},{image:"img/OSS_screnshots/LifeBank_4.webp",link:"#screen-lifebank-4",id:"screen-lifebank-4"}]},{name:"gGoods",description:["gGoods is an open-source NFT standard that enables organizations and communities to create their own NFTs to raise funds. Creating an NFT is easy and straightforward using our avatar creator. The NFTs are then purchased by donors as collectibles that not only support a cause but can be integrated into countless applications such as games, emojis, chat stickers, avatars etc."],href:"#ggoods",website:[{link:"https://ggoods.io/",name:"gGoods"}],github:[{link:"https://github.com/eoscostarica/gGoods"}],logos:[{image:"https://raw.githubusercontent.com/eoscostarica/gGoods/main/docs/ggoods-logo.svg",link:"https://ggoods.io/"}],images:[{image:"/img/OSS_screnshots/gGoods.webp",link:"#screen-ggoods-1",id:"screen-ggoods-1"},{image:"/img/OSS_screnshots/gGoods_2.webp",link:"#screen-ggoods-2",id:"screen-ggoods-2"},{image:"/img/OSS_screnshots/gGoods_3.webp",link:"#screen-ggoods-3",id:"screen-ggoods-3"},{image:"/img/OSS_screnshots/gGoods_4.webp",link:"#screen-ggoods-4",id:"screen-ggoods-4"}]},{name:"MyvoteEOS Proxy Website",description:["The EOS based proxy facilitates the transition into a truly democratic based chain that is free from Pareto control by voting for BP\u2019s that do not engage with direct vote rebate."],href:"#myvoteeos-proxy-website",website:[{link:"https://myvoteeos.com/home",name:"MyvoteEOS"}],github:[{link:"https://github.com/eoscostarica/MyvoteEOS-proxy"}],logos:[{image:"/img/my-vote-eos-logo.webp",link:"https://myvoteeos.com/home"}],images:[{image:"/img/OSS_screnshots/MyvoteEOS.webp",link:"#screen-MyvoteEOS-1",id:"screen-MyvoteEOS-1"},{image:"/img/OSS_screnshots/MyvoteEOS_2.webp",link:"#screen-MyvoteEOS-2",id:"screen-MyvoteEOS-2"},{image:"/img/OSS_screnshots/MyvoteEOS_3.webp",link:"#screen-MyvoteEOS-3",id:"screen-MyvoteEOS-3"},{image:"/img/OSS_screnshots/MyvoteEOS_4.webp",link:"#screen-MyvoteEOS-4",id:"screen-MyvoteEOS-4"}]},{name:"EOS Token Sale Contract",description:["EOStarter is developing a Token Sale Smart Contract system that allows for the crowd-sourcing of projects through a token sale that can be configured with different parameters like staking capabilities, whitelisting requirements, token vesting, etc."],href:"#eos-tokensale-contracts",github:[{link:"https://github.com/eostarter/eostarter.sale-smart-contract"}]},{name:"Eden Smart Contracts",description:["Updates and Maintenance to Eden Community Web App and Smart Contracts."],href:"#eden-smart-contracts",website:[{link:"https://eden-dev.vercel.app/",name:"Eden Smart Contracts"}],github:[{link:"https://github.com/edenia/Eden"}],logos:[{image:"https://raw.githubusercontent.com/edenia/Eden/master/packages/webapp/public/images/eden-logo.svg",link:"https://eden-dev.vercel.app/"}],images:[{image:"/img/OSS_screnshots/Eden.webp",link:"#screen-Eden-1",id:"screen-Eden-1"},{image:"/img/OSS_screnshots/Eden_2.webp",link:"#screen-Eden-2",id:"screen-Eden-2"},{image:"/img/OSS_screnshots/Eden_3.webp",link:"#screen-Eden-3",id:"screen-Eden-3"}]},{name:"EOS Token Sale Platform",description:["A decentralized Token Sale platform, which allows users to set up a token sale, determine the token sale parameters, and deploy their sale onto the EOS Mainnet."],href:"#eos-token-sale-platform",website:[{link:"https://tokensale.edenia.cloud",name:"EOS Token Sale Platform"}],github:[{link:"https://github.com/eostarter/token-sale-platform"}],logos:[{image:"https://raw.githubusercontent.com/eostarter/token-sale-platform/master/docs/img/logo-words.png",link:"https://tokensale.edenia.cloud"}],images:[{image:"/img/OSS_screnshots/Token_Sale_Platform.webp",link:"#screen-Token_Sale_Platform-1",id:"screen-Token_Sale_Platform-1"},{image:"/img/OSS_screnshots/Token_Sale_Platform_2.webp",link:"#screen-Token_Sale_Platform-2",id:"screen-Token_Sale_Platform-2"},{image:"/img/OSS_screnshots/Token_Sale_Platform_3.webp",link:"#screen-Token_Sale_Platform-3",id:"screen-Token_Sale_Platform-3"}]},{name:"Proof of Payment of Municipal Taxes",description:["The generator of municipal certificates is a web application that allows allows taxpayers of Costa Rican Local Governments to obtain a digital document in which you can see the municipal tax payments of the properties in your name. This document is digitally signed by the institution that issues the document, so it is official and valid for use in different institutions in Costa Rica."],href:"#proof-of-payment-municipal",github:[{link:"https://github.com/edenia/constancias-municipales"}]},{name:"Eden Members Check",description:["This project provides a quick way to get started integrating the logic to validate if an EOS account is an active Eden Member. It is meant to be used as an example to help other projects integrate features for eden members."],github:[{link:"https://github.com/eoscostarica/eden-member-check"}]},{name:"Sample Nodeos Configurations",description:["Example configurations for different EOSIO node types"],github:[{link:"https://github.com/eoscostarica/sample-nodeos-configs"}]},{name:"EOSIO Network Bootstrap",description:['This collection of scripts launches a local EOSIO network with multiple node configurations. There is also an automated boot sequence that utilizes a temporary "bios" node to launch the chain, deploy system contracts and set a schedule with three active block producer nodes.',"This project can be useful as a development environment for system contracts."],github:[{link:"https://github.com/eoscostarica/eosio-network-bootstrap"}]},{name:"Digital Notary Smart Contract",description:["This smart contract serves as a tool for any user who wishes to register the existence of digital documents (texts / images) at a certain moment in time.","It also allows anyone who owns the document to validate the record on the blockchain."],website:[{link:"https://notarize.edenia.cloud/dashboard/notary",name:"Digital Notary Smart Contract"}],github:[{link:"https://github.com/eoscostarica/notarioeoscr"}]}],S=[{name:"EOS Mainnet",href:"https://mainnet.eosio.online",image:"/img/eos.webp"},{name:"Jungle Testnet",href:"https://jungle.eosio.online",image:"/img/jungle.webp"},{name:"Proton Testnet",href:"https://proton.eosio.online",image:"/img/proton.webp"},{name:"LACChain EOSIO",href:"https://lacchain.eosio.online",image:"/img/lacchain.webp"},{name:"Telos Testnet",href:"https://telos.eosio.online/",image:"/img/telos.webp"}],w={toc:f,projectsData:b,eosio_networks_data:S};function v(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"community-projects"},"Community Projects"),(0,i.kt)("p",null," The following projects have been developed for the eosio community."),(0,i.kt)("h3",{id:"eosio-dashboard"},"EOSIO Dashboard"),(0,i.kt)(s.Z,{container:!0,mdxType:"Grid"},(0,i.kt)(s.Z,{item:!0,md:8,xs:12,mdxType:"Grid"},(0,i.kt)(s.Z,{className:"content",mdxType:"Grid"},(0,i.kt)("p",null,b[0].description),(0,i.kt)(m,{projectData:b[0],mdxType:"DisplayLinks"})),(0,i.kt)(s.Z,{className:"table-container",mdxType:"Grid"},(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,S.map((function(e,t){return(0,i.kt)("th",null,e.name)}))),(0,i.kt)("tr",null,S.map((function(e,t){return(0,i.kt)("td",null,(0,i.kt)("a",{href:e.href},(0,i.kt)("img",{src:e.image,width:"32px",height:"32px",alt:e.name+" logo"})))}))))))),(0,i.kt)(l,{projectData:b[0],mdxType:"DisplayImages"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-rate"},"EOS Rate"),(0,i.kt)(p,{projectData:b[1],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"proton-affiliate-program"},"Proton Affiliate Program"),(0,i.kt)(s.Z,{container:!0,mdxType:"Grid"},(0,i.kt)(s.Z,{item:!0,md:8,xs:12,mdxType:"Grid"},(0,i.kt)(s.Z,{className:"content",mdxType:"Grid"},(0,i.kt)("p",null,"Edenia, also known as ",(0,i.kt)("a",{href:"https://eoscostarica.io/"},"EOS Costa Rica"),", is glad to announce our strategic collaboration with the team of Proton, a blockchain developed by Metallicus. ",(0,i.kt)("a",{href:"https://www.protonchain.com/"},"Proton")," was built to streamline on-chain payments processing, adding governance, network resources allocation, and rewards staking."),(0,i.kt)("p",null,"For the past few months, our team has been working on an Affiliate Program (AP) feature for the ",(0,i.kt)("a",{href:"https://www.protonchain.com/wallet/"},"Proton wallet"),", which launched in the beta stage for selected countries."),(0,i.kt)(m,{projectData:b[2],mdxType:"DisplayLinks"}))),(0,i.kt)(l,{projectData:b[2],mdxType:"DisplayImages"})),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"libre-dao-smart-contracts"},"Libre Dao Smart Contracts"),(0,i.kt)(p,{projectData:b[3],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lacchain-eosio-testnet"},"LACChain EOSIO Testnet"),(0,i.kt)(p,{projectData:b[4],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"evodex"},"Evodex"),(0,i.kt)(p,{projectData:b[5],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"myvoteeos-proxy-website"},"MyvoteEOS Proxy Website"),(0,i.kt)(p,{projectData:b[9],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eden-smart-contracts"},"Eden Smart Contracts"),(0,i.kt)(p,{projectData:b[10],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-token-sale-platform"},"EOS Token Sale Platform"),(0,i.kt)(p,{projectData:b[11],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eos-token-sale-contract"},"EOS Token Sale Contract"),(0,i.kt)(p,{projectData:b[12],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("h3",{id:"eden-members-check"},"Eden Members Check"),(0,i.kt)(p,{projectData:b[14],mdxType:"ProjectContainer"}),(0,i.kt)("h3",{id:"digital-notary-smart-contract"},"Digital Notary Smart Contract"),(0,i.kt)(p,{projectData:b[17],mdxType:"ProjectContainer"}),(0,i.kt)("h3",{id:"local-development-environments"},"Local Development Environments"),(0,i.kt)("p",null,"EOS Costa Rica offers a wide variety of local development environments for the EOSIO developer community."),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Local Development Environments"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eos-local"},"EOS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Docker-based EOS Local Network for Development")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/telos-local"},"Telos")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Docker-based Telos Network for Development")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/proton-local"},"Proton")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Docker-based Proton Network for Development")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-local"},"Wax")),(0,i.kt)("td",{parentName:"tr",align:"center"},"WAX Local Development Environment Docker Image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eosio-explorer"},"EOSIO Explorer")),(0,i.kt)("td",{parentName:"tr",align:"center"},"An application providing Web GUI to communicate with EOSIO blockchain in a local development environment"))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eosio-network-bootstrap"},"EOSIO Network Bootstrap"),(0,i.kt)(p,{projectData:b[16],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sample-nodeos-configurations"},"Sample Nodeos Configurations"),(0,i.kt)(p,{projectData:b[15],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"boilerplates"},"Boilerplates"),(0,i.kt)("p",null," EOS Costa Rica offers a wide variety of boilerplates for the developer community."),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Boilerplates"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/full-stack-boilerplate"},"Full Stack")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A fullstack project template to easily launch your project on EOSIO.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-webapp-boilerplate"},"Wax Webapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A bare-bones react web app featuring WAX authenticators (wallets).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/wax-full-stack-boilerplate"},"Wax")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A full-stack project template to easily launch your project on Wax.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/proton-full-stack-boilerplate"},"Proton")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A full-stack project template to easily launch your project on Proton.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/webapp-boilerplate"},"Webapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A bare-bones react web app featuring UAL for EOSIO authenticators (wallets).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/ipfs-boilerplate"},"IPFS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A repository to help you get started integrating IPFS into your project.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/backend-boilerplate"},"Backend")),(0,i.kt)("td",{parentName:"tr",align:"center"},"NodeJS Backend + Hasura + PGDB with EOSJS and KEOSD wallet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/eoscostarica/eos-dapp-boilerplate"},"EOS dapp")),(0,i.kt)("td",{parentName:"tr",align:"center"},"EOSIO Application Boilerplates."))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"react-components-for-eosio"},"React Components for EOSIO"),(0,i.kt)(p,{projectData:b[6],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"proof-of-payment-of-municipal-taxes"},"Proof of Payment of Municipal Taxes"),(0,i.kt)(p,{projectData:b[13],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),(0,i.kt)("h3",{id:"lifebank"},"LifeBank"),(0,i.kt)(p,{projectData:b[7],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ggoods"},"gGoods"),(0,i.kt)(p,{projectData:b[8],mdxType:"ProjectContainer"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"npm-packages"},"NPM Packages"),(0,i.kt)("div",{className:"table-wrapper",markdown:"block",style:{overflow:"scroll",height:"200px"}},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Packages"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},"Components")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A collection of React Components for EOSIO")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},"Standard Theme")),(0,i.kt)("td",{parentName:"tr",align:"center"},"EOS Costa Rica standard theme allows us to speed up the development of our web apps and at the same time it's available for anyone who will want to use it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},"API module")),(0,i.kt)("td",{parentName:"tr",align:"center"},"This project wraps the official eosio/eosjs-api to provide camelcase output")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/fastify-eos"},"Fastify EOS")),(0,i.kt)("td",{parentName:"tr",align:"center"},"A plugin that decorates Fastify with an EOS.js instance"))))))}v.isMDXComponent=!0}}]);