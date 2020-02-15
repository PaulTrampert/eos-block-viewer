import React from 'react';
import {shallow} from 'enzyme';
import TableLoadingView from './TableLoadingView';

describe('TableLoadingView', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(<TableLoadingView />);
  });

  it('renders a Spinner in the table row', () => {
    expect(subject).toMatchSnapshot();
  });
});