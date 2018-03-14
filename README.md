# blockchainJS

Simple BlockChain lib to generate new chain of blocks.

```
const BlockChain = require('./blockchain')();

BlockChain.createGenesisBlock('data');
BlockChain.createNextBlock('data');
BlockChain.createNextBlock('data');
BlockChain.createNextBlock('data');
BlockChain.getChain();
```

```[  
   {  
      index:0,
      previousHash:'0',
      timestamp:1521047047856,
      data:'data',
      hash:'0'
   },
   {  
      index:1,
      previousHash:'0',
      timestamp:1521047047856,
      data:'data',
      hash:'81f17e40516fc877111008177f5af8e4823e357f76850a53d476f26fdf5eb3e0'
   },
   {  
      index:2,
      previousHash:'81f17e40516fc877111008177f5af8e4823e357f76850a53d476f26fdf5eb3e0',
      timestamp:1521047047857,
      data:'data',
      hash:'d8bc8d0fe69f3e4c2a72f3cb9a692b2806957cdc1b8c45eee735eabc126b61cb'
   },
   {  
      index:3,
      previousHash:'d8bc8d0fe69f3e4c2a72f3cb9a692b2806957cdc1b8c45eee735eabc126b61cb',
      timestamp:1521047047857,
      data:'data',
      hash:'71513206b022b605d4eb25fa32120abccce2a4a5b3e8fbf80421f66debd429f9'
   }
]
``
