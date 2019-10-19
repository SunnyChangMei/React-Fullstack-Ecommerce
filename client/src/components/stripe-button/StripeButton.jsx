import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_MlpDBiQja2GOFRsUTDeegxVT00if8522W6';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment successful');
      })
      .catch(error => {
        console.log('Payment error', JSON.parse(error));
        alert('There was an issue with your payment.');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="HiPhone Inc."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      allowRememberMe
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
