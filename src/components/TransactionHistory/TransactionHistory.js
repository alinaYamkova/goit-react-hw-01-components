import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr key={id}>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      </thead>

      {/* <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Deposit</td>
            <td>103.1</td>
            <td>BWP</td>
          </tr>
          <tr>
            <td>Payment</td>
            <td>862.44</td>
            <td>AUD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>371.43</td>
            <td>MUR</td> */}
      {/* </tr> */}
      {/* </tbody> */}
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
