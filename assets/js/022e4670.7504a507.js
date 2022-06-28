"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[7349],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7182:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes"},l=void 0,c={unversionedId:"tutorials/kubernetes",id:"tutorials/kubernetes",title:"Kubernetes",description:"Kubernetes is an open source platform, which was created by Google, used for the management, deployment, scalability and monitoring of Docker containers.",source:"@site/docs/tutorials/kubernetes.md",sourceDirName:"tutorials",slug:"/tutorials/kubernetes",permalink:"/docs/tutorials/kubernetes",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656451092,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"kubernetes",title:"Kubernetes",sidebar_label:"Kubernetes"},sidebar:"docs",previous:{title:"Docker",permalink:"/docs/tutorials/docker"},next:{title:"Node Installation",permalink:"/docs/tutorials/node-installation"}},u=[{value:"Kubernetes Features",id:"kubernetes-features",children:[],level:3},{value:"Kubernetes Architecture",id:"kubernetes-architecture",children:[],level:3},{value:"Kubernetes Architecture Diagram",id:"kubernetes-architecture-diagram",children:[],level:3},{value:"Key Concepts in k8s",id:"key-concepts-in-k8s",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes is an open source platform, which was created by Google, used for the management, deployment, scalability and monitoring of Docker containers. "),(0,o.kt)("h3",{id:"kubernetes-features"},"Kubernetes Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Intelligent container deployment."),(0,o.kt)("li",{parentName:"ul"},"Management of workloads (provides load balancing)."),(0,o.kt)("li",{parentName:"ul"},"Easy management of services and applications."),(0,o.kt)("li",{parentName:"ul"},"High availability."),(0,o.kt)("li",{parentName:"ul"},"Great flexibility and allows modular work."),(0,o.kt)("li",{parentName:"ul"},"Container monitoring.")),(0,o.kt)("h3",{id:"kubernetes-architecture"},"Kubernetes Architecture"),(0,o.kt)("p",null,'There are two main roles, "master" and "node". The master is in charge of managing and orchestrating the different microservices between the 4 available nodes in the cluster.'),(0,o.kt)("h3",{id:"kubernetes-architecture-diagram"},"Kubernetes Architecture Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png",alt:"image"})),(0,o.kt)("h3",{id:"key-concepts-in-k8s"},"Key Concepts in k8s"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cluster:")," It is a group of devices that can be physical or virtual, are united many times by a network and, therefore, they behave as one."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubernetes node:")," A machine that is running Kubernetes, on which pods can be programmed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pod:")," A group of one or more containers that share the storage and configurations needed to run."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Replication Controller:")," It is the one who handles the above mentioned failures and recreates, if necessary, the pods. In addition, it also ensures that the number of replicas of the pod is running."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Service:")," It is an abstraction that defines a logical set of pods, as well as the rules and logic to access them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Infrastructure as IaC Code"),(0,o.kt)("br",{parentName:"p"}),"\n","A repository will be created with code for the design and deployment of the project's infrastructure. This will represent the desired state on the servers, as well as pre-compiled images of each service to be deployed."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/devops#introduction-to-kubernetes-and-docker"},"More Information")))}d.isMDXComponent=!0}}]);