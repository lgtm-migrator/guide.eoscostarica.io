"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[4438],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6375:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),s=["components"],l={id:"eosio-components",title:"EOSIO Components",sidebar_label:"EOSIO Components",description:"EOSIO Components, explaining how it works with different components like React and how to use it.",keywords:["EOSIO Components","eosio","eosio.io","EOS Costa Rica","Components EOSIO","Blockchain Components","React js","react","React Components"]},i=void 0,p={unversionedId:"eos-learn/eosio-components",id:"eos-learn/eosio-components",title:"EOSIO Components",description:"EOSIO Components, explaining how it works with different components like React and how to use it.",source:"@site/docs/eos-learn/eosio-components.md",sourceDirName:"eos-learn",slug:"/eos-learn/eosio-components",permalink:"/docs/eos-learn/eosio-components",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/eosio-components.md",tags:[],version:"current",frontMatter:{id:"eosio-components",title:"EOSIO Components",sidebar_label:"EOSIO Components",description:"EOSIO Components, explaining how it works with different components like React and how to use it.",keywords:["EOSIO Components","eosio","eosio.io","EOS Costa Rica","Components EOSIO","Blockchain Components","React js","react","React Components"]},sidebar:"docs",previous:{title:"System Resources",permalink:"/docs/eos-learn/system-resources"},next:{title:"Accounts And Permissions",permalink:"/docs/eos-learn/accounts-and-permissions"}},c={},u=[{value:"Nodeos",id:"nodeos",level:2},{value:"Cleos",id:"cleos",level:2},{value:"How to use Cleos?",id:"how-to-use-cleos",level:3},{value:"Cleos Commands",id:"cleos-commands",level:3},{value:"Cleos Example",id:"cleos-example",level:3},{value:"EOSIO.CDT",id:"eosiocdt",level:2},{value:"Get your Private Keys",id:"get-your-private-keys",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Windows Installation",id:"windows-installation",level:3},{value:"Use Linux Terminal",id:"use-linux-terminal",level:3},{value:"Install Binaries",id:"install-binaries",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nodeos"},"Nodeos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/index"},"Nodeos")," is the core service daemon that runs on every EOSIO node it can be configured with plugins to run a node. It also, connects to and syncs data with other nodes in the net via P2P.It can be configured to process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Smart Contracts."),(0,r.kt)("li",{parentName:"ul"},"Validate Transactions."),(0,r.kt)("li",{parentName:"ul"},"Produce blocks containing valid transactions."),(0,r.kt)("li",{parentName:"ul"},"Confirm blocks to record them on the blockchain.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/tools/nodeos-command-line-reference"},"More Information"))),(0,r.kt)("h2",{id:"cleos"},"Cleos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"Cleos")," is a command line tool that interfaces with Nodeos with a wallet utility (Keosd) responsible for managing keys and signing transactions. Developers can also use cleos to deploy and test EOSIO smart contracts."),(0,r.kt)("h3",{id:"how-to-use-cleos"},"How to use Cleos?"),(0,r.kt)("p",null,"In order to use ",(0,r.kt)("strong",{parentName:"p"},"cleos"),", you need the domain or IP direction (and the port number) of an instance of ",(0,r.kt)("strong",{parentName:"p"},"nodeos")," in execution. The instance of nodeos needs to be configured to load ",(0,r.kt)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," when starts. This allows that nodeos responds to the RPC request that come from cleos."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"Keosd"),": is a key manager service daemon for storing private keys and signing digital messages. ")),(0,r.kt)("h3",{id:"cleos-commands"},"Cleos Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$cleos --help\n$cleos create --help\n$cleos create account --help\n")),(0,r.kt)("h3",{id:"cleos-example"},"Cleos Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cleos wallet create -n mywallet --to-console\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/tools/command-line"},"More Information")),(0,r.kt)("h2",{id:"eosiocdt"},"EOSIO.CDT"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.cdt/latest/index"},"EOSIO.CDT")," or ",(0,r.kt)("strong",{parentName:"p"},"Contract Development Toolkit")," is a toolchain for WebAssembly(WASM) with tools to facilitate smart contracts development. C++ to WASM compiler and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.cdt/latest/best-practices/abi/understanding-abi-files"},(0,r.kt)("strong",{parentName:"a"},"Aplication Binary Interface"))," (ABI) generator set of C/C++ libraries for smart contracts development."),(0,r.kt)("h2",{id:"get-your-private-keys"},"Get your Private Keys"),(0,r.kt)("p",null,"More information ",(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys"},"about private keys")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(9890).Z,width:"1400",height:"738"})),(0,r.kt)("h3",{id:"windows-installation"},"Windows Installation"),(0,r.kt)("p",null,"As a way to help you start in EOSIO world, here is a guide on how to install the EOSIO Contract Development Toolkit.\nIf you are using a different OS rather than ",(0,r.kt)("strong",{parentName:"p"},"Windows")," visit ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"this site")," to see the prerequisites and skip to ",(0,r.kt)("a",{parentName:"p",href:"#install-binaries"},"Install Binaries"),".\nThis installation guide will aim for ",(0,r.kt)("strong",{parentName:"p"},"Windows users"),", unfortunately, EOSIO does not provide PowerShell ports and instructions for this OS. As a developer you have two options ",(0,r.kt)("em",{parentName:"p"},"one")," to use a Virtual Machine or, like in this case a Linux Terminal on Windows. Follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to your Control Panel"),(0,r.kt)("li",{parentName:"ul"},"Go to Programs -> Programs and Features"),(0,r.kt)("li",{parentName:"ul"},"Then, click ",(0,r.kt)("strong",{parentName:"li"},"Turn Windows features on or off")),(0,r.kt)("li",{parentName:"ul"},"Search for the option and click ",(0,r.kt)("strong",{parentName:"li"},"Windows Subsystem for Linux")," and press ",(0,r.kt)("em",{parentName:"li"},"OK")),(0,r.kt)("li",{parentName:"ul"},"Now you need to restart your Windows OS"),(0,r.kt)("li",{parentName:"ul"},"Finally, go to your ",(0,r.kt)("em",{parentName:"li"},"Microsoft Store")," and Search for whatever Linux OS you want, we recommend you install Ubuntu 18.04 LTS")),(0,r.kt)("h3",{id:"use-linux-terminal"},"Use Linux Terminal"),(0,r.kt)("p",null,'It will ask for UNIX username and password, you can set it up as you wish.\nThis is a navigation example with a "C" Disk.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd /mnt/c/\n")),(0,r.kt)("p",null,"Here you are in your C disk where you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"$ls -al")," to see your files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ cd Users/"your_user_name"\n')),(0,r.kt)("p",null,"After you are in your wish folder you can follow the next steps."),(0,r.kt)("h2",{id:"install-binaries"},"Install Binaries"),(0,r.kt)("p",null,"This guide will be using ",(0,r.kt)("strong",{parentName:"p"},"Ubuntu 18.04")," command install lines. For other OS and more information go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"EOSIO Before You Begin"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1: Install binaries"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2: Setup a development directory"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ mkdir "your_development_directory_name"\n$ cd "your_development_directory_name"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3: Enter your local directory"))),(0,r.kt)("p",null,"Get your directory path with ",(0,r.kt)("inlineCode",{parentName:"p"},"$ pwd"),", clone the EOSIO version from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/README.md"},"GitHub")," in that directory path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch\n")),(0,r.kt)("p",null,"It may take up to 30 minutes to clone the repository. After that, use ",(0,r.kt)("inlineCode",{parentName:"p"},"$ cd eosio.cdt"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4 : Build the EOSIO.CDT"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./build.sh\n")),(0,r.kt)("p",null,"Installing eosio.cdt will make the compiled binary global so, it can be accessible anywhere. For this tutorial, it is strongly suggested that you do not skip the install step for eosio.cdt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo ./install.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information on how to Install the Contract DEV. Toolkit go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT"},"this page"),".")),(0,r.kt)("p",null,"Now you are set for creating a development wallet with the help of Cleos. ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet"},"More information"),"."))}m.isMDXComponent=!0},9890:function(e,t,o){t.Z=o.p+"assets/images/cleos-1cf353a715f29231e4c7d71e552dd8b7.png"}}]);