import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './TableLoadingView.module.css';

const TableLoadingView = () => {
  return (
    <tr>
      <td colSpan={3} className={styles.loading}>
        <Spinner animation="border" variant="primary" />
      </td>
    </tr>
  );
}

export default TableLoadingView;