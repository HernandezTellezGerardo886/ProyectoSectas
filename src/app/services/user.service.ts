import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global'
import { User} from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  public user; 
  public token;
  public identity;
  
  constructor(
    private _http: HttpClient, 
  ) {
    this.url = global.url;
    this.user = new User('','','','','','');
   }

   login(user, getToken= null): Observable<any>{
     let json = user;

     if(user.getToken != null){
      user.getToken = true;
     }

     let headers = new HttpHeaders().set('Content-Type', 'application/json');

     return this._http.post(this.url + 'login',json,{headers: headers});

   }

   getToken():Observable<any>{
    let token = localStorage.getItem('token');
    if(token){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;

  }
  
  getIdentity():Observable<any>{
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity){
      this.identity = identity;
    }else{
      this.identity = null;
    }

    return identity;
   }
}
