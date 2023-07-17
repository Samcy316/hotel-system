import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css']
})
export class BookingpageComponent implements OnInit{
  paymentHandler: any = null;
  constructor(private formBuilder:FormBuilder) {}
  bookingUser!:FormGroup;




  ngOnInit() {
    this.invokeStripe();
    this.bookingUser=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:[ '',[Validators.email]],
      arrival:['',Validators.required],
      departure:['', Validators.required],
      special_request:['', Validators.required],
      no_guest:['',Validators.required],
      room_type:['', Validators.required]
    })
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

submitBooking(){
  console.log(this.bookingUser)

}

}
