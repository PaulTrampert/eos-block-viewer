import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import MainNav from './MainNav';
import api from './apiWrapper';

jest.mock('./apiWrapper');

describe('App', () => {

  describe('loadBlocks', () => {
    let blocks;
    let subject;
    let instance;

    beforeEach(() => {
      subject = shallow(<App />);
      instance = subject.instance();
      blocks = [];
      api.getLastBlocks.mockReturnValue(blocks);
    });

    it('loads blocks from the api', async () => {
      await instance.loadBlocks();

      expect(api.getLastBlocks).toHaveBeenCalledWith();
    });

    it('puts the blocks in state', async () => {
      await instance.loadBlocks();

      expect(subject.state().blocks).toBe(blocks);
    });
  });

  describe('render', () => {
    it('is rendered properly', () => {
      const result = shallow(<App />);

      expect(result).toMatchSnapshot();
    });

    it("binds loadBlocks to MainNav's onRequestBlocks event", () => {
      const result = shallow(<App />);

      expect(result.find(MainNav).props().onRequestBlocks).toBe(result.instance().loadBlocks);
    });
  });
});
