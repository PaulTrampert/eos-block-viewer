export default (block) => {
  let actions = 0;
  for (let transaction of block.transactions) {
    if (transaction.trx.transaction) {
      actions += transaction.trx.transaction.actions.length;
    }
  }
  return actions;
}