import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash";
  sessionObject: any;
  constructor(private formBuilder:FormBuilder, private service:UserRegistrationService, private router:Router ) {}
  loginHost!: FormGroup;
  ngOnInit(): void {
    this.loginHost=this.formBuilder.group({
      username:['',Validators.required],
      password: ['',[Validators.minLength(6)]]
    })
    if(this.service.sessionData() !== null ){
      this.sessionObject = this.service.sessionData();
      if(this.sessionObject !== null){
        const sessionToken = this.sessionObject.message
        if(sessionToken !== null){
      this.router.navigate(['rooms']);   
        }
      }
    }
    
  }
  loginData(){
    this.service.loginAdmin(this.loginHost.value).
    subscribe({
      next:(res)=>{
        alert("login successfull")
        this.loginHost.reset();
        this.router.navigate(['rooms']);
        sessionStorage.setItem('data', JSON.stringify(res))
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
