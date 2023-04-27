import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false
  messageForWrongCredentials = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  /* In this method the username and the password which is given by the user is passed to authenticate
  method which is present in Authentication service class to check for the credentials are correct or worng. */
  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      /*If the credentials are correct ,it will navigate to the booklist.
      If it is worng,it will show the message that the credentials are wrong. */
      var status = confirm("Logged In Successfully");
      if (status == true) {
        this.router.navigate(['libraryRecords']);
        console.log("navigated...");
        this.invalidLogin = false;
      }
      else {
        return;
      }
    }
    else {
      this.invalidLogin = true;
      this.messageForWrongCredentials = 'Username or password is wrong. Please enter the correct login credentials';
    }
  }

}

