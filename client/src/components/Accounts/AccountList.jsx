import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { formatCurrency } from '../../utils/formatCurrency';

const AccountList = ({ accounts, onSelectAccount }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Accounts
      </Typography>
      <List>
        {accounts.map((account) => (
          <ListItem button key={account.id} onClick={() => onSelectAccount(account)}>
            <ListItemText 
              primary={`Account ${account.id}`} 
              secondary={`Balance: ${formatCurrency(account.balance)}`} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AccountList;