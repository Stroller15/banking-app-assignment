import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import AccountList from '../Accounts/AccountList';
import TransactionList from '../Transactions/TransactionList';
import DepositForm from '../Transactions/DepositForm';
import WithdrawForm from '../Transactions/WithdrawForm';
import { getAccounts } from '../../services/accounts';

const CustomerDashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const { accounts } = await getAccounts();
      setAccounts(accounts);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Customer Dashboard
      </Typography>
      <AccountList accounts={accounts} onSelectAccount={setSelectedAccount} />
      {selectedAccount && (
        <>
          <Button onClick={() => setShowDepositForm(true)}>Deposit</Button>
          <Button onClick={() => setShowWithdrawForm(true)}>Withdraw</Button>
          <TransactionList accountId={selectedAccount.id} />
        </>
      )}
      {showDepositForm && (
        <DepositForm
          accountId={selectedAccount.id}
          onClose={() => setShowDepositForm(false)}
          onDeposit={fetchAccounts}
        />
      )}
      {showWithdrawForm && (
        <WithdrawForm
          accountId={selectedAccount.id}
          onClose={() => setShowWithdrawForm(false)}
          onWithdraw={fetchAccounts}
        />
      )}
    </Container>
  );
};

export default CustomerDashboard;