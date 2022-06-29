"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[8525],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7603:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"devops",title:"DevOps",sidebar_label:"DevOps"},s=void 0,u={unversionedId:"devops",id:"devops",title:"DevOps",description:"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging people, processes, & tools.",source:"@site/docs/devops.md",sourceDirName:".",slug:"/devops",permalink:"/docs/devops",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/devops.md",tags:[],version:"current",frontMatter:{id:"devops",title:"DevOps",sidebar_label:"DevOps"},sidebar:"docs",previous:{title:"Social Media Guidelines",permalink:"/docs/social-media-guidelines"},next:{title:"EOSIO Protocol",permalink:"/docs/eos-learn/eosio-protocol"}},c={},p=[{value:"Key Definitions",id:"key-definitions",level:2},{value:"Why implement DevOps?",id:"why-implement-devops",level:2},{value:"Areas of Emphasis",id:"areas-of-emphasis",level:2},{value:"What is the goal of DevOps?",id:"what-is-the-goal-of-devops",level:2},{value:"CI Systems - Examples",id:"ci-systems---examples",level:2},{value:"CD Systems - Examples",id:"cd-systems---examples",level:2},{value:"Infrastructure as Code (IAC)",id:"infrastructure-as-code-iac",level:2},{value:"Introduction to HashiCorp Terraform",id:"introduction-to-hashicorp-terraform",level:3},{value:"Introduction to Kubernetes and Docker",id:"introduction-to-kubernetes-and-docker",level:2},{value:"<strong>Containers 101</strong>",id:"containers-101",level:3},{value:"What is Docker?",id:"what-is-docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Kubernetes in 5 Minutes",id:"kubernetes-in-5-minutes",level:3},{value:"Kubernetes vs Docker: Not a Question of Both or One",id:"kubernetes-vs-docker-not-a-question-of-both-or-one",level:3},{value:"Kubernetes at EOS Costa Rica",id:"kubernetes-at-eos-costa-rica",level:2},{value:"References",id:"references",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging ",(0,a.kt)("em",{parentName:"p"},"people, processes, & tools.")),(0,a.kt)("p",null,"It focuses on unifying Development & IT Operations through the principles of flow, feedback, & experimentation."),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/OOGFxVzW35w",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("h2",{id:"key-definitions"},"Key Definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Integration (CI)"),": Addresses building software from contributions of individual developers in a controlled, agile way. (Checking all code into centralized repo daily)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Deployment (CD)"),": Automated Deployment (or transport) of code to production with no manual steps required. This will not be the plan with all applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Continuous Delivery (CD)"),": Automation that ensures deployment is validated, however manual step still required to deploy to production."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Deployment"),": The deployment (or transport) of code to a higher-level environment, up to & including production."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Release"),": The defined scope and business objective for a set of features to be delivered in a certain timeline.")),(0,a.kt)("h2",{id:"why-implement-devops"},"Why implement DevOps?"),(0,a.kt)("p",null,"In 2012, Puppet Labs \u201cstate of DevOps report\u201d benchmarked 4,039 IT orgs using DevOps and found:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"30x more frequent code deployments"),(0,a.kt)("li",{parentName:"ul"},"8,000x faster code deployment lead time"),(0,a.kt)("li",{parentName:"ul"},"2x the change success rate"),(0,a.kt)("li",{parentName:"ul"},"12x faster MTTR (mean time to repair)")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201c",(0,a.kt)("em",{parentName:"p"},"The competitive advantage this capability creates is enormous, enabling faster feature time to market, increased customer satisfaction, market share, employee productivity, and happiness.\u201d")," ",(0,a.kt)("strong",{parentName:"p"}," - Phoenix Project "))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"areas-of-emphasis"},"Areas of Emphasis"),(0,a.kt)("p",null,"DevOps principles are applied to and assisted by the following 3 Key areas all working together:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"People")," - DevOps relies on strong people & a strong culture of experimentation, learning, collaboration, and shared goals between Development, QA & IT Operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Processes")," \u2013 DevOps builds further upon Lean Agile, applying concepts of lean manufacturing to IT value streams."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tools")," \u2013 DevOps relies on enhanced tools & technologies, including automation, telemetry, & collaboration tools.")),(0,a.kt)("h2",{id:"what-is-the-goal-of-devops"},"What is the goal of DevOps?"),(0,a.kt)("p",null,"Improve collaboration between all stakeholders from planning through delivery and automation of the delivery process in order to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve deployment frequency"),(0,a.kt)("li",{parentName:"ul"},"Achieve faster time to market"),(0,a.kt)("li",{parentName:"ul"},"Lower failure rate of new releases"),(0,a.kt)("li",{parentName:"ul"},"Shorten lead time between fixes"),(0,a.kt)("li",{parentName:"ul"},"Improve mean time to recovery")),(0,a.kt)("h2",{id:"ci-systems---examples"},"CI Systems - Examples"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png",alt:"CI_System_image",title:"Devops"})),(0,a.kt)("h2",{id:"cd-systems---examples"},"CD Systems - Examples"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png",alt:"CD_System_image"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"infrastructure-as-code-iac"},"Infrastructure as Code (IAC)"),(0,a.kt)("p",null,"The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/53X-HAw7BbA",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"introduction-to-hashicorp-terraform"},"Introduction to HashiCorp Terraform"),(0,a.kt)("p",null,"Terraform is an infrastructure software as code, developed by HashiCorp. It enables users to define and configure the infrastructure of a data center in a high-level language."),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/cpxKbf51ccU",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("hr",null),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/h970ZBgKINg",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("h2",{id:"introduction-to-kubernetes-and-docker"},"Introduction to Kubernetes and Docker"),(0,a.kt)("h3",{id:"containers-101"},(0,a.kt)("strong",{parentName:"h3"},"Containers 101")),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/VqLcWftIaQI",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers"},"More information about containers")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-is-docker"},"What is Docker?"),(0,a.kt)("p",null,"Docker is an open source project that automates the deployment of applications within software containers, providing an additional layer of abstraction and application virtualization automation across multiple operating systems."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/docker"},"Learn more about Docker")),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PfTKwblbkpE",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Kubernetes is an open source system for automating the deployment, scaling, and handling of containerized applications that was originally designed by Google and donated to the Cloud Native Computing Foundation. It supports different environments for running containers, including Docker."),(0,a.kt)("p",null,"Following you can find a set of very convenient tutorials for learning kubernetes from scratch:"),(0,a.kt)("h3",{id:"kubernetes-in-5-minutes"},"Kubernetes in 5 Minutes"),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/PH-2FfFD2PU",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"kubernetes-vs-docker-not-a-question-of-both-or-one"},"Kubernetes vs Docker: Not a Question of Both or One"),(0,a.kt)("figure",{class:"video_container"},(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/2vMEQ5zs1ko",frameborder:"0",allowfullscreen:"true"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"kubernetes-at-eos-costa-rica"},"Kubernetes at EOS Costa Rica"),(0,a.kt)("p",null,"To be able to try the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"tutorials")," in a real environment, you could try our Kubernetes installation in Openstack. If you prefer so, you may also create a local setup in your own machine: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/"},"Install Minikube")," "),(0,a.kt)("p",null,"Request to the administrators for access to our Openstack installation dashboard and the Sandbox\nproject. Then you can follow the next steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First of all connect to the master node using the SSH tool:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -i key.pem user@master-sandbox\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get information about the cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Show the current available nodes in the cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cThe principles behind DevOps are the same that transformed manufacturing. Instead of optimizing how raw materials are transformed into finished goods, DevOps shows how we optimize the IT value stream...\u201d")," - Phoenix Project"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u201cImagine living in a DevOps world, where product owners, Development, QA, IT Ops, and InfoSec work together relentlessly to help each other and the overall organization win. They are enabling fast flow of planned work into production, while preserving world-class stability, reliability, availability, and security.\u201d")," - Phoenix Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68"},"Periodic Table of DevOps Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f"},"Automation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://lab.github.com/githubtraining/devops-with-github-actions"},"DevOps with GitHub"))))}m.isMDXComponent=!0}}]);