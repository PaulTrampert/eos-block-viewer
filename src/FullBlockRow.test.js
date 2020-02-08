import React from 'react';
import {shallow} from 'enzyme';
import FullBlockRow from './FullBlockRow';

describe('FullBlockRow', () => {
  let subject;
  let block;
  let onClick;

  beforeEach(() => {
    block = {
      id: 'asdfasdf',
      timestamp: '2020-02-08T20:20:20Z',
      transactions: []
    };

    onClick = jest.fn();

    subject = shallow(<FullBlockRow block={block} onClick={onClick} />);
  })

  describe('render', () => {
    it('renders the raw contents of the block', () => {
      expect(subject).toMatchSnapshot();
    });

    it('binds the onClick event', () => {
      expect(subject.find('tr').props().onClick).toBe(onClick);
    });
  });
});