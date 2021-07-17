import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
 const priceForStripe = price * 100;
 const publishableKey = 'pk_test_51JEEGjSB27Y6KXxwf0oVHRpnyLSI8CupYmDhnLlitNivtZevQ3wcO7TsiJhJ9eOPVoNkGLe6ypr0miBRj9Ai3otW00zsNIclD0';

 const onTokenCallback = token => alert('Payment Success. Thank You!')
 

 return(
     <StripeCheckout 
     label= 'Pay Now' 
     name='MyStyle India Ltd.'
     description={`Your total is ${price} `}
     billingAddress
     shippingAddress 
     currency="INR" 
     stripeKey={publishableKey}
     amount={priceForStripe}
     token={onTokenCallback}/>
 )

}

export default StripeButton;