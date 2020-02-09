import React from 'react';
import {shallow} from 'enzyme';
import RicardianTransaction from './RicardianTransaction';

describe('RicardianTransaction', () => {
  let subject;
  let abis;
  let transaction;

  beforeEach(() => {
    abis = {
      a: {
        abi: {
          version: '0.2.0'
        }
      },
      b: {
        abi: {
          version: '0.1.0'
        }
      }
    }
    transaction = {
      actions: [
        {
          account: 'a'
        },
        {
          account: 'b'
        },
        {
          account: 'a'
        },
      ]
    }

    subject = shallow(<RicardianTransaction abis={abis} transaction={transaction} />);
  });

  it('renders an action for each action on the transaction', () => {
    expect(subject).toMatchSnapshot();
  });
});