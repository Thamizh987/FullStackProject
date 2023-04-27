import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public loginService: AuthenticationService, private router: Router) { }
  ngOnInit() {
    
  }
  /* It is the method to logout Confirmation.If it is true,it goes to logout page.  */
  logoutConfirmation() {
    var status = confirm("Do You want to Logout?");
    if (status == true) {
      this.loginService.logOut();
      this.router.navigate(['logout']);
    }
  }
  
}
