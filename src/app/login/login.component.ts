import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserService } from "src/app/shared/user.service";
import { User } from "src/app/shared/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : User;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.user ={
UserName : '',
Password :''
    }
  }

  onLogin(form : NgForm){
    this.userService.loginUser(form.value)
    .subscribe((data: any)=>{
  if(data.statusText=="OK")
    this.resetForm(form);
    });
    
  }
}
