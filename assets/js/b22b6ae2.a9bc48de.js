"use strict";(self.webpackChunkguide_eoscostarica_io=self.webpackChunkguide_eoscostarica_io||[]).push([[887],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},368:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},l=void 0,p={unversionedId:"tutorials/node-installation",id:"tutorials/node-installation",title:"EOSIO Node Installation",description:"A Producer Node Setup",source:"@site/docs/tutorials/node-installation.md",sourceDirName:"tutorials",slug:"/tutorials/node-installation",permalink:"/docs/tutorials/node-installation",editUrl:"https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/docs/tutorials/node-installation.md",tags:[],version:"current",lastUpdatedBy:"Fabian Vives",lastUpdatedAt:1656451092,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"node-installation",title:"EOSIO Node Installation",sidebar_label:"Node Installation"},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/docs/tutorials/kubernetes"},next:{title:"EOSIO Private Network Installation",permalink:"/docs/tutorials/private-network-installation"}},d=[{value:"A Producer Node Setup",id:"a-producer-node-setup",children:[],level:2},{value:"Install EOSIO from Precompiled Binaries",id:"install-eosio-from-precompiled-binaries",children:[],level:2},{value:"Node Setup",id:"node-setup",children:[{value:"<code>config.ini</code>",id:"configini",children:[],level:3},{value:"<code>genesis.json</code>",id:"genesisjson",children:[],level:3},{value:"<code>start.sh</code>",id:"startsh",children:[],level:3},{value:"Create <code>testproducer</code> account",id:"create-testproducer-account",children:[],level:3},{value:"Register <code>testproducer</code> as a Producer Node",id:"register-testproducer-as-a-producer-node",children:[],level:3},{value:"Uninstall <code>eosio</code>",id:"uninstall-eosio",children:[],level:3}],level:2},{value:"Start a Node Using a Snapshot",id:"start-a-node-using-a-snapshot",children:[],level:2},{value:"Testnet Nodes",id:"testnet-nodes",children:[{value:"Configure Jungle Testnet Node",id:"configure-jungle-testnet-node",children:[],level:3},{value:"Configure Kylin Testnet Node",id:"configure-kylin-testnet-node",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-producer-node-setup"},"A Producer Node Setup"),(0,r.kt)("p",null,"On EOSIO, a producing node and other types of nodes are defined and differentiated by enabling specific ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index"},"Nodeos Plugins"),". For example, to define a non-producing node, you need to except ",(0,r.kt)("inlineCode",{parentName:"p"},"producer_plugin"),". This posibility of customization allows to expose one or more services publicly or privately by enabling one or more of those plugins."),(0,r.kt)("p",null,'If you are trying to set up a "Full Node", you may find ',(0,r.kt)("a",{parentName:"p",href:"https://eoscommunity.org/t/where-is-the-best-guide-on-setting-up-a-full-eos-node/621"},"this link")," helpful."),(0,r.kt)("p",null,"Let's proceed to setup a Producing Node using EOSIO Technology. You can also find more useful information about this topic ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/nodeos/usage/node-setups/producing-node"},"here"),"."),(0,r.kt)("h2",{id:"install-eosio-from-precompiled-binaries"},"Install EOSIO from Precompiled Binaries"),(0,r.kt)("p",null,"Download the latest version of EOSIO for your OS from: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases/tag/v2.0.6"},"Github"),"."),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," to download ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.debian.org/es/dpkg"},"dpkg")," and install ",(0,r.kt)("inlineCode",{parentName:"p"},"eosio"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.1.0-rc2/eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n$ sudo dpkg -i ./eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb\n")),(0,r.kt)("p",null,"It will download all dependencies and install EOSIO to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/opt/eosio"),"."),(0,r.kt)("h2",{id:"node-setup"},"Node Setup"),(0,r.kt)("p",null,"Once you installed the precompiled binaries following the above commands, let's create a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"testproducer")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"config.ini"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir testproducer\n\n$ touch ~/testproducer/config.ini\n$ touch ~/testproducer/genesis.json\n$ touch ~/testproducer/start.sh\n")),(0,r.kt)("p",null,"Now, let's write down some code into that files:"),(0,r.kt)("h3",{id:"configini"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.ini")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"agent-name = testproducer\n\n# PLUGINS\n# Required to process and aggregate chain data on an EOSIO node.\nplugin = eosio::chain_plugin\n# Exposes functionality to the RPC API interface\nplugin = eosio::chain_api_plugin\n# Required to enable any RPC API functionality provided by a nodeos or keosd instance.\nplugin = eosio::http_plugin\n# Loads functionality required for a node to produce blocks.\nplugin = eosio::producer_plugin\n# Exposes a number of endpoints for the producer_plugin to the RPC API interface\nplugin = eosio::producer_api_plugin\n\n# CHAIN \nchain-state-db-size-mb = 16384\nreversible-blocks-db-size-mb = 512\ncontracts-console = true\nabi-serializer-max-time-ms = 2000\nwasm-runtime = wabt\nenable-stale-production = false\npause-on-startup = false\nmax-irreversible-block-age = -1\ntxn-reference-block-lag = 0\n\n# BLOCK PRODUCER\nproducer-name = testproducer\n\n# PEERING NETWORK\np2p-server-address =  TESTPRODUCER_IP:9876     # CHANGE THIS ACCORDING TO THE NODE IP\np2p-listen-endpoint = 0.0.0.0:9876\np2p-max-nodes-per-host = 150\nmax-clients = 150\nconnection-cleanup-period = 30\nsync-fetch-span = 2000\nallowed-connection = any\n\np2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT\np2p-peer-address = PEER1_NODE_IP:PEER1_NODE_PORT\np2p-peer-address = PEER2_NODE_IP:PEER2_NODE_PORT\np2p-peer-address = API_NODE_IP:API_NODE_PORT\n# You can continue adding peer nodes here\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that above there are items that need to be replaced with their corresponding values.")),(0,r.kt)("h3",{id:"genesisjson"},(0,r.kt)("inlineCode",{parentName:"h3"},"genesis.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "initial_timestamp": "2018-12-05T08:55:11.000",\n  "initial_key": "EOS_PUB_DEV_KEY",\n  "initial_configuration": {\n    "max_block_net_usage": 1048576,\n    "target_block_net_usage_pct": 1000,\n    "max_transaction_net_usage": 524288,\n    "base_per_transaction_net_usage": 12,\n    "net_usage_leeway": 500,\n    "context_free_discount_net_usage_num": 20,\n    "context_free_discount_net_usage_den": 100,\n    "max_block_cpu_usage": 100000,\n    "target_block_cpu_usage_pct": 500,\n    "max_transaction_cpu_usage": 50000,\n    "min_transaction_cpu_usage": 100,\n    "max_transaction_lifetime": 3600,\n    "deferred_trx_expiration_window": 600,\n    "max_transaction_delay": 3888000,\n    "max_inline_action_size": 4096,\n    "max_inline_action_depth": 4,\n    "max_authority_depth": 6\n  },\n  "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"EOS_PUB_DEV_KEY")," with its corresponding value. To see how to generate a key pair, check out ",(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/eos-learn/private-keys/"},"our guide")," about this topic.")),(0,r.kt)("h3",{id:"startsh"},(0,r.kt)("inlineCode",{parentName:"h3"},"start.sh")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\nDATA_DIR="blockchain"\nCONFIG_DIR="./blockchain/config"\nEOS_PUB_KEY=EOS_PUB_KEY  #REPLACE THIS WITH ITS CORRESPONDING VALUE\nEOS_PRIV_KEY=EOS_PRIV_KEY #REPLACE THIS WITH ITS CORRESPONDING VALUE\necho "Starting Producer Node...";\nset -e;\nulimit -n 65535\nulimit -s 64000\nmkdir -p $CONFIG_DIR\ncp ./config.ini $CONFIG_DIR/config.ini\npid=0;\nnodeos=$"nodeos \\\n --config-dir $CONFIG_DIR \\\n --data-dir $DATA_DIR \\\n --blocks-dir $DATA_DIR/blocks \\\n --signature-provider $EOS_PUB_KEY=KEY:$EOS_PRIV_KEY" ;\nterm_handler() {\n if [ $pid -ne 0 ]; then\n   kill -SIGTERM "$pid";\n   wait "$pid";\n fi\n exit 0;\n}\nstart_nodeos() {\n $nodeos &\n sleep 10;\n if [ -z "$(pidof nodeos)" ]; then\n   $nodeos --hard-replay-blockchain &\n fi\n}\nstart_fresh_nodeos() {\n echo \'Starting new chain from genesis JSON\'\n $nodeos --delete-all-blocks --genesis-json genesis.json &\n}\ntrap \'echo "Shutdown of EOSIO service...";kill ${!}; term_handler\' 2 15;\nif [ ! -d $DATA_DIR/blocks ]; then\n start_fresh_nodeos &\nelif [ -d $DATA_DIR/blocks ]; then\n start_nodeos &\nfi\npid="$(pidof nodeos)"\nwhile true\ndo\n tail -f /dev/null & wait ${!}\ndone\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Maybe you need to assign permission executions to ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh"),", for this execute: ",(0,r.kt)("inlineCode",{parentName:"p"},"$ chmod 755 start.sh"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Execute ",(0,r.kt)("inlineCode",{parentName:"strong"},"start.sh")," script"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./start.sh\n")),(0,r.kt)("p",null,"For a more detailed information about the above command, please go ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"here"),"."),(0,r.kt)("h3",{id:"create-testproducer-account"},"Create ",(0,r.kt)("inlineCode",{parentName:"h3"},"testproducer")," account"),(0,r.kt)("p",null,"On an EOSIO based blockchain, account creation carries ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram"},"RAM")," consumption, so it is necessary to pay for new accounts. In the following command replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATOR")," placeholder with an existing account with enough resources to execute the operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cleos -u http://DESTINATION_NODE_ADDRESS create account CREATOR testproducer EOS_PUB_KEY\n")),(0,r.kt)("p",null,"Depending on which network you are configure the node for, you can create account with the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://monitor3.jungletestnet.io/#account"},"Jungle Testnet Account Creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kylin.eosx.io/tools/account/create"},"Kylin Testnet EOSx Account Creation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.eosx.io/tools/account/create"},"Create new account on EOS Mainnet"))),(0,r.kt)("h3",{id:"register-testproducer-as-a-producer-node"},"Register ",(0,r.kt)("inlineCode",{parentName:"h3"},"testproducer")," as a Producer Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ cleos -u http://DESTINATION_NODE_ADDRESS system regproducer testproducer EOS_PUB_KEY "www.testproducer.testlink" 0\n')),(0,r.kt)("p",null,"For a more detailed information about the above command, please go ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer"},"here"),"."),(0,r.kt)("p",null,"Now, your node is set up. If you configured this node to operate in a Private Network, you need to make sure your node is included in the producers schedule. Check our ",(0,r.kt)("a",{parentName:"p",href:"https://guide.eoscostarica.io/docs/tutorials/private-network-installation/#set-block-producers-schedule"},"guide")," to see more information about this."),(0,r.kt)("p",null,"On the other hand, if you are looking to produce blocks in a testnet, token holders need to vote for you in order to be in the 21 top block producers."),(0,r.kt)("h3",{id:"uninstall-eosio"},"Uninstall ",(0,r.kt)("inlineCode",{parentName:"h3"},"eosio")),(0,r.kt)("p",null,"To uninstall the EOSIO built/installed binaries and dependencies, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -r eosio\n")),(0,r.kt)("h2",{id:"start-a-node-using-a-snapshot"},"Start a Node Using a Snapshot"),(0,r.kt)("p",null,"In some situations, it is convenient to start a node using a snapshot if you wish to create a valid chain state to start from. Make sure you have deleted all existing data in the directory: ",(0,r.kt)("inlineCode",{parentName:"p"},"~./local/share/eosio/nodeos/data/*"),", since it is recommended."),(0,r.kt)("p",null,"So, let's say we are using a snapshot from Jungle Testnet.\nSo, for this execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ wget https://backup.cryptolions.io/Jungle/snapshots/latest-snapshot.bin -P ~./local/share/eosio/nodeos/data/snapshots/\n")),(0,r.kt)("p",null,"Now that the snapshot is downloaded, you can use the same ",(0,r.kt)("a",{parentName:"p",href:"###startsh"},(0,r.kt)("inlineCode",{parentName:"a"},"start.sh"))," script to start the node, just delete ",(0,r.kt)("inlineCode",{parentName:"p"},"--genesis-json")," flag in the script, so the function ",(0,r.kt)("inlineCode",{parentName:"p"},"start_fresh_nodes")," in the file will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"start_fresh_nodeos() {\n echo 'Starting new chain from genesis JSON'\n $nodeos --delete-all-blocks &\n}\n")),(0,r.kt)("p",null,"For more information, please go ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/v2.1/nodeos/replays/how-to-replay-from-a-snapshot"},"here"),". Also, go ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/search?query=snapshot"},"here"),' to see all available doc entries for "Snapshot" on the ',(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/"},"developer.eos.io")," portal."),(0,r.kt)("h2",{id:"testnet-nodes"},"Testnet Nodes"),(0,r.kt)("h3",{id:"configure-jungle-testnet-node"},"Configure Jungle Testnet Node"),(0,r.kt)("p",null,"If you are seeking to setup a node on Jungle Testnet, you can go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOS-Jungle-Testnet/Node-Manual-Installation"},"EOS Jungle Testnet - Node Manual Installation")," on Github. Also, you can use ",(0,r.kt)("a",{parentName:"p",href:"http://monitor.jungletestnet.io/#register"},"Testnet Auto-Installer script"),". These tools were created by ",(0,r.kt)("a",{parentName:"p",href:"https://cryptolions.io/home"},"cryptolions.io")),(0,r.kt)("h3",{id:"configure-kylin-testnet-node"},"Configure Kylin Testnet Node"),(0,r.kt)("p",null,"To configure a node in the Kylin Testnet, please go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet")," repo and follow instructions there."),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.eos.io/search?query=snapshot"},"Snapshot Related Info"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://monitor.jungletestnet.io/#register"},"Cryptolions Testnet Auto-Installer script"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cryptokylin/CryptoKylin-Testnet"},"CryptoKylin-Testnet Github repo"))))}u.isMDXComponent=!0}}]);