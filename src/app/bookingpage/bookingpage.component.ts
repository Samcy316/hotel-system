import { Component } from '@angular/core';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent {
  paymentHandler: any = null;
  constructor() {}
  ngOnInit() {
    this.invokeStripe();
}
makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51NTJxnE1kz0StBBcSnsccw1h6DHtzdJlfEubrdbICxyGgnnK0xsUSYT5BcbPnnlHWx8xGGtXPdWZfWbnAa3UVo36009Eu5NPUC',
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'Make Payment',
    description: 'Card',
    amount: amount * 100,
  });
}
invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51NTJxnE1kz0StBBcSnsccw1h6DHtzdJlfEubrdbICxyGgnnK0xsUSYT5BcbPnnlHWx8xGGtXPdWZfWbnAa3UVo36009Eu5NPUC',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };
    window.document.body.appendChild(script);
  }
}

}
