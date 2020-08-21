(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{105:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},c=Object.keys(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)a=c[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),m=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=m(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,c=t.originalType,o=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=m(a),u=n,b=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(b,s(s({ref:e},l),{},{components:a})):r.a.createElement(b,s({ref:e},l))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var c=a.length,o=new Array(c);o[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return s})),a.d(e,"rightToc",(function(){return i})),a.d(e,"default",(function(){return m}));var n=a(2),r=a(6),c=(a(0),a(105)),o={id:"smart-contract",title:"Smart Contracts",sidebar_label:"Smart Contracts"},s={unversionedId:"eos-learn/smart-contract",id:"eos-learn/smart-contract",isDocsHomePage:!1,title:"Smart Contracts",description:'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).',source:"@site/docs/eos-learn/smart-contracts.md",permalink:"/docs/eos-learn/smart-contract",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/smart-contracts.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1598030553,sidebar_label:"Smart Contracts",sidebar:"docs",previous:{title:"EOS Blockchain",permalink:"/docs/eos-learn/eos-blockchain"},next:{title:"Ricardian contracts",permalink:"/docs/eos-learn/ricardian-contracts"}},i=[{value:"Smart Contract Design Framework",id:"smart-contract-design-framework",children:[{value:"Process Steps",id:"process-steps",children:[]},{value:"Data Model",id:"data-model",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Pre- and Post-Conditions",id:"pre--and-post-conditions",children:[]}]},{value:"Open Source Smart Contracts",id:"open-source-smart-contracts",children:[]},{value:"Basic smart contract scheme",id:"basic-smart-contract-scheme",children:[]}],l={rightToc:i};function m(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,'A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).'),Object(c.b)("p",null,'An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.'),Object(c.b)("p",null,"Read More : ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://guide.eoscostarica.io/docs/tutorials/modern-cpp"}),"https://guide.eoscostarica.io/docs/tutorials/modern-cpp")),Object(c.b)("h2",{id:"smart-contract-design-framework"},"Smart Contract Design Framework"),Object(c.b)("p",null,"Digital Scarcity's ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/digital-scarcity/equiprental"}),"github repo")," has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items."),Object(c.b)("h3",{id:"process-steps"},"Process Steps"),Object(c.b)("p",null,"Here are the general steps to developing a smart contract.\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/steps.png",alt:"alt text",title:"Steps"}))),Object(c.b)("h3",{id:"data-model"},"Data Model"),Object(c.b)("p",null,"Define the data that will be persisted in the smart contract\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/datamodel.png",alt:"alt text",title:"Data Model"}))),Object(c.b)("h3",{id:"actions"},"Actions"),Object(c.b)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/actions.png",alt:"alt text",title:"Actions"}))),Object(c.b)("h3",{id:"pre--and-post-conditions"},"Pre- and Post-Conditions"),Object(c.b)("p",null,"Define the actions, or state changes, that must exist in your smart contract\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/contracts/prepostconditions.png",alt:"alt text",title:"Pre- and Post-Conditions"}))),Object(c.b)("h2",{id:"open-source-smart-contracts"},"Open Source Smart Contracts"),Object(c.b)("p",null,"We maintain a list of open source EOS Smart Contracts in the following repo:"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eoscostarica/eos-contracts"}),"https://github.com/eoscostarica/eos-contracts")),Object(c.b)("p",null,"Also check out this list of open source contracts for EOSIO maintained by C\xe9sar Rodr\xedguez :"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kesar/eos-awesome-contracts"}),"https://github.com/kesar/eos-awesome-contracts")),Object(c.b)("h2",{id:"basic-smart-contract-scheme"},"Basic smart contract scheme"),Object(c.b)("figure",{class:"video_container"},Object(c.b)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/EbWDHrm2ETY",frameborder:"0",allowfullscreen:"true"}," ")),Object(c.b)("p",null,"You can see more on this channel: ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/user/grandmoren1/videos"}),"https://www.youtube.com/user/grandmoren1/videos")))}m.isMDXComponent=!0}}]);