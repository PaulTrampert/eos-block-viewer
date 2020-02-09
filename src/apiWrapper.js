import {JsonRpc} from 'eosjs';

const api = new JsonRpc("https://api.eosnewyork.io");

const abiCache = {};

const apiWrapper = {
  getLastBlocks: async (limit = 10) => {
    const {head_block_num} = await api.get_info();
    let blocks = []
    for(let i = 0; i < limit; i++) {
      let block = await api.get_block(head_block_num - i);
      blocks.push(block);
    }
    return blocks;
  },

  getAbi: async (accountName) => {
    if(!abiCache[accountName]) {
      abiCache[accountName] = await api.get_abi(accountName);
    }
    return abiCache[accountName];
  }
};

export {
  apiWrapper as default,
  abiCache
};