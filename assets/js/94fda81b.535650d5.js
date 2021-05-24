(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[6074],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return t?o.createElement(h,s(s({ref:n},u),{},{components:t})):o.createElement(h,s({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7829:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),s={id:"command-line",title:"Command Line Interface",sidebar_label:"Command Line"},i={unversionedId:"tools/command-line",id:"tools/command-line",isDocsHomePage:!1,title:"Command Line Interface",description:"Cleos Command",source:"@site/docs/tools/command-line.md",sourceDirName:"tools",slug:"/tools/command-line",permalink:"/docs/tools/command-line",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tools/command-line.md",version:"current",lastUpdatedBy:"Xavier",lastUpdatedAt:1621891866,formattedLastUpdatedAt:"5/24/2021",sidebar_label:"Command Line",frontMatter:{id:"command-line",title:"Command Line Interface",sidebar_label:"Command Line"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/tools/glossary"},next:{title:"Nodeos Command Line Reference",permalink:"/docs/tools/nodeos-command-line-reference"}},c=[{value:"Cleos Command",id:"cleos-command",children:[]},{value:"Cleos Subcommands",id:"cleos-subcommands",children:[]},{value:"Cleos Example",id:"cleos-example",children:[]}],l={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"cleos-command"},"Cleos Command"),(0,r.kt)("p",null,"Show the complete command reference in the following link to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"Cleos Documentation")),(0,r.kt)("p",null,"To get a full list of the available ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," commands, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Command Line Interface to EOSIO Client\nUsage: cleos [OPTIONS] SUBCOMMAND\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -u,--url TEXT=http://127.0.0.1:8888/\n                              the http/https URL where nodeos is running\n   --wallet-url TEXT=unix:///Users/username/eosio-wallet/keosd.sock\n                              the http/https URL where keosd is running\n  -r,--header                 pass specific HTTP header; repeat this option to pass multiple headers\n  -n,--no-verify              don't verify peer certificate when using HTTPS\n  --no-auto-keosd             don't automatically launch a keosd if one is not currently running\n  -v,--verbose                output verbose errors and action console output\n  --print-request             print HTTP request to STDERR\n  --print-response            print HTTP response to STDERR\n\nSubcommands:\n  version                     Retrieve version information\n  create                      Create various items, on and off the blockchain\n  convert                     Pack and unpack transactions\n  get                         Retrieve various items and information from the blockchain\n  set                         Set or update blockchain state\n  transfer                    Transfer tokens from account to account\n  net                         Interact with local p2p network connections\n  wallet                      Interact with local wallet\n  sign                        Sign a transaction\n  push                        Push arbitrary transactions to the blockchain\n  multisig                    Multisig contract commands\n  wrap                        Wrap contract commands\n  system                      Send eosio.system contract action to the blockchain.\n")),(0,r.kt)("h3",{id:"cleos-subcommands"},"Cleos Subcommands"),(0,r.kt)("p",null,"To get help whit whatever subcommand in particular, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"code SUBCOMMAND --help"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Create various items, on and off the blockchain\nUsage: cleos create SUBCOMMAND\n\nSubcommands:\n  key                         Create a new keypair and print the public and private keys\n  account                     Create a new account on the blockchain\n                              (assumes system contract does not restrict RAM usage)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," can also provide help for subcommands use within subcommands. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create account --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)\nUsage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n")),(0,r.kt)("h2",{id:"cleos-example"},"Cleos Example"),(0,r.kt)("p",null,"The following command ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," creates a local wallet called ",(0,r.kt)("inlineCode",{parentName:"p"},"my_wallet")," and shows the password on the screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos wallet create -n my_wallet --to-console\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Creating wallet: my_wallet\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5JbF34UdA193Eps1bjrWVJRaNMt1VKddLn4Dx6SPVTfMDRnMBWN"\n')))}u.isMDXComponent=!0}}]);