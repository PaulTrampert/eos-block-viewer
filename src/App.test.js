import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import MainNav from './MainNav';
import api from './apiWrapper';

jest.mock('./apiWrapper');

describe('App', () => {
  let subject;
  let instance;

  beforeEach(() => {
    subject = shallow(<App />);
    instance = subject.instance();
  })

  describe('loadBlocks', () => {
    let blocks;

    beforeEach(() => {
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
    it('renders the main nav and block table', () => {
      expect(subject).toMatchSnapshot();
    });

    it("binds loadBlocks to MainNav's onRequestBlocks event", () => {
      expect(subject.find(MainNav).props().onRequestBlocks).toBe(subject.instance().loadBlocks);
    });

    describe('while blocks are loading', () => {
      beforeEach(() => {
        subject.setState({loadingBlocks: true});
      });

      it('passes the loadingBlocks state to the MainNav', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});
