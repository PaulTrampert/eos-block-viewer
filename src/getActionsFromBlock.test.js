import getActionsFromBlock from './getActionsFromBlock';

describe('getActionsFromBlock', () => {
  describe('when there are multiple transactions on the block', () => {
    it('counts all the actions', () => {
      let block = {
        transactions: [
          {
            trx: {
              transaction: {
                actions: [
                  {
                    account: 'a'
                  },
                  {
                    account: 'b'
                  }
                ]
              }
            }
          },
          {
            trx: {
              transaction: {
                actions: [
                  {
                    account: 'c'
                  }
                ]
              }
            }
          },
          {
            trx: 'asdfasdf'
          }
        ]
      };

      expect(getActionsFromBlock(block)).toEqual([
        {
          account: 'a'
        },
        {
          account: 'b'
        },
        {
          account: 'c'
        }
      ]);
    });
  });

  describe("when the transaction's trx property is a string", () => {
    it("doesn't count any actions", () => {
      let block = {
        transactions: [
          {
            trx: 'asdfasdf'
          }
        ]
      };

      expect(getActionsFromBlock(block)).toEqual([]);
    });
  });

  describe('when the transaction has a trx object', () => {
    it("counts the actions", () => {
      let block = {
        transactions: [
          {
            trx: {
              transaction: {
                actions: [
                  {
                    account: 'a'
                  },
                  {
                    account: 'b'
                  }
                ]
              }
            }
          }
        ]
      };

      expect(getActionsFromBlock(block)).toEqual([
        {
          account: 'a'
        },
        {
          account: 'b'
        }
      ]);
    });
  });
});