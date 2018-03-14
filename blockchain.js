const crypto = require('cryptojs').Crypto;

const BlockChain = () => {
    const chain = [];

    const createGenesisBlock = data => {
        chain.push(createBlock(0, '0', new Date().getTime(), data, '0'));
    };

    const getLatestBlock = () => {
        return chain[chain.length - 1];
    };

    const createBlock = (index, previousHash, timestamp, data, hash) => {
        return {
            index,
            previousHash: previousHash.toString(),
            timestamp,
            data,
            hash: hash.toString()
        }
    };

    const createNextBlock = blockData => {
        const previousBlock = getLatestBlock();
        const nextIndex = previousBlock.index + 1;
        const nextTimestamp = new Date().getTime();
        const nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
        isChainValid(nextHash);
        chain.push(createBlock(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash));
    };

    const calculateHash = (index, previousHash, timestamp, data) => {
        return crypto.SHA256(index + previousHash + timestamp + data).toString();
    };

    const isChainValid = (nextHash) => {
        for (let i = 1; i < chain.length; i++){
            const currentBlock = chain[i];
            const previousBlock = chain[i - 1];

            if (currentBlock.hash === nextHash) {
                throw new Error('Something is wrong with chain!');
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                throw new Error('Something is wrong with chain!');
            }
        }
    };

    const getChain = () => { return chain };

    return {
        createGenesisBlock,
        createNextBlock,
        getChain
    };
};

module.exports = BlockChain;
