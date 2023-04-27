import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }
  


  username = '';
  password = '';
  pwd = '';
  firstName = '';
  lastname = '';


  /*This method is called when the user click on signUp button.If the fields are empty or even anyone 
  of the field is empty, user cannot able to signup into the application as each of the field
  is mandotory to fill. */
  SignUpSuccess() {
    if (this.firstName === '' || this.lastname === '' || this.username === '' || this.password === '' || this.pwd === '') {
      var status = confirm("All the fields are mandatory to fill!");
     
    }
    else {
      /*If the user completes the application form,it navigates to log-in form or else it will stay in the same page*/
      var status = confirm("Registered Successfully");
      if (status == true) {
        this.router.navigate(['log-in']);
      }
      
    }
  }
}
