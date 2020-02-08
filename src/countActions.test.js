import countActions from './countActions';

describe('countActions', () => {
  describe('when there are multiple transactions on the block', () => {
    it('counts all the actions', () => {
      let block = {
        transactions: [
          {
            trx: {
              transaction: {
                actions: [{},{}]
              }
            }
          },
          {
            trx: {
              transaction: {
                actions: [{}]
              }
            }
          },
          {
            trx: 'asdfasdf'
          }
        ]
      };

      expect(countActions(block)).toBe(3);
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

      expect(countActions(block)).toBe(0);
    });
  });

  describe('when the transaction has a trx object', () => {
    it("counts the actions", () => {
      let block = {
        transactions: [
          {
            trx: {
              transaction: {
                actions: [{},{}]
              }
            }
          }
        ]
      };

      expect(countActions(block)).toBe(2);
    });
  });
});