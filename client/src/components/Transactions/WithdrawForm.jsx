import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { withdraw } from '../../services/transactions';

const WithdrawForm = ({ accountId, onClose, onWithdraw }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await withdraw(accountId, parseFloat(amount));
      onWithdraw();
      onClose();
    } catch (error) {
      console.error('Error withdrawing:', error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Withdraw</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Withdraw
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WithdrawForm;