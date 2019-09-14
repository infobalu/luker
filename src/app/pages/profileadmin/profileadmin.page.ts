import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.page.html',
  styleUrls: ['./profileadmin.page.scss'],
})
export class ProfileadminPage implements OnInit {
  userDetails:any;
  name: String;
  email: String;


  constructor(    private router: Router    ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
    this.name  = this.userDetails.employee_name;
    this.email =this.userDetails.employee_account_email;

  }

  Logout(){
    console.log('=LOGOUT==');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
