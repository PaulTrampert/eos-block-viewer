import React from 'react';
import {shallow} from 'enzyme';
import EmptyTableView from './EmptyTableView';

describe('EmptyTableView', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(<EmptyTableView />);
  });

  it('Renders the message to click "Load" to get started.', () => {
    expect(subject).toMatchSnapshot();
  });
});