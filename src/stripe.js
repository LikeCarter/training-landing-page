(function() {
  var stripe = Stripe('pk_live_n1jY6biUuSKj8HtXKVBY29RE00l8gwnlrG');

  var checkoutButton = document.getElementById('checkout-button-plan_G7Odihrv3cK3dC');
  checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
      items: [{plan: 'plan_G7Odihrv3cK3dC', quantity: 1}],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'https://train.iamfyt.com/?result=success',
      cancelUrl: 'https://train.iamfyt.com/?result=error',
    })
    .then(function (result) {
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer.
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();