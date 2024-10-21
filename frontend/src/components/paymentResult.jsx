// PaymentResult.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Alert, Table, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

const PaymentResult = () => {
  const location = useLocation();
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    const transactionId = new URLSearchParams(location.search).get('id');

    if (transactionId) {
      axios
        .get(`/api/payments/transaction-status?id=${transactionId}`)
        .then((response) => setTransactionData(response.data.data))
        .catch((error) => console.error('Error fetching transaction status:', error));
    }
  }, [location.search]);

  return (
    <Container className="mt-5">
      <h2>Payment Result</h2>
      {transactionData ? (
        <>
          <Alert variant={transactionData.status === 'APPROVED' ? 'success' : 'warning'}>
            Your payment has been {transactionData.status.toLowerCase()}.
          </Alert>
          <Table striped bordered>
            <tbody>
              <tr>
                <td><strong>Transaction ID</strong></td>
                <td>{transactionData.id}</td>
              </tr>
              <tr>
                <td><strong>Amount</strong></td>
                <td>{transactionData.amount_in_cents / 100} COP</td>
              </tr>
              <tr>
                <td><strong>Status</strong></td>
                <td>{transactionData.status}</td>
              </tr>
            </tbody>
          </Table>
          <Link to="/payment">
            <Button variant="primary">Make Another Payment</Button>
          </Link>
        </>
      ) : (
        <Alert variant="info">Fetching payment status...</Alert>
      )}
    </Container>
  );
};

export default PaymentResult;
