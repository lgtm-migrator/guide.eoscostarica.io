"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[5542],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"private-keys",title:"Private Keys",sidebar_label:"Private Keys",description:"Handling private keys in blockchain",keywords:["private keys","keys","EOSIO","EOS","EOS Costa Rica","What is a private key","What is a private key for"]},l=void 0,s={unversionedId:"eos-learn/private-keys",id:"eos-learn/private-keys",title:"Private Keys",description:"Handling private keys in blockchain",source:"@site/docs/eos-learn/private-keys.md",sourceDirName:"eos-learn",slug:"/eos-learn/private-keys",permalink:"/docs/eos-learn/private-keys",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/private-keys.md",tags:[],version:"current",frontMatter:{id:"private-keys",title:"Private Keys",sidebar_label:"Private Keys",description:"Handling private keys in blockchain",keywords:["private keys","keys","EOSIO","EOS","EOS Costa Rica","What is a private key","What is a private key for"]},sidebar:"docs",previous:{title:"Important Functions",permalink:"/docs/eos-learn/important-functions"},next:{title:"Dapp Development",permalink:"/docs/eos-learn/dapp-development"}},p={},u=[{value:"Create an Account in the Public Blockchain",id:"create-an-account-in-the-public-blockchain",level:2},{value:"Generate and Manage the Keys",id:"generate-and-manage-the-keys",level:2},{value:"Manage the Wallet",id:"manage-the-wallet",level:2},{value:"External Authenticators (Wallets)",id:"external-authenticators-wallets",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-an-account-in-the-public-blockchain"},"Create an Account in the Public Blockchain"),(0,i.kt)("p",null,"In most wallets you can generate new eosio keys, for this guide we will create keys in the terminal. let's execute the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cleos")," to generate the cryptographic keys required to create an account."),(0,i.kt)("h2",{id:"generate-and-manage-the-keys"},"Generate and Manage the Keys"),(0,i.kt)("p",null,"To generate keys, the requirement to create an account in a blockchain, let's run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cleos create key")," in the terminal. This command is going to generate private and public keys \u2014 we can create the number of keys we want. The cleos accounts, by default, come in pairs: one ",(0,i.kt)("inlineCode",{parentName:"p"},"active key")," and one ",(0,i.kt)("inlineCode",{parentName:"p"},"owner key")," (to recover the account in case of active key lost)."),(0,i.kt)("p",null,"The name of the account must comply with certain requirements: characters from A to Z in lowercase, numbers from 1 to 5 and must have 12 characters length. For this example, let's create the account: ",(0,i.kt)("inlineCode",{parentName:"p"},"hellocontract"),"."),(0,i.kt)("p",null,"Then, we introduce the public keys of ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," to execute the contract. This should be any of the ones generated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cleos create key")," command above. Is recommendable not to share the private keys."),(0,i.kt)("h2",{id:"manage-the-wallet"},"Manage the Wallet"),(0,i.kt)("p",null,"Once the account is created, we must generate the wallet and identify it with the name of the account, which in this example is ",(0,i.kt)("inlineCode",{parentName:"p"},"hellocontract"),", with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cleos wallet create -n hellocontract --to-console"),"."),(0,i.kt)("p",null,"At this moment, the keys are stored uniquely on the console, for which is necessary to create the wallet that will contain the keys. In this manner, we could access these keys with a unique password. We must import the keys in the wallet once at the time, writing the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cleos wallet import")," and adding the name of the account."),(0,i.kt)("h2",{id:"external-authenticators-wallets"},"External Authenticators (Wallets)"),(0,i.kt)("p",null,"The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications."))}d.isMDXComponent=!0}}]);