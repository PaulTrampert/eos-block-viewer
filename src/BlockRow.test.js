import React from 'react';
import {shallow} from 'enzyme';
import BlockRow from './BlockRow';
import countActions from './countActions';
import SummaryBlockRow from './SummaryBlockRow';
import FullBlockRow from './FullBlockRow';

jest.mock('./countActions');

describe('BlockRow', () => {
  let block;
  let subject;

  beforeEach(() => {
    block = {
      id: '1',
      timestamp: '2020-02-05T03:46:32.000',
      transactions: []
    };

    countActions.mockReturnValue(0);

    subject = shallow(<BlockRow block={block} />);
  });

  describe('render', () => {
    it("binds showDetails to the SummaryBlockRow's onClick event", () => {
      expect(subject.find(SummaryBlockRow).props().onClick).toBe(subject.instance().showDetails);
    });

    it('renders the block data in a table row', () => {
      expect(subject).toMatchSnapshot();
    });

    describe('when show details is true', () => {
      beforeEach(() => {
        subject.setState({showDetails: true});
      });

      it("binds hideDetails to the FullBlockRow's onClick event", () => {
        expect(subject.find(FullBlockRow).props().onClick).toBe(subject.instance().hideDetails);
      });

      it('renders the full block details', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});