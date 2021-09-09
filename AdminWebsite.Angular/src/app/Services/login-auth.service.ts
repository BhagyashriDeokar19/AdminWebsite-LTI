import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Candidate } from '../admin/Models/candidate';
import { APIResponse } from '../admin/Models/APIResponse';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  
  constructor(private auth: AngularFireAuth,private router:Router,private http:HttpClient) {

  }
  Logout(){
    this.auth.signOut().then(data=>{
    this.router.navigate(['/Login']);
    localStorage.removeItem('user');
    });
   }
   authenticateStudent(UserName:string,Password:string):Observable<APIResponse>{
    debugger;
        let httpheader = new HttpHeaders().set('Content-Type','application/json');
        let options={
          headers:httpheader
        }
        return this.http.post<APIResponse>('http://localhost:53004/api/Institute/Authenticate',
        {
          UserName:UserName,
          Password:Password,
          UserType:1
        },options);
  }
}

