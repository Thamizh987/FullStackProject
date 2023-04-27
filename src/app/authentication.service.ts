import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  /*This method is to check the login credentials given by the user.It saves the username in the SessionStorage
   Once the user logged into the session till the user logged out from the session.
   Once the user logOut from the application,the username in the session storage become empty*/
  authenticate(username: any, password: any) {
    if (username === "Thamizhselvi" && password === "Thamizh@123") {
      sessionStorage.setItem('username', username)
      return true;
    }
    else {
      return false;
    }
  }

  /*If the username is empty,it returns false */
  userLoggedIn() {
    let userName = sessionStorage.getItem('username')
    console.log(!(userName === null))
    return !(userName === null)
  }

  /* Once the user logged out from the session,the username in the session storage get removed */
  logOut() {
    sessionStorage.removeItem('username');
  }
}
