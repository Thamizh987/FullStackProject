import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  Name = '';
  Email = '';
  phoneNum = '';
  Subject = '';
  Message = '';

  contactUs() {
    if (this.Name === '' || this.Email === '' || this.phoneNum === '' || this.Subject === '' || this.Message === '') {
      var status = confirm("All the fields are mandatory to fill!");
    }
    else {
      var status = confirm("Sent Successfully");
      if (status == true) {
        this.router.navigate(['contact-message']);
      }
    }
  }
}

