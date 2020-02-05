import api from './apiWrapper';
import {JsonRpc} from 'eosjs';

jest.mock('eosjs', () => ({
  JsonRpc: jest.fn().mockImplementation(() => ({
    get_info: () => ({
      head_block_num: 987654321
    }),
    get_block: blockNum => ({id: blockNum})
  }))
}));

describe('apiWrapper', () => {

  it('creates a singleton api', () => {
    expect(JsonRpc).toHaveBeenCalledWith("https://api.eosnewyork.io");
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