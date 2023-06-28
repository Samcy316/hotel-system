import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private formBuilder:FormBuilder, private service:UserRegistrationService) {}

  ngOnInit(): void {
    this.signupHost=this.formBuilder.group({
      firstname:['',Validators.required],
      lastname: ['', Validators.required],
      email:['',[Validators.email]],
      username:['',Validators.required],
      password:['', [Validators.minLength(6)]]
    })
    
  }
  saveData(){
    this.service.createHost(this.signupHost.value).
    subscribe({
      next:(res)=>{
        alert("sucessfully signed Up")
        this.signupHost.reset();
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
