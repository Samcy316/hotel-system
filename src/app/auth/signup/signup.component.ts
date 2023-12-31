import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash";
  loginHost!:FormGroup;
  signupHost!:FormGroup;

  constructor(private formBuilder:FormBuilder, private service:UserRegistrationService, private router:Router) {}

  ngOnInit(): void {
    this.signupHost=this.formBuilder.group({
      first_name:['',Validators.required],
      last_name: ['', Validators.required],
      alt_email:['',[Validators.email]],
      phone_no:['', [Validators.minLength(10)]]
    })
    
  }
  saveData(){
    console.log(this.signupHost.value)
    this.service.createHost(this.signupHost.value).
    subscribe({
      next:(res)=>{
        alert("sucessfully signed Up")
        this.signupHost.reset();
        this.router.navigate(['adminlist']);
        console.log(this.signupHost.value)
      },
      error:(err)=>{
        alert("Error Occured")
      }
    })
  }




  hideShowPass(){
    this.isText=!this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText? this.type="text" : this.type="password";
  }

}
