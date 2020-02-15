import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'react-bootstrap';
import MainNav from './MainNav';


describe('MainNav', () => {
  let onRequestBlocks;
  let subject;

  beforeEach(() => {
    onRequestBlocks = jest.fn();
    subject = shallow(<MainNav onRequestBlocks={onRequestBlocks} />);
  });

  describe('render', () => {
    it('renders the nav bar containing the site title and load button', () => {
      expect(subject).toMatchSnapshot();
    });

    it("binds onRequestBlocks to the load button's onClick event", () => {
      expect(subject.find(Button).props().onClick).toBe(onRequestBlocks);
    });

    describe('when blocks are loading', () => {
      beforeEach(() => {
        subject.setProps({
          loadingBlocks: true
        });
      });

      it('the load button is disabled', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});