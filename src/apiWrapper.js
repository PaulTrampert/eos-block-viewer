import {JsonRpc} from 'eosjs';

const api = new JsonRpc("https://api.eosnewyork.io");

export default {
  getLastBlocks: async (limit = 10) => {
    const {head_block_num} = await api.get_info();
    let blockPromises = []
    for(let i = 0; i < limit; i++) {
      let blockPromise = api.get_block(head_block_num - i);
      blockPromises.push(blockPromise);
    }
    return Promise.all(blockPromises);
  }
}