import React from 'react';
import PropTypes from 'prop-types';
import contractFactory from './ricardianContractFactory';
import styles from './RicardianAction.module.css';
import RicardianMeta from './RicardianMeta';
import Transaction from './propTypes/Transaction';

class RicardianAction extends React.Component {
  render = () => {
    const {
      transaction,
      actionIndex,
      abi
    } = this.props;
    try {
      const contract = contractFactory.create({
        abi,
        transaction,
        actionIndex,
        allowUnusedVariables: true
      });
      const meta = contract.getMetadata();
      const html = {
        __html: contract.getHtml()
      };

      if (!meta.title && !meta.summary && !html.__html) {
        throw new Error("Empty contract");
      }

      return (
        <div className={styles.ricardian}>
          <RicardianMeta {...meta} />
          <div dangerouslySetInnerHTML={html} />
          <hr />
        </div>
      );
    } catch (e) {
      console.warn(e);
      var action = transaction.actions[actionIndex];
      return (
        <div>
          <RicardianMeta title={action.account} summary={action.name} />
          <p>{JSON.stringify(action.data)}</p>
          <hr />
        </div>
      )
    }
  }
}

RicardianAction.propTypes = {
  transaction: Transaction,
  abi: PropTypes.object,
  actionIndex: PropTypes.number
};

export default RicardianAction;