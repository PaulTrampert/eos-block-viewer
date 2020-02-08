import React from 'react';
import {shallow} from 'enzyme';
import BlockRow from './BlockRow';
import countActions from './countActions';

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
    it('calls countActions to count the actions', () => {
      expect(countActions).toHaveBeenCalledWith(block);
    });

    it("binds toggleShowDetails to the table row's onClick event", () => {
      expect(subject.find('tr').props().onClick).toBe(subject.instance().toggleShowDetails);
    });

    it('renders the block data in a table row', () => {
      expect(subject).toMatchSnapshot();
    });

    describe('when show details is true', () => {
      beforeEach(() => {
        subject.setState({showDetails: true});
      });

      it('renders the full block details', () => {
        expect(subject).toMatchSnapshot();
      });
    });
  });
});