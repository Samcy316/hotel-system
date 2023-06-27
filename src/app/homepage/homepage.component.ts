import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { UserRegistrationService } from '../user-registration.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements   OnInit {
  loginHost!: FormGroup;
  addHost!:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:UserRegistrationService ){}
  
  ngOnInit(): void {
    this.loginHost=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.minLength(5)]
    });

    this.addHost=this.formBuilder.group({
      name:['', Validators.required],
      email:['', Validators.email],
      password:['', Validators.minLength(5)],
      username:['', Validators.required]
    })
  
  
  }
 saveData(){
  console.log(this.addHost.value);
  this.service.createHost(this.addHost.value)
  .subscribe({
    next:(res)=>{
      alert(res.message)
      this.addHost.reset();
    },
    error:(err)=>{
      alert(err?.error.message)
    }
  })

 } 
 loginData(){
  console.log(this.loginHost.value);
  this.service.login(this.loginHost.value).
  subscribe({
    next:(res)=>{
      alert(res.message)
      this.loginHost.reset();
    },
    error:(err)=>{
      alert(err?.error.message)
    }
  })
 } 
}
