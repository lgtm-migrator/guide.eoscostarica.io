"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[2900],{3905:function(e,i,r){r.d(i,{Zo:function(){return p},kt:function(){return f}});var t=r(7294);function o(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function a(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?a(Object(r),!0).forEach((function(i){o(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}function n(e,i){if(null==e)return{};var r,t,o=function(e,i){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],i.indexOf(r)>=0||(o[r]=e[r]);return o}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var i=t.useContext(l),r=i;return e&&(r="function"==typeof e?e(i):s(s({},i),e)),r},p=function(e){var i=d(e.components);return t.createElement(l.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,v=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return r?t.createElement(v,s(s({ref:i},p),{},{components:r})):t.createElement(v,s({ref:i},p))}));function f(e,i){var r=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var n={};for(var l in i)hasOwnProperty.call(i,l)&&(n[l]=i[l]);n.originalType=e,n.mdxType="string"==typeof e?e:o,s[1]=n;for(var d=2;d<a;d++)s[d]=r[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4814:function(e,i,r){r.r(i),r.d(i,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],n={id:"eosio-sdk-libraries",title:"EOSIO SDK Libraries",sidebar_label:"EOSIO SDK Libraries"},l=void 0,d={unversionedId:"tools/eosio-sdk-libraries",id:"tools/eosio-sdk-libraries",title:"EOSIO SDK Libraries",description:"SDKs for EOSIO",source:"@site/docs/tools/eosio-sdk-libraries.md",sourceDirName:"tools",slug:"/tools/eosio-sdk-libraries",permalink:"/docs/tools/eosio-sdk-libraries",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/eosio-sdk-libraries.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656451092,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"eosio-sdk-libraries",title:"EOSIO SDK Libraries",sidebar_label:"EOSIO SDK Libraries"},sidebar:"docs",previous:{title:"Block Explorers",permalink:"/docs/tools/block-explorers"},next:{title:"Readme File Template",permalink:"/docs/tools/readme-file-template"}},p=[{value:"SDKs for EOSIO",id:"sdks-for-eosio",children:[],level:2},{value:"JavaScript SDK",id:"javascript-sdk",children:[{value:"eosjs",id:"eosjs",children:[],level:3},{value:"eosjs-keygen",id:"eosjs-keygen",children:[],level:3}],level:2},{value:"Swift SDK",id:"swift-sdk",children:[{value:"eosio-swift",id:"eosio-swift",children:[],level:3},{value:"eosio-swift-abieos-serialization-provider",id:"eosio-swift-abieos-serialization-provider",children:[],level:3},{value:"eosio-swift-ecc",id:"eosio-swift-ecc",children:[],level:3},{value:"eosio-swift-reference-ios-authenticator-signature-provider",id:"eosio-swift-reference-ios-authenticator-signature-provider",children:[],level:3},{value:"eosio-swift-softkey-signature-provider",id:"eosio-swift-softkey-signature-provider",children:[],level:3},{value:"eosio-swift-vault-signature-provider",id:"eosio-swift-vault-signature-provider",children:[],level:3},{value:"eosio-swift-vault",id:"eosio-swift-vault",children:[],level:3}],level:2},{value:"Java SDK",id:"java-sdk",children:[{value:"eosio-java-android-abieos-serialization-provider",id:"eosio-java-android-abieos-serialization-provider",children:[],level:3},{value:"eosio-java-android-rpc-provider",id:"eosio-java-android-rpc-provider",children:[],level:3},{value:"eosio-java-softkey-signature-provider",id:"eosio-java-softkey-signature-provider",children:[],level:3},{value:"eosio-android-keystore-signature-provider",id:"eosio-android-keystore-signature-provider",children:[],level:3}],level:2}],c={toc:p};function u(e){var i=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"sdks-for-eosio"},"SDKs for EOSIO"),(0,a.kt)("p",null,"APIs for integrating with EOSIO blockchains."),(0,a.kt)("h2",{id:"javascript-sdk"},"JavaScript SDK"),(0,a.kt)("p",null,"EOSJS is a JavaScript library for the integration with EOSIO based blockchains using EOSIO's RPC API. This library was created to provide a JavaScript interface for the interaction between web applications for the final user and EOSIO blockchains. As this develops a significant amount of applications in JavaScript, this library is designed to provide a higher support to the ecosystem in general and establishes the better practices in the industry for the interaction of the web applications with EOSIO blockchains."),(0,a.kt)("h3",{id:"eosjs"},(0,a.kt)("a",{parentName:"h3",href:"https://developers.eos.io/manuals/eosjs/latest/index"},"eosjs")),(0,a.kt)("p",null,"A general purpose Javascript library which provides an API for integrating with EOSIO-based blockchains using the EOSIO Nodeos RPC API."),(0,a.kt)("h3",{id:"eosjs-keygen"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosjs-keygen"},"eosjs-keygen")),(0,a.kt)("p",null,"A Javascript library for managing keys in local storage."),(0,a.kt)("h2",{id:"swift-sdk"},"Swift SDK"),(0,a.kt)("h3",{id:"eosio-swift"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift"},"eosio-swift")),(0,a.kt)("p",null,"An API for integrating with EOSIO-based blockchains using the EOSIO RPC API."),(0,a.kt)("h3",{id:"eosio-swift-abieos-serialization-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-abieos-serialization-provider"},"eosio-swift-abieos-serialization-provider")),(0,a.kt)("p",null,"A pluggable serialization provider for EOSIO SDK for Swift."),(0,a.kt)("h3",{id:"eosio-swift-ecc"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-ecc"},"eosio-swift-ecc")),(0,a.kt)("p",null,"A library for working with public and private keys, cryptographic signatures, encryption/decryption, etc. as part of the EOSIO SDK for Swift family of libraries."),(0,a.kt)("h3",{id:"eosio-swift-reference-ios-authenticator-signature-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-reference-ios-authenticator-signature-provider"},"eosio-swift-reference-ios-authenticator-signature-provider")),(0,a.kt)("p",null,"A pluggable signature provider for EOSIO SDK for Swift."),(0,a.kt)("h3",{id:"eosio-swift-softkey-signature-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-softkey-signature-provider"},"eosio-swift-softkey-signature-provider")),(0,a.kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Swift. It allows for signing transactions using in-memory K1 keys."),(0,a.kt)("h3",{id:"eosio-swift-vault-signature-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-vault-signature-provider"},"eosio-swift-vault-signature-provider")),(0,a.kt)("p",null,"A pluggable signature provider for EOSIO SDK for Swift."),(0,a.kt)("h3",{id:"eosio-swift-vault"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-swift-vault"},"eosio-swift-vault")),(0,a.kt)("p",null,"An utility library for working with public/private keys and signing with Apple's Keychain and Secure Enclave."),(0,a.kt)("h2",{id:"java-sdk"},"Java SDK"),(0,a.kt)("h3",{id:"eosio-java-android-abieos-serialization-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-java-android-abieos-serialization-provider"},"eosio-java-android-abieos-serialization-provider")),(0,a.kt)("p",null,"A pluggable serialization provider for EOSIO SDK for Java."),(0,a.kt)("h3",{id:"eosio-java-android-rpc-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-java-android-rpc-provider"},"eosio-java-android-rpc-provider")),(0,a.kt)("p",null,"An Android RPC provider implementation for use within EOSIO SDK for Java as a plugin."),(0,a.kt)("h3",{id:"eosio-java-softkey-signature-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-java-softkey-signature-provider"},"eosio-java-softkey-signature-provider")),(0,a.kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Java."),(0,a.kt)("h3",{id:"eosio-android-keystore-signature-provider"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/EOSIO/eosio-android-keystore-signature-provider"},"eosio-android-keystore-signature-provider")),(0,a.kt)("p",null,"An example pluggable signature provider for EOSIO SDK for Java written in Kotlin."))}u.isMDXComponent=!0}}]);