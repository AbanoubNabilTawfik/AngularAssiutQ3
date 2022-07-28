import { Injectable } from '@angular/core';
import { User } from './app/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postData(user:User)
  {
    //call to backend
    console.log(user)
  }
}
