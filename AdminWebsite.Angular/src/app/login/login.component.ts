import { Component, OnInit } from '@angular/core';
//import {NgForm} from  '@angular/forms'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService} from '../Services/login-auth.service';
import { Router } from '@angular/router';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app';
import 'firebase/auth';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from 'src/app/admin/Models/APIResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginAuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
   submitted = false;
   UserName: string;
   Password: string;
   Role: number;
   ErrorMsg:string="";
   UserData:any;
  constructor(private formBuilder: FormBuilder,
    private loginService:LoginAuthService,
    private router: Router,
    // private auth: AngularFireAuth,
     private http:HttpClient,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Role: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }

  onSubmit() {
    this.submitted = true;
    this.UserName= this.loginForm.get('userName').value;
    this.Password= this.loginForm.get('password').value;
    this.Role= this.loginForm.get('Role').value;
    // stop the process here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else
    {
        if(this.UserName =='Admin123@' && this.Password =='Admin123@' && this.Role==1)
        {
          alert( this.UserName +' '+ 'Admin Login Successfully!!');
        }
         else if(this.UserName =='Helpdesk' && this.Password =='Helpdesk' && this.Role==2)
        {
          alert( this.UserName +' '+ 'Help Desk Login Successfully!!');
        }
        else{
          alert('Invalid UserName or Password');
        }

        this.loginService.authenticateStudent(this.UserName,this.Password).subscribe(
          data=>{
            debugger;
            if(data.Status==200){
            sessionStorage.setItem("Token",data.Data);
            this.router.navigate(['/dashboard']);
            }
            else if(data.Status==404){
              this.ErrorMsg = "IncorrectUserPassMsg";
            }
          }
        );
    }
    
 
    
}
}
