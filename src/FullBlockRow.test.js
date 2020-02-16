import React from 'react';
import {shallow} from 'enzyme';
import FullBlockRow from './FullBlockRow';
import { Tabs } from 'react-bootstrap';

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
  });

  describe('setTabKey', () => {
    let event;
    beforeEach(() => {
      event = {
        stopPropagation: jest.fn()
      };
    });

    it('stops the event propagation', () => {
      subject.instance().setTabKey("key", event);

      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('sets the tabKey in state', () => {
      subject.instance().setTabKey("key", event);

      expect(subject.state().tabKey).toBe('key');
    });
  });

  describe('render', () => {
    it('renders tabs for the raw contents of the block and the ricardian contracts', () => {
      expect(subject).toMatchSnapshot();
    });

    it('binds the onClick event', () => {
      expect(subject.find('tr').props().onClick).toBe(onClick);
    });

    it('binds the onSelect event of tabs', () => {
      expect(subject.find(Tabs).props().onSelect).toBe(subject.instance().setTabKey);
    });

    describe('when tabKey is "raw"', () => {
      it('does not render the RicardianBlockView and only renders the RawBlockView', () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when tabKey is "ricardian"', () => {
      beforeEach(() => {
        subject.setState({tabKey:'ricardian'});
      });

      it('does not render the RawBlockView and only renders the RicardianBlockView', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});