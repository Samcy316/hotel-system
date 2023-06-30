import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash";
  constructor(private formBuilder:FormBuilder, private service:UserRegistrationService, private router:Router ) {}
  loginHost!: FormGroup;
  ngOnInit(): void {
    this.loginHost=this.formBuilder.group({
      username:['',Validators.required],
      password: ['',[Validators.minLength(6)]]
    })
    
  }
  loginData(){
    this.service.login(this.loginHost.value).
    subscribe({
      next:(res)=>{
        alert("login successfull")
        this.loginHost.reset();
        this.router.navigate(['admin']);
      },
      error:(err)=>{
        alert("error try again")
      }
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText? this.type="text" : this.type="password";
  }

}
