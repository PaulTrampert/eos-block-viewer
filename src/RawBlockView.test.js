import React from 'react';
import {shallow} from 'enzyme';
import RawBlockView from './RawBlockView';

describe("RawBlockView", () => {
  let subject;
  let block;

  beforeEach(() => {
    block = {

    };
    subject = shallow(<RawBlockView block={block} />);
  });

  it('renders the stringified block within <pre> tags', () => {
    expect(subject).toMatchSnapshot();
  });
});