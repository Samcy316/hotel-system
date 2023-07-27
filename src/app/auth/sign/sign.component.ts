import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit{
  type:string ="password";
  isText: boolean=false;
  eyeIcon: string = "fa-eye-slash";
  signUser!:FormGroup;
  sessionObject: any;
  

  constructor(private formbuilder:FormBuilder, private service:UserRegistrationService,  private router:Router){

  }

  ngOnInit(): void {
    this.signUser=this.formbuilder.group({
      name:['',Validators.required],
      username: ['', Validators.required],
      email:['',[Validators.email]],
      password:['', [Validators.minLength(6)]]
    })

    if(this.service.sessionData() !== null ){
      this.sessionObject = this.service.sessionData();
      if(this.sessionObject !== null){
        const sessionToken = this.sessionObject.message
        if(sessionToken !== null){
      this.router.navigate(['listing']);   
        }
      }
    }


    
  }
  saveData(){
    console.log(this.signUser.value)
    this.service.createUser(this.signUser.value).
    subscribe({
      next:(res)=>{
        alert("sucess")
        this.signUser.reset();
        this.router.navigate(['rooms']);
        console.log(this.signUser.value);
        sessionStorage.setItem('data', JSON.stringify(res))
      },
      error:(err)=>{
        alert("Error Occured")
        console.log(err)
      }
    })
  }




  hideShowPass(){
    this.isText=!this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText? this.type="text" : this.type="password";
  }

}
