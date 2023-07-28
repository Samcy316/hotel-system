import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/user-registration.service';

@Component({
  selector: 'app-firststep',
  templateUrl: './firststep.component.html',
  styleUrls: ['./firststep.component.css']
})
export class FirststepComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";


  constructor(private formBuilder: FormBuilder, private service: UserRegistrationService, private router: Router) { }
  firstHost!: FormGroup;

  ngOnInit(): void {
    // this.firstHost=this.formBuilder.group({
    //   username:['',Validators.required],
    //   email:['',Validators.email,Validators.required],
    //   password: ['',[Validators.minLength(6)]]
    // })

    this.firstHost = new FormGroup({
      username: new FormControl('', Validators.required),
      email:new FormControl(),
      password: new FormControl('', Validators.minLength(5))
    });
  }

  firstData() {
    this.service.first(this.firstHost.value).
      subscribe({
        next: (res) => {
          alert("successfull")
          console.log(res);
          console.log(res.headers.getAll('Set-Cookie'));
          
          this.firstHost.reset();
          this.router.navigate(['signup']);
        },
        error: (err) => {
          alert("successful")
          this.router.navigate(['signup']);
        }
      })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

}
