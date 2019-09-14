import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homee',
  templateUrl: './homee.page.html',
  styleUrls: ['./homee.page.scss'],
})
export class HomeePage implements OnInit {
  userDetails:any;
  name: String;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
    this.name  = this.userDetails.employee_name;
  }

  goToAddEmployee() {
    this.router.navigateByUrl('/add-employee');
  }
  goToViewEmployee(){
    this.router.navigateByUrl('/viewemployees');
  }

}
