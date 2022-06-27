"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[1777],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3426:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"system-resources",title:"System Resources",sidebar_label:"System Resources"},c=void 0,l={unversionedId:"eos-learn/system-resources",id:"eos-learn/system-resources",title:"System Resources",description:"Type of Resources",source:"@site/docs/eos-learn/system-resources.md",sourceDirName:"eos-learn",slug:"/eos-learn/system-resources",permalink:"/docs/eos-learn/system-resources",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/eos-learn/system-resources.md",tags:[],version:"current",lastUpdatedBy:"Warner Hurtado Laguna",lastUpdatedAt:1656362319,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"system-resources",title:"System Resources",sidebar_label:"System Resources"},sidebar:"docs",previous:{title:"Consensus Mechanism",permalink:"/docs/eos-learn/consensus-mechanism"},next:{title:"EOSIO Components",permalink:"/docs/eos-learn/eosio-components"}},u=[{value:"Type of Resources",id:"type-of-resources",children:[{value:"RAM",id:"ram",children:[],level:3},{value:"CPU",id:"cpu",children:[],level:3},{value:"Network (NET)",id:"network-net",children:[],level:3}],level:2},{value:"Account Resource Limits",id:"account-resource-limits",children:[],level:2},{value:"Resource Billing",id:"resource-billing",children:[],level:2},{value:"CPU and NET as Elastic Resources",id:"cpu-and-net-as-elastic-resources",children:[],level:2},{value:"EOS Resource Allocation",id:"eos-resource-allocation",children:[],level:2}],p={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"type-of-resources"},"Type of Resources"),(0,o.kt)("p",null,"The accounts will be able to use the following resources in the network:"),(0,o.kt)("h3",{id:"ram"},"RAM"),(0,o.kt)("p",null,"In an EOSIO network, RAM is the memory storage space where the blockchain stores data, it is measured in kilobytes (KiB). If your contract needs to store data in a blockchain table, like in a database, then it can store it in the blockchain's RAM."),(0,o.kt)("p",null,"RAM is a very important resource and it is a limited one. It is used when executing many actions that are available on the blockchain, when creating a new account for example the information for that account is stored in the blockchain\u2019s memory. Also when an account accepts a new type of token a new record has to be created somewhere in the blockchain memory that holds the balance of the new token accepted, and that memory, the storage space on the blockchain, has to be purchased either by the account that transfers the token or by the account that accepts the new token type."),(0,o.kt)("p",null,"RAM is referred to as ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," in the following ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos get account")," output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},"memory:\nquota: 86.68 KiB\nused: 11.62 KiB  \n")),(0,o.kt)("p",null,"You can find more details about RAM as a resource ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"here"),"."),(0,o.kt)("h3",{id:"cpu"},"CPU"),(0,o.kt)("p",null,"CPU is processing power, the amount of CPU an account has is measured in microseconds (\u03bcs), it is referred to as ",(0,o.kt)("inlineCode",{parentName:"p"},"CPU bandwidth")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"cleos get account")," command outputs the amount of processing time an account has at its disposal when pushing actions to a contract."),(0,o.kt)("p",null,"You can find more details about the CPU as a resource ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu"},"here")),(0,o.kt)("h3",{id:"network-net"},"Network (NET)"),(0,o.kt)("p",null,"As CPU and RAM, NET is also a very important resource in EOSIO-based blockchains. NET is the network bandwidth measured in bytes of transactions and it is referred to as ",(0,o.kt)("inlineCode",{parentName:"p"},"net bandwidth"),"."),(0,o.kt)("p",null,"You can find more details about NET as a resource ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net"},"here"),"."),(0,o.kt)("h2",{id:"account-resource-limits"},"Account Resource Limits"),(0,o.kt)("p",null,"Every account on a EOSIO-based blockchain has resource limits for CPU/NET and RAM associated with it. These limits specify how much of each resource can be used by the account and they can be dynamically changed by calling the privileged API ",(0,o.kt)("inlineCode",{parentName:"p"},"set_resource_limits"),"."),(0,o.kt)("p",null,"The difference between CPU/NET and RAM resource limits is that RAM, since its a limited resource, once used the only way to recover it is to free the storage space used. On the other side, CPU and NET will be fully replenished when the account is not using the network for a period of time. By default this period is set to 24 hours."),(0,o.kt)("h2",{id:"resource-billing"},"Resource Billing"),(0,o.kt)("p",null,"When a user (account) wants to interact with a smart-contract (another account) a transaction is created with an action in it that specifies the smart function to call together with the account (permission level) that is authorizing the action."),(0,o.kt)("p",null,"Then, after signing with the keys that authorize the permission level specified in the action, the transaction is broadcasted to the network until it reaches the current block-producer in the schedule."),(0,o.kt)("p",null,"The block-producer will execute all actions inside the transaction and bill the time used to execute them (CPU) to the first account authorizing the first action. Also, it will bill the first authorizing account for the size of the transaction (NET)."),(0,o.kt)("p",null,"If the actions performed by the smart-contract involves any kind of data storage, the smart-contract can choose to use the RAM resources of any of the transaction authorizing accounts or use the RAM resources of the smart-contract account."),(0,o.kt)("h2",{id:"cpu-and-net-as-elastic-resources"},"CPU and NET as Elastic Resources"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resource limit manager")," of an EOSIO-based blockchain is the part of the protocol that keeps track of the amount of available network resources at any time and how much resources each account is using."),(0,o.kt)("p",null,"In particular, it treats CPU and NET as elastic resources allowing users to consume more resources than what they are entitled to while this resource is below a desired usage (uncongested)."),(0,o.kt)("p",null,"An elastic resource has the following properties."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The desired usage."),(0,o.kt)("li",{parentName:"ul"},"The maximum usage."),(0,o.kt)("li",{parentName:"ul"},"The number of aggregation periods that contribute to the average usage."),(0,o.kt)("li",{parentName:"ul"},"The multiplier by which virtual space can oversell usage when uncongested."),(0,o.kt)("li",{parentName:"ul"},"The rate at which a congested resource contracts its limit."),(0,o.kt)("li",{parentName:"ul"},"The rate at which an uncongested resource expands its limits.")),(0,o.kt)("p",null,"Let see at the default configuration for the CPU resource as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"const static uint32_t default_max_block_cpu_usage = 200'000; /// max block cpu usage in microseconds\nconst static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;\nconst static uint32_t block_cpu_usage_average_window_ms = 60*1000l;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"elastic_limit_parameters cpu_limit_parameters = {\n    EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct),   //10% of 200ms\n    config::default_max_block_cpu_usage,//200ms\n    config::block_cpu_usage_average_window_ms config::block_interval_ms,                            // 60s (120 blocks)\n    1000,                                                                                           //x1000 multiplier \n    {99, 100},                                                                                      //contract ratio 0.99 \n    {1000, 999}                                                                                     //expand ratio 1.001\n    };\n")),(0,o.kt)("p",null,"By making the CPU an elastic resource, a virtual cpu will be created that will range between the lowest possible value which is the maximun usage specified and the highest possible value which is the the lowest possible value times the multiplier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"virtual cpu = [[maximum usage, maximum usage * multiplier]]\n")),(0,o.kt)("p",null,"The virtual cpu limit will be contracted (expanded) by the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract (expand) ratio")," when the average utilization is above (below) the desired usage, meaning that ",(0,o.kt)("inlineCode",{parentName:"p"},"the most an account can consume during idle periods is 1000x (multiplier) the bandwidth it is gauranteed under congestion"),"."),(0,o.kt)("p",null,"The average CPU utilization is computed using an EMA (Exponential Moving Average) placing a greater weight and significance on the most recent usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def update_elastic_limit(current_limit, average_usage, elastic_resource_limit):\n   result = current_limit\n   if average_usage > elastic_resource_limit.target:\n      result = result * elastic_resource_limit.contract_rate\n   else:\n      result = result * elastic_resource_limit.expand_rate\n\n   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)\n")),(0,o.kt)("h2",{id:"eos-resource-allocation"},"EOS Resource Allocation"),(0,o.kt)("figure",{class:"video_container"},(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/N6CTRdx6NVE",frameborder:"0",allowfullscreen:"true"}," ")))}h.isMDXComponent=!0}}]);