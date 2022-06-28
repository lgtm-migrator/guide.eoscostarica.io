"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[4645],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),g=o,k=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"how-to-publish-packages",title:"How To Publish Packages",sidebar_label:"How To Publish Packages"},p=void 0,c={unversionedId:"tutorials/how-to-publish-packages",id:"tutorials/how-to-publish-packages",title:"How To Publish Packages",description:"Packages Publication",source:"@site/docs/tutorials/how-to-publish-packages.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-publish-packages",permalink:"/docs/tutorials/how-to-publish-packages",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/how-to-publish-packages.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656451092,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"how-to-publish-packages",title:"How To Publish Packages",sidebar_label:"How To Publish Packages"},sidebar:"docs",previous:{title:"Hello World Contract",permalink:"/docs/tutorials/hello-world-contract"},next:{title:"Modern C++",permalink:"/docs/tutorials/modern-cpp"}},u=[{value:"Packages Publication",id:"packages-publication",children:[],level:2},{value:"Generate Personal Access Token",id:"generate-personal-access-token",children:[],level:2},{value:"Github&#39;s Package Registry",id:"githubs-package-registry",children:[],level:2},{value:"Authentication Using <code>npm login</code>",id:"authentication-using-npm-login",children:[],level:2},{value:"Publish a Package",id:"publish-a-package",children:[],level:2},{value:"Deploy a New Version of the Package",id:"deploy-a-new-version-of-the-package",children:[],level:2},{value:"Install the Published Package",id:"install-the-published-package",children:[],level:2},{value:"References",id:"references",children:[],level:2}],h={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"packages-publication"},"Packages Publication"),(0,i.kt)("p",null,"Modularisation in the context of software is important for the separation of code and files that have relevance to each other, as well as facilitating the consumption of modules that are common between 2 or more projects. Although there are different types of packages and ways to publish them, this tutorial is based on publishing NPM packages."),(0,i.kt)("h2",{id:"generate-personal-access-token"},"Generate Personal Access Token"),(0,i.kt)("p",null,"In order to be able to publish packages, it is necessary to generate a ",(0,i.kt)("strong",{parentName:"p"},"Personal Access Token"),". This token can be generated by following the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," option",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/packages-publication/GoToSettings.png"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Once you are in the settings panel, press the ",(0,i.kt)("strong",{parentName:"li"},"Developer Settings")," button",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/packages-publication/DeveloperSettings.png"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Now, click on the ",(0,i.kt)("strong",{parentName:"li"},"Personal Access Tokens")," option",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/packages-publication/PersonalAccessToken.png"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Once you have clicked on the previous option, press the ",(0,i.kt)("strong",{parentName:"li"},"Generate new token")," button",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/packages-publication/GenerateNewToken.png"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Now select the appropriate ",(0,i.kt)("strong",{parentName:"li"},"scope")," for the token, as shown in the following image",(0,i.kt)("p",{style:{align:"center"}},(0,i.kt)("img",{src:(0,r.Z)("/img/packages-publication/TokenScope.png"),width:"100%"}))),(0,i.kt)("li",{parentName:"ol"},"Finally, press the button shown in the following image (located at the bottom of the page) to obtain the token",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'<p style={{ align: "center" }}>\n  <img src={ useBaseUrl( \'/img/packages-publication/GenerateTokenButton.png\' )} width="100%" />\n</p>\n')),(0,i.kt)("strong",{parentName:"li"},"The token is displayed once it is generated; proceed to copy it to a safe place, as it is not displayed again."))),(0,i.kt)("h2",{id:"githubs-package-registry"},"Github's Package Registry"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Github Package Registry")," is a package registry that offers among its advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Handling of the same credentials used in Github."),(0,i.kt)("li",{parentName:"ul"},"Possibility of integration with ",(0,i.kt)("strong",{parentName:"li"},"Github Actions")," and ",(0,i.kt)("strong",{parentName:"li"},"Webhooks"),"."),(0,i.kt)("li",{parentName:"ul"},"Private packages that are kept within the same scope of the organization."),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"authentication-using-npm-login"},"Authentication Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm login")),(0,i.kt)("p",null,"To authenticate to the ",(0,i.kt)("strong",{parentName:"p"},"Github Registry")," you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm login")," command as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com\n\n> Username: USERNAME\n> Password: TOKEN\n> Email: PUBLIC-EMAIL-ADDRESS\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Remember to replace USERNAME with the respective Github user (the one who created the Personal Access Token), TOKEN with the generated Personal Access Token and PUBLIC-EMAIL-ADDRESS with the email address that corresponds to the user.\nIf you wish to authenticate by adding your Personal Access Token to the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.npmrc")," file, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"github documentation")," for more on this.")),(0,i.kt)("h2",{id:"publish-a-package"},"Publish a Package"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file you need to add one more element called ",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),", which refers to the registry where you want to publish the package."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file and include the entry ",(0,i.kt)("inlineCode",{parentName:"li"},"publishConfig"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"publishConfig": {\n  "registry":"https://npm.pkg.github.com"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},"Check if the ",(0,i.kt)("inlineCode",{parentName:"li"},"repository")," entry in the ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file corresponds to the repository URL. For example if the repository URL is ",(0,i.kt)("inlineCode",{parentName:"li"},"github.com/my-org/test"),", then the ",(0,i.kt)("inlineCode",{parentName:"li"},"repository")," entry should be ",(0,i.kt)("inlineCode",{parentName:"li"},"git://github.com/my-org/test.git")),(0,i.kt)("li",{parentName:"ol"},"Now run the following command in the terminal to publish the package",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm publish\n```\n")))),(0,i.kt)("h2",{id:"deploy-a-new-version-of-the-package"},"Deploy a New Version of the Package"),(0,i.kt)("p",null,"When releasing a new version, it is necessary to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file. The npm ","[Semantic Versioning]"," standard (",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning"},"https://docs.npmjs.com/about-semantic-versioning"),") is being followed for this."),(0,i.kt)("h2",{id:"install-the-published-package"},"Install the Published Package"),(0,i.kt)("p",null,"To install the package, you need to run the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @scope/package-name\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"@scope")," refers to the owner (username or org name) under which the package is published.\nIf you want to install a specific version of the package, you need to run the command: ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @scope/package-name@versionhere"),".")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages"},"Configuring npm for use with GitHub Packages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mugan86.medium.com/crear-y-publicar-nuestro-primer-paquete-en-github-package-registry-9f229bd365bc"},"Crear y publicar nuestro primer paquete en Github Package Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/about-semantic-versioning"},"Semantic Versioning"))))}g.isMDXComponent=!0}}]);