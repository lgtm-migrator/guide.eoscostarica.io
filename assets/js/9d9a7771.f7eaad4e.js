(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[4405],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return a},Z:function(){return i}});var r=t(2263),o=t(3919);function a(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+d:d}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},6315:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=t(4996),c=["components"],s={id:"docker",title:"Docker",sidebar_label:"Docker"},l=void 0,d={unversionedId:"tutorials/docker",id:"tutorials/docker",isDocsHomePage:!1,title:"Docker",description:"Docker is a tool that allows you to quickly create, test, and deploy applications. The idea behind Docker is to create \u201ccontainers\u201d that are lightweight and portable so that applications can run on any machine with Docker installed, regardless of the operating system.",source:"@site/docs/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/docker.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1625690291,formattedLastUpdatedAt:"7/7/2021",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"docs",previous:{title:"GraphQL",permalink:"/docs/tutorials/graphql-tutorial"},next:{title:"Kubernetes",permalink:"/docs/tutorials/kubernetes"}},p=[{value:"Docker Engine",id:"docker-engine",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Project Structure",id:"project-structure",children:[]},{value:"Code Breakdown",id:"code-breakdown",children:[]},{value:"Commands",id:"commands",children:[]},{value:"Docker Compose Example",id:"docker-compose-example",children:[]},{value:"Run multiple Containers",id:"run-multiple-containers",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docker is a tool that allows you to quickly create, test, and deploy applications. The idea behind Docker is to create \u201ccontainers\u201d that are lightweight and portable so that applications can run on any machine with Docker installed, regardless of the operating system."),(0,a.kt)("p",null,"For example, each node of the blockchain network or service / application developed will be compiled into a docker image that contains all of its dependencies and is deployed to one of several infrastructure providers with docker available."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"Docker vs. Traditional VMs",src:(0,i.Z)("/img/documentation-images/Docker-containerized-and-vm-transparent-bg.png")})),(0,a.kt)("p",null,"In addition to Docker we use a container \u201corchestrator\u201d tool called Kubernetes (K8s)."),(0,a.kt)("p",null,"Kubernetes helps you manage the containers in which your applications are hosted in an easy, fast, and scalable way. In addition, it also has load monitoring and balancing. About virtual servers. ",(0,a.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/devops#introduction-to-kubernetes-and-docker"},"More information"),"."),(0,a.kt)("h2",{id:"docker-engine"},"Docker Engine"),(0,a.kt)("p",null,"Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A server with a long-running daemon process ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd"},"dockerd"),"."),(0,a.kt)("li",{parentName:"ul"},"APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon."),(0,a.kt)("li",{parentName:"ul"},"A command line interface (CLI) client ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},"docker"),".")),(0,a.kt)("p",null,"The CLI uses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/api/"},"Docker APIs")," to control or interact with the Docker daemon through scripting or direct CLI commands. Many other Docker applications use the underlying API and CLI. The daemon creates and manage Docker objects, such as images, containers, networks, and volumes."),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/#docker-architecture"},"Docker Architecture"),"."),(0,a.kt)("p",null,"To have an initial docker configuration, we need to set up three main thing:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Dockerfile"),": Define the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Image"),": An image is a read-only template with instructions for creating a Docker container."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Container"),": A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.")),(0,a.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,a.kt)("p",null,"Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application\u2019s services. Then, with a single command, you create and start all the services from your configuration."),(0,a.kt)("p",null,"Using Compose is basically a three-step process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define your app\u2019s environment with a Dockerfile so it can be reproduced anywhere."),(0,a.kt)("li",{parentName:"ol"},"Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment."),(0,a.kt)("li",{parentName:"ol"},"Run docker-compose up and Compose starts and runs your entire app.")),(0,a.kt)("p",null,"A docker-compose.yml looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"  # optional since v1.27.0\nservices:\n  web:\n    build: .\n    ports:\n      - "5000:5000"\n    volumes:\n      - .:/code\n      - logvolume01:/var/log\n    links:\n      - redis\n  redis:\n    image: redis\nvolumes:\n  logvolume01: {}\n')),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To start our first Docker project, we are going to create the needed configuration to make it start and says ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello world, we are EOS Costa Rica \ud83e\udd8b"),". First of all, we need the main configuration, so follow next steps to get it."),(0,a.kt)("h3",{id:"project-structure"},"Project Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500  node_modules\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 .dockerignore\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 yarn.lock\n")),(0,a.kt)("h3",{id:"code-breakdown"},"Code Breakdown"),(0,a.kt)("h4",{id:"dockerfile"},"Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:12\n\nWORKDIR /app\n\nCOPY package*.json ./\n\nRUN yarn\n\nCOPY . .\n\nENV PORT=8080\n\nEXPOSE 8080\n\nCMD [ "yarn", "start" ]\n')),(0,a.kt)("h4",{id:"dockerignore"},".dockerignore"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")),(0,a.kt)("h4",{id:"gitignore"},".gitignore"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")),(0,a.kt)("h4",{id:"srcindexjs"},"src/index.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const app = require('express')();\n \napp.get('/', (req, res ) => \n    res.json({ message: 'Hello world, we are EOS Costa Rica \ud83e\udd8b' }) \n);\n \nconst port = process.env.PORT || 8080;\n \napp.listen(port, () => console.log(`app listening on http://localhost:${port}`) );\n")),(0,a.kt)("h4",{id:"packagejson"},"package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "docker-demo",\n  "version": "1.0.0",\n  "description": "Hello world, we are EOS Costa Rica \ud83e\udd8b",\n  "main": "index.js",\n  "scripts": {\n    "start": "node src/index.js"\n  },\n  "keywords": [],\n  "author": "EOS Costa Rica",\n  "license": "MIT",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("h4",{id:"build-the-image"},"Build the Image"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker build -t eoscostarica/helloworld:1.0 .")),(0,a.kt)("h4",{id:"run-the-container"},"Run the Container"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -p 5000:8080 <image-id>")),(0,a.kt)("h3",{id:"docker-compose-example"},"Docker Compose Example"),(0,a.kt)("h4",{id:"docker-composeyml"},"docker-compose.yml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3\'\nservices:\n  web:\n    build: .\n    ports:\n      - "8080:8080"\n  db:\n    image: "mysql"\n    environment: \n      MYSQL_ROOT_PASSWORD: password\n    volumes:\n      - db-data:/foo\n\nvolumes:\n  db-data:\n')),(0,a.kt)("h3",{id:"run-multiple-containers"},"Run multiple Containers"),(0,a.kt)("h4",{id:"command-line"},"command line"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up")))}m.isMDXComponent=!0}}]);