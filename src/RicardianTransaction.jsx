import React from 'react';
import PropTypes from 'prop-types';
import RicardianAction from './RicardianAction';
import Transaction from './propTypes/Transaction';

const RicardianTransaction = ({
  transaction,
  abis
}) => {
  return (
    <>
      {transaction.actions.map((a, idx) => <RicardianAction key={idx} transaction={transaction} actionIndex={idx} abi={abis[a.account].abi} />)}
    </>
  )
}

RicardianTransaction.propTypes = {
  transaction: Transaction,
  abis: PropTypes.object
}

export default RicardianTransaction;