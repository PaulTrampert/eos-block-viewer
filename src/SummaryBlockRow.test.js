import React from 'react';
import {shallow} from 'enzyme';
import SummaryBlockRow from './SummaryBlockRow';
import countActions from './countActions';

jest.mock('./countActions');
jest.spyOn(global, 'Date')
  .mockImplementation(() => ({
    toLocaleString: () => "this is the local representation of datetime"
  }));

describe('SummaryBlockRow', () => {
  let subject;
  let block;
  let onClick;

  beforeEach(() => {
    block = {
      id: 'asdfasdf',
      timestamp: '2020-02-08T20:20:20',
      transactions: []
    };

    onClick = jest.fn();

    countActions.mockReturnValue(0);

    subject = shallow(<SummaryBlockRow block={block} onClick={onClick} />);
  });

  describe('render', () => {
    it('binds the onClick event', () => {
      expect(subject.find('tr').props().onClick).toBe(onClick);
    });

    it('counts the number of actions', () => {
      expect(countActions).toHaveBeenCalledWith(block);
    });

    it("renders the block's id, timestamp, and the number of actions", () => {
      expect(subject).toMatchSnapshot();
    });
  });
});