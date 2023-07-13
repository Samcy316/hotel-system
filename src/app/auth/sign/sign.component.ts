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
  

  constructor(private formbuilder:FormBuilder, private service:UserRegistrationService,  private router:Router){

  }

  ngOnInit(): void {
    this.signUser=this.formbuilder.group({
      first_name:['',Validators.required],
      last_name: ['', Validators.required],
      alt_email:['',[Validators.email]],
      phone_no:['', [Validators.minLength(10)]]
    })
    
  }
  saveData(){
    console.log(this.signUser.value)
    this.service.createUser(this.signUser.value).
    subscribe({
      next:(res)=>{
        alert("sucessfully signed Up")
        this.signUser.reset();
        this.router.navigate(['listing']);
        console.log(this.signUser.value)
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
