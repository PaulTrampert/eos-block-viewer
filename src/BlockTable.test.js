import React from 'react';
import {shallow} from 'enzyme';
import BlockTable from './BlockTable';

describe('BlockTable', () => {
  let subject;
  let blocks;

  beforeEach(() => {
    blocks = [
      {
        id: '1',
        timestamp: '2020-02-05T03:46:32.000',
        transactions: []
      },
      {
        id: '2',
        timestamp: '2020-02-04T03:46:32.000',
        transactions: []
      },
      {
        id: '3',
        timestamp: '2020-02-03T03:46:32.000',
        transactions: []
      },
    ];

    subject = shallow(<BlockTable blocks={blocks} />);
  });

  describe('render', () => {
    describe('when blocks are loading', () => {
      beforeEach(() => {
        subject.setProps({loadingBlocks: true});
      });

      it('renders the TableLoadingView', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe("when blocks are loaded", () => {
      it('renders a table with all the blocks', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when there are no blocks loaded', () => {

      beforeEach(() => {
        subject.setProps({blocks:[]});
      });

      it('renders the EmptyTableView', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});