import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import AccountList from '../Accounts/AccountList';
import TransactionList from '../Transactions/TransactionList';
import { getAccounts } from '../../services/accounts';

const BankerDashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

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
        Banker Dashboard
      </Typography>
      <AccountList accounts={accounts} onSelectAccount={setSelectedAccount} />
      {selectedAccount && <TransactionList accountId={selectedAccount.id} />}
    </Container>
  );
};

export default BankerDashboard;