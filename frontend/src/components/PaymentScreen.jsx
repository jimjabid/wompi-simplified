// PaymentScreen.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import WompiButton from './WompiButton';

const PaymentScreen = () => {
  const [amount, setAmount] = useState('');
  const [confirmedAmount, setConfirmedAmount] = useState(null);

  const handleConfirmAmount = () => {
    if (amount > 0) {
      setConfirmedAmount(amount);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Complete Your Payment</h2>
      <Form>
        <Form.Group controlId="amount">
          <Form.Label>Enter Amount (COP)</Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            placeholder="Enter amount in COP"
          />
        </Form.Group>
        <Button className="mt-3" onClick={handleConfirmAmount}>
          Confirm Amount
        </Button>
      </Form>
      {confirmedAmount && <WompiButton amount={confirmedAmount} />}
    </Container>
  );
};

export default PaymentScreen;
