"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[3788],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6844:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"accounts-and-permissions",title:"Accounts And Permissions",sidebar_label:"Accounts And Permissions"},c=void 0,l={unversionedId:"eos-learn/accounts-and-permissions",id:"eos-learn/accounts-and-permissions",title:"Accounts And Permissions",description:"Accounts",source:"@site/docs/eos-learn/accounts-and-permissions.md",sourceDirName:"eos-learn",slug:"/eos-learn/accounts-and-permissions",permalink:"/docs/eos-learn/accounts-and-permissions",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/accounts-and-permissions.md",tags:[],version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1641584377,formattedLastUpdatedAt:"1/7/2022",frontMatter:{id:"accounts-and-permissions",title:"Accounts And Permissions",sidebar_label:"Accounts And Permissions"},sidebar:"docs",previous:{title:"EOSIO Components",permalink:"/docs/eos-learn/eosio-components"},next:{title:"Important Functions",permalink:"/docs/eos-learn/important-functions"}},u=[{value:"Accounts",id:"accounts",children:[],level:2},{value:"Permissions",id:"permissions",children:[],level:2},{value:"Authorizations",id:"authorizations",children:[],level:2},{value:"Authenticators (Wallets)",id:"authenticators-wallets",children:[],level:2},{value:"Transit Wallet Access Layer",id:"transit-wallet-access-layer",children:[],level:2},{value:"Universal Authenticator Library",id:"universal-authenticator-library",children:[{value:"Available Authenticators:",id:"available-authenticators",children:[],level:3}],level:2},{value:"KEOSD",id:"keosd",children:[],level:2},{value:"EOSIO Permissions",id:"eosio-permissions",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"account")," on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain."),(0,r.kt)("p",null,"The account name must comply with certain requirements: characters from ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," in lower case, numbers from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," and have 12 characters length. E. g. ",(0,r.kt)("inlineCode",{parentName:"p"},"eosioaccount"),"."),(0,r.kt)("p",null,"Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosjs/latest/how-to-guides/how-to-create-an-account"},"EOSIO account creation"),"."),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"For example:")," Any account can create a custom permission with its unique key pair to solely interact with a single contract.")),(0,r.kt)("p",null,"In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol."),(0,r.kt)("p",null,"Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute."),(0,r.kt)("h2",{id:"authorizations"},"Authorizations"),(0,r.kt)("p",null,"Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain."),(0,r.kt)("p",null,"In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied"),(0,r.kt)("p",null,"To get more information about these concepts, see ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol-guides/accounts_and_permissions"},"accounts and permissions documentation"),"."),(0,r.kt)("h2",{id:"authenticators-wallets"},"Authenticators (Wallets)"),(0,r.kt)("p",null,"The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password."),(0,r.kt)("h2",{id:"transit-wallet-access-layer"},"Transit Wallet Access Layer"),(0,r.kt)("p",null,"This library is a small abstraction layer on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"eosjs")," which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API."),(0,r.kt)("p",null,"Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up ",(0,r.kt)("inlineCode",{parentName:"p"},"eosjs")," and wallet connections."),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("strong",{parentName:"p"},"Quick Start guide")," and thorough guide in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eosnewyork/eos-transit"},"eos-transit")," package docs."),(0,r.kt)("h2",{id:"universal-authenticator-library"},"Universal Authenticator Library"),(0,r.kt)("p",null,"A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API."),(0,r.kt)("h3",{id:"available-authenticators"},"Available Authenticators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),(0,r.kt)("h2",{id:"keosd"},"KEOSD"),(0,r.kt)("p",null,"In the EOSIO's distribution comes included a CLI client called ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," that interacts with lite client called ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider."),(0,r.kt)("h2",{id:"eosio-permissions"},"EOSIO Permissions"),(0,r.kt)("p",null,"EOSIO's permissions make it possible to strengthen account security to the point where the loss or theft of keys is nothing more than minor inconveniences. This weekly EOS episode covers what EOSIO permissions are on a conceptual level and the trend towards strong interconnected account networks."),(0,r.kt)("figure",{class:"video_container"},(0,r.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}d.isMDXComponent=!0}}]);