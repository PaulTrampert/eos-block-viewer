import api from './apiWrapper';
import {JsonRpc} from 'eosjs';
import {abiCache} from './apiWrapper';

jest.mock('eosjs', () => ({
  JsonRpc: jest.fn().mockImplementation(() => ({
    get_info: () => ({
      head_block_num: 987654321
    }),
    get_block: blockNum => ({id: blockNum}),
    get_abi: jest.fn().mockImplementation(account => ({account}))
  }))
}));

describe('apiWrapper', () => {

  it('creates a singleton api', () => {
    expect(JsonRpc).toHaveBeenCalledWith("https://api.eosnewyork.io");
  });

  describe('getAbi', () => {
    beforeEach(() => {
      for(let key in abiCache) {
        delete abiCache[key];
      }
    })

    it('calls the api to fetch and cache uncached abis', async () => {
      await api.getAbi('bloop');

      expect(abiCache['bloop']).toEqual({account: 'bloop'});
    });

    it("doesn't try to refetch cached abis", async () => {
      abiCache['bloop'] = {account: 'blerp'};
      await api.getAbi('bloop');

      expect(abiCache['bloop']).toEqual({account: 'blerp'});
    })
  });

  describe('getLastBlocks', () => {

    it('gets the last 10 blocks by default', async () => {
      let result = await api.getLastBlocks();

      expect(result).toEqual([
        {id: 987654321},
        {id: 987654320},
        {id: 987654319},
        {id: 987654318},
        {id: 987654317},
        {id: 987654316},
        {id: 987654315},
        {id: 987654314},
        {id: 987654313},
        {id: 987654312}
      ]);
    });

    it('gets the requested number of blocks when specified', async () => {
      let result = await api.getLastBlocks(1);

      expect(result).toEqual([
        {id: 987654321}
      ]);
    })
  });
});