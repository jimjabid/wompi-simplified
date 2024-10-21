// WompiButton.jsx
import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const WompiButton = ({ amount }) => {
  const buttonContainerRef = useRef(null);
  const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;
  console.log(publicKey)


  useEffect(() => {
    const loadWompiWidget = async () => {
      const amountInCents = parseInt(amount, 10) * 100;
      const reference = Date.now().toString();

      try {
        const { data } = await axios.post('/api/payments/integrity-signature', {
          reference,
          amountInCents,
          currency: 'COP',
        });

        const script = document.createElement('script');
        script.src = 'https://checkout.wompi.co/widget.js';
        script.setAttribute('data-render', 'button');
        script.setAttribute('data-public-key', publicKey);
        script.setAttribute('data-currency', 'COP');
        script.setAttribute('data-amount-in-cents', amountInCents.toString());
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-signature:integrity', data.integritySignature);
        script.setAttribute('data-redirect-url', `${window.location.origin}/payment/result`);
        script.async = true;

        buttonContainerRef.current.innerHTML = '';
        buttonContainerRef.current.appendChild(script);
      } catch (error) {
        console.error('Error loading Wompi widget:', error);
      }
    };

    loadWompiWidget();
  }, [amount]);

  return <div ref={buttonContainerRef} className="my-3"></div>;
};

export default WompiButton;
