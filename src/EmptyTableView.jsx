import React from 'react';
import styles from './EmptyTableView.module.css';

const EmptyTableView = () => {
  return (
    <tr>
      <td colSpan={3} className={styles.empty}>
        Nothing to show. Click 'Load' to get started.
      </td>
    </tr>
  )
}

export default EmptyTableView;