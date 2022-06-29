"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[551],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={id:"graphql-tutorial",title:"GraphQL",sidebar_label:"GraphQL"},o=void 0,p={unversionedId:"tutorials/graphql-tutorial",id:"tutorials/graphql-tutorial",title:"GraphQL",description:"Introduction",source:"@site/docs/tutorials/graphql-tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/graphql-tutorial",permalink:"/docs/tutorials/graphql-tutorial",draft:!1,editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/graphql-tutorial.md",tags:[],version:"current",frontMatter:{id:"graphql-tutorial",title:"GraphQL",sidebar_label:"GraphQL"},sidebar:"docs",previous:{title:"React JS",permalink:"/docs/tutorials/react-tutorial"},next:{title:"Docker",permalink:"/docs/tutorials/docker"}},u={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Queries and Mutations",id:"queries-and-mutations",level:2},{value:"Fields",id:"fields",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Fragments",id:"fragments",level:3},{value:"Operation Name",id:"operation-name",level:3},{value:"Variables",id:"variables",level:3},{value:"Directives",id:"directives",level:3},{value:"Mutations",id:"mutations",level:3},{value:"Inline Fragments",id:"inline-fragments",level:3},{value:"Schema and Types",id:"schema-and-types",level:2},{value:"Type System",id:"type-system",level:3},{value:"Type Language",id:"type-language",level:3},{value:"Object Types and Fields",id:"object-types-and-fields",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"The Query and Mutation Types",id:"the-query-and-mutation-types",level:3},{value:"Scalar Types",id:"scalar-types",level:3},{value:"Enumeration Types",id:"enumeration-types",level:3},{value:"Lists and Non-Null",id:"lists-and-non-null",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Union Types",id:"union-types",level:3},{value:"Input Types",id:"input-types",level:3},{value:"Execution",id:"execution",level:2},{value:"Language Support",id:"language-support",level:2},{value:"Top 5",id:"top-5",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Serve",id:"serve",level:4},{value:"Client",id:"client",level:4},{value:"Tools",id:"tools",level:3},{value:"Services",id:"services",level:4}],c={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data."),(0,r.kt)("h2",{id:"queries-and-mutations"},"Queries and Mutations"),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("p",null,"At its simplest, GraphQL is about asking for specific fields on objects. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"Every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  lifebank(email: "blood@gmail.com") {\n    telephone\n    location    \n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank"\n        "location": "Costa Rica",\n    }\n  }\n}\n')),(0,r.kt)("p",null,"GraphQL comes with a default set of types, but a GraphQL server can also declare its own custom types, as long as they can be serialized into your transport format."),(0,r.kt)("h3",{id:"aliases"},"Aliases"),(0,r.kt)("p",null,"Aliases allow you to rename the result of a field to whatever you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  mainLifebank: lifebank(email: "blood@gmail.com") {\n    name\n  }\n  secondaryLifebank: lifebank(email: "secondaryblood@gmail.com") {\n    name\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "mainLifebank": {\n        "name": "National Blood Bank"\n    },\n    "secondaryLifebank": {\n        "name": "National Rescue Blood Bank"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"fragments"},"Fragments"),(0,r.kt)("p",null,"GraphQL includes reusable units called fragments. Fragments let you construct sets of fields, and then include them in queries where you need to. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  leftComparison: lifebank(email: "blood@gmail.com") {\n    ...comparisonFields\n  }\n  rightComparison: lifebank(email: "secondaryblood@gmail.com") {\n    ...comparisonFields\n  }\n}\n\nfragment comparisonFields on Character {\n  name\n  location \n  telephone\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "leftComparison": {\n        "name": "National Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "high" \n    },\n    "rightComparison": {\n        "name": "National Rescue Blood Bank",\n        "location": "Costa Rica",\n        "urgencyLevel": "medium" \n    }\n  }\n}\n')),(0,r.kt)("p",null,"The concept of fragments is frequently used to split complicated application data requirements into smaller chunks."),(0,r.kt)("h3",{id:"operation-name"},"Operation Name"),(0,r.kt)("p",null,"The operation name is a meaningful and explicit name for your operation. It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos {\n  lifebank{\n    name\n    photos {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"When something goes wrong it is easier to identify a query in your codebase by name instead of trying to decipher the contents. "),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("p",null,"GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called variables."),(0,r.kt)("p",null,"When we start working with variables, we need to do three things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace the static value in the query with ",(0,r.kt)("inlineCode",{parentName:"li"},"$variableName"),"."),(0,r.kt)("li",{parentName:"ul"},"Declare ",(0,r.kt)("inlineCode",{parentName:"li"},"$variableName")," as one of the variables accepted by the query."),(0,r.kt)("li",{parentName:"ul"},"Pass variableName: value in the separate, transport-specific (usually JSON) variables dictionary.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query LifebankNameAndPhotos($email: Lifebank) {\n  lifebank(email: $email) {\n    name\n    photos {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n        "name": "National Blood Bank",\n        "photos": [\n            {\n                "url": "photo1.png"\n            },\n            {\n                "url": "photo2.png"\n            },\n            {\n                "url": "photo3.png"\n            }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"directives"},"Directives"),(0,r.kt)("p",null,"A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires. The core GraphQL specification includes exactly two directives, which must be supported by any spec-compliant GraphQL server implementation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@include"),"(if: Boolean) Only include this field in the result if the argument is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@skip"),"(if: Boolean) Skip this field if the argument is true.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n    "email": "blood@gmail.com",\n    "withPhotos": false\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query Lifebank($email: Lifebank, $withPhotos: Boolean!) {\n  lifebank(name: $email) {\n    name\n    photos @include(if: $withPhotos) {\n        url\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank": {\n    "name": "National Blood Bank" \n   }\n}\n')),(0,r.kt)("h3",{id:"mutations"},"Mutations"),(0,r.kt)("p",null,"Any query could be implemented to cause a data write. However, it is useful to establish a convention that any operation that causes writes must be explicitly sent through a mutation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "email": "blood@gmail.com",\n  "urgencyLevel": "high"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation ChangeUrgencyLevel($ep: Episode!, $review: ReviewInput!) {\n  updateUrgencyLevel(email: $email, urgencyLevel: $urgencyLevel) {\n    urgencyLevel\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "updateUrgencyLevel": {\n    "urgencyLevel": "high",\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Similar to queries, if the mutation field returns an object type, you can request nested fields. This can be useful to get the new state of an object after an update."),(0,r.kt)("h3",{id:"inline-fragments"},"Inline Fragments"),(0,r.kt)("p",null,"If you are querying a field that returns an interface or a union type, you will need to use inline fragments to access data on the underlying concrete type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query HeroForEpisode($ep: Episode!) {\n  hero(episode: $ep) {\n    name\n    ... on Droid {\n    primaryFunction\n    }\n    ... on Human {\n    height\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n    "name": "R2-D2",\n    "primaryFunction": "Astromech"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"schema-and-types"},"Schema and Types"),(0,r.kt)("h3",{id:"type-system"},"Type System"),(0,r.kt)("p",null,"Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  lifebank {\n    name\n    email\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "lifebank ": {\n    \u201cname": "National Blood Bank",\n    "email": "blood@gmail.com"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"type-language"},"Type Language"),(0,r.kt)("p",null,'GraphQL services can be written in any language. The "GraphQL schema language" - it\'s similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way.'),(0,r.kt)("h3",{id:"object-types-and-fields"},"Object Types and Fields"),(0,r.kt)("p",null,"The most basic components of a GraphQL schema are object types. In the GraphQL schema language, we might represent it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Character {\n name: String!\n appearsIn: [Episode!]!\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Character")," is a GraphQL Object Type, meaning it's a type with some fields. Most of the types in your schema will be object types.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"appearsIn")," are fields on the Character type. That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the \u2018Character\u2019 type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"String")," is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"[Episode!]!")," represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items) when you query the \u2018appearsIn\u2019 field. "))),(0,r.kt)("h3",{id:"arguments-1"},"Arguments"),(0,r.kt)("p",null,"Every field on a GraphQL object type can have zero or more arguments. All arguments in GraphQL are passed by name specifically,  can be either required or optional. When an argument is optional, we can define a default value - if the unit argument is not passed, it will be set to METER by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"type Starship {\n id: ID!\n name: String!\n length(unit: LengthUnit = METER): Float\n}\n")),(0,r.kt)("h3",{id:"the-query-and-mutation-types"},"The Query and Mutation Types"),(0,r.kt)("p",null,"Every GraphQL service has a query type and may or may not have a mutation type. These types are the same as a regular object type, but they are special because they define the entry point of every GraphQL query. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Schema"',title:'"Schema"'},"schema {\n query: Query\n mutation: Mutation\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'query {\n  hero {\n    name\n  }\n  droid(id: "2000") {\n    name\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n        "name": "R2-D2"\n    },\n    "droid": {\n        "name": "C-3PO"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Mutations work in a similar way - you define fields on the Mutation type, and those are available as the root mutation fields you can call in your query."),(0,r.kt)("h3",{id:"scalar-types"},"Scalar Types"),(0,r.kt)("p",null,"Scalar types  represent the leaves of the query. We know this because those fields don't have any sub-fields - they are the leaves of the query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  hero {\n    name\n    appearsIn\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "hero": {\n       "name": "R2-D2",\n       "appearsIn": [\n           "NEWHOPE",\n           "EMPIRE",\n           "JEDI"\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"GraphQL comes with a set of default scalar types out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Int"),": A signed 32\u2010bit integer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Float"),": A signed double-precision floating-point value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String"),": A UTF\u20108 character sequence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean"),": true or false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ID"),": The ID scalar type represents a unique identifier The ID type is serialized in the same way as a String.")),(0,r.kt)("h3",{id:"enumeration-types"},"Enumeration Types"),(0,r.kt)("p",null,"Also called Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validate that any arguments of this type are one of the allowed values."),(0,r.kt)("li",{parentName:"ul"},"Communicate through the type system that a field will always be one of a finite set of values.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Enum"',title:'"Enum"'},"enum Episode {\n  NEWHOPE\n  EMPIRE\n  JEDI\n}\n")),(0,r.kt)("h3",{id:"lists-and-non-null"},"Lists and Non-Null"),(0,r.kt)("p",null,"The Non-Null type modifier be used when defining arguments for a field, which will cause the GraphQL server to return a validation error if a null value is passed as that argument, whether in the GraphQL string or in the variables."),(0,r.kt)("p",null,"Lists work in a similar way: We can use a type modifier to mark a type as a List, which indicates that this field will return an array of that type."),(0,r.kt)("p",null,"The Non-Null and List modifiers can be combined. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type"',title:'"Type"'},"type Character {\n  name: String!\n  appearsIn: [Episode]!\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "id": null\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"query DroidById($id: ID!) {\n  droid(id: $id) {\n    name\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "errors": [\n    {\n       "message": "Variable \\"$id\\" of non-null type \\"ID!\\" must not be null.",\n       "locations": [\n        {\n          "line": 1,\n          "column": 17\n        }\n    ]\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("p",null,"An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Interface"',title:'"Interface"'},"interface Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 1"',title:'"Example','1"':!0},"type Human implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  starships: [Starship]\n  totalCredits: Int\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Example 2"',title:'"Example','2"':!0},"type Droid implements Character {\n  id: ID!\n  name: String!\n  friends: [Character]\n  appearsIn: [Episode]!\n  primaryFunction: String\n}\n")),(0,r.kt)("p",null,"Interfaces are useful when you want to return an object or set of objects."),(0,r.kt)("h3",{id:"union-types"},"Union Types"),(0,r.kt)("p",null,"Union types are very similar to interfaces, but they don't get to specify any common fields between the types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Union"',title:'"Union"'},"union SearchResult = Human | Droid | Starship\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},'{\n  search(text: "an") {\n    __typename\n    ... on Human {\n        name\n        height\n    }\n\n    ... on Droid {\n        name\n        primaryFunction\n    }\n\n    ... on Starship {\n        name\n        length\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "search": [\n    {\n        "__typename": "Human",\n        "name": "Han Solo",\n        "height": 1.8\n    },\n    {\n        "__typename": "Human",\n        "name": "Leia Organa",\n        "height": 1.5\n    },\n    {\n        "__typename": "Starship",\n        "name": "TIE Advanced x1",\n        "length": 9.2\n    }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"input-types"},"Input Types"),(0,r.kt)("p",null,"In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword input instead of type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input Type"',title:'"Input','Type"':!0},"input ReviewInput {\n stars: Int!\n commentary: String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Variables"',title:'"Variables"'},'{\n  "ep": "JEDI",\n  "review": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n  createReview(episode: $ep, review: $review) {\n    stars\n    commentary\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "createReview": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The fields on an input object type can themselves refer to input object types, but you can't mix input and output types in your schema. Input object types also can't have arguments on their fields."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Type System"',title:'"Type','System"':!0},"type Query {\n    human(id: ID!): Human\n}\n\ntype Human {\n    name: String\n    appearsIn: [Episode]\n    starships: [Starship]\n}\n\nenum Episode {\n    NEWHOPE\n    EMPIRE\n    JEDI\n}\n\ntype Starship {\n    name: String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Input"',title:'"Input"'},"{\n  human(id: 1002) {\n    name\n    appearsIn\n    starships {\n        name\n    }\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="Output"',title:'"Output"'},'{\n  "data": {\n    "human": {\n        "name": "Han Solo",\n        "appearsIn": [\n            "NEWHOPE",\n            "EMPIRE",\n            "JEDI"\n        ],\n        "starships": [\n        {\n            "name": "Millenium Falcon"\n        },\n        {\n            "name": "Imperial shuttle"\n        }\n        ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer. When a field is executed, the corresponding resolver is called to produce the next value."),(0,r.kt)("h2",{id:"language-support"},"Language Support"),(0,r.kt)("h3",{id:"top-5"},"Top 5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.javascript.com"},"JavaScript")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://golang.org"},"Go")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.php.net"},"PHP")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org"},"Python")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.java.com/en/"},"Java"))),(0,r.kt)("h3",{id:"javascript"},"JavaScript"),(0,r.kt)("h4",{id:"serve"},"Serve"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL.js:")," The reference implementation of the GraphQL specification, designed for running GraphQL in a Node.js environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apollo Server:")," A set of GraphQL server packages from Apollo that work with various Node.js HTTP frameworks (Express, Connect, Hapi, Koa etc).")),(0,r.kt)("h4",{id:"client"},"Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apollo Client:")," A powerful JavaScript GraphQL client, designed to work well with React, React Native, Angular 2, or just plain JavaScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL Request:")," A simple and flexible JavaScript GraphQL client that works in all JavaScript environments (the browser, Node.js, and React Native) - basically a lightweight wrapper around fetch. ")),(0,r.kt)("h3",{id:"tools"},"Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphiQL:")," An interactive in-browser GraphQL IDE."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GraphQL CLI:")," A command line tool for common GraphQL development workflows.")),(0,r.kt)("h4",{id:"services"},"Services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#apollo"},(0,r.kt)("strong",{parentName:"a"},"Apollo:"))," A cloud service for monitoring the performance and usage of your GraphQL backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#hasura"},(0,r.kt)("strong",{parentName:"a"},"Hasura:"))," Hasura connects to your databases and microservices and instantly gives you a production-ready GraphQL API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://guide.eoscostarica.io/docs/developer-tools#postman"},(0,r.kt)("strong",{parentName:"a"},"Postman:"))," An HTTP Client that supports editing GraphQL queries.")))}d.isMDXComponent=!0}}]);