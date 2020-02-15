import React from 'react';
import {shallow} from 'enzyme';
import api from './apiWrapper';
import getActionsFromBlock from './getActionsFromBlock';
import RicardianBlockView from './RicardianBlockView';

jest.mock('./apiWrapper');
jest.mock('./getActionsFromBlock');

describe('RicardianBlockView', () => {
  let subject;
  let instance;
  let block;
  let actions;

  beforeEach(() => {
    actions = [
      {account: 'a'},
      {account: 'b'},
      {account: 'b'}
    ];

    block = {
      transactions: [
        {
          trx: {
            id: 'asdf',
            transaction: {}
          }
        },
        {
          trx: {
            id: ';lkj',
            transaction: {}
          }
        }
      ]
    };

    api.getAbi.mockImplementation((account) => ({account, someprop: 'bloop'}));
    getActionsFromBlock.mockReturnValue(actions);

    subject = shallow(<RicardianBlockView block={block} />);
    instance = subject.instance();
  });

  describe('componentDidMount', () => {
    beforeEach(() => {
      api.getAbi.mockClear();
    });

    it('gets the actions from the block', async () => {
      await instance.componentDidMount();

      expect(getActionsFromBlock).toHaveBeenCalledWith(block);
    });

    it("gets the abi once for each unique action account", async () => {
      await instance.componentDidMount();

      expect(api.getAbi.mock.calls).toEqual([["a"], ["b"]]);
    });

    it('saves the abis to state', async () => {
      await instance.componentDidMount();

      expect(subject.state().abis).toEqual({
        'a': {account: 'a', someprop: 'bloop'},
        'b': {account: 'b', someprop: 'bloop'}
      });
    });
  });

  describe('render', () => {
    describe("when abis have not been loaded", () => {
      it('renders the loading spinner', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when abis have been loaded', () => {
      beforeEach(() => {
        subject.setState({
          abis: {
            'a': {},
            'b': {}
          }
        });
      });

      it('renders each transaction in a RicardianTransaction view', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});