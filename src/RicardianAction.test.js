import React from 'react';
import {shallow} from 'enzyme'
import contractFactory from './ricardianContractFactory';
import RicardianAction from './RicardianAction';

jest.mock('./ricardianContractFactory');

describe('RicardianAction', () => {
  let subject;
  let transaction;
  let abi;
  let actionIndex;
  let contract;
  let meta;
  let html;

  beforeEach(() => {
    transaction = {
      actions: [
        {
          account: "Test",
          name: "action",
          data: {
            some: 'data'
          }
        }
      ]
    };
    abi = {}
    actionIndex = 0;
    meta = {
      title: 'The Everlasting Compact'
    }
    html = "<p>Hi there! I'm a contract!</p>";
    contract = {
      getMetadata: jest.fn().mockReturnValue(meta),
      getHtml: jest.fn().mockReturnValue(html)
    };
  })

  describe('render', () => {
    describe("when the contract gets rendered just fine", () => {
      beforeEach(() => {
        contractFactory.create.mockReturnValue(contract);
        subject = shallow(<RicardianAction transaction={transaction} abi={abi} actionIndex={actionIndex} />);
      });

      it("renders the contract meta and html", () => {
        expect(subject).toMatchSnapshot();
      });
    });

    describe('when there is an error rendering the contract', () => {
      beforeEach(() => {
        contractFactory.create.mockImplementation(() => {
          throw new Error("it broke!");
        });
        subject = shallow(<RicardianAction transaction={transaction} abi={abi} actionIndex={actionIndex} />);
      })

      it('renders an error view', () => {
        expect(subject).toMatchSnapshot();
      })
    });
  });
});