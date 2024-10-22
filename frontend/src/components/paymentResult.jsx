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
      <h2>Resumen del Pago</h2>
      {transactionData ? (
        <>
          <Alert variant={transactionData.status === 'APPROVED' ? 'success' : 'warning'}>
            You pago a sido {transactionData.status.toLowerCase()}.
          </Alert>
          <Table striped bordered>
            <tbody>
              <tr>
                <td><strong>ID de la Transaccion</strong></td>
                <td>{transactionData.id}</td>
              </tr>
              <tr>
                <td><strong>Cantidad</strong></td>
                <td>{transactionData.amount_in_cents / 100} COP</td>
              </tr>
              <tr>
                <td><strong>Estado</strong></td>
                <td>{transactionData.status}</td>
              </tr>
            </tbody>
          </Table>
          <Link to="/payment">
            <Button variant="primary">Hacer otro Pago</Button>
          </Link>
        </>
      ) : (
        <Alert variant="info">Buscando el resumen del pago...</Alert>
      )}
    </Container>
  );
};

export default PaymentResult;
