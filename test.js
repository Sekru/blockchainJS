const BlockChain = require('./blockchain')();

BlockChain.createGenesisBlock('data');
BlockChain.createNextBlock('data');
BlockChain.createNextBlock('data');
BlockChain.createNextBlock('data');
BlockChain.getChain();
