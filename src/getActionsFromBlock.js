export default (block) => {
  let actions = [];
  for(let transaction of block.transactions) {
    if (transaction.trx.transaction) {
      actions = [...actions, ...transaction.trx.transaction.actions];
    }
  }
  return actions;
};