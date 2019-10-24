import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkindetail',
  templateUrl: './checkindetail.page.html',
  styleUrls: ['./checkindetail.page.scss'],
})
export class CheckindetailPage implements OnInit {
  activeCheckins: any = [];
  customer_name: any;
  employee_designation: any;

  dealer_name: any;
  distributor_name: any;

  imgurl:any;
  checkin_time: any;
  checkout_time: any;
  checkin_loc: any;
  checkout_loc: any;
  checkinId: any;



  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.activeCheckins = this.activatedRoute.queryParams.subscribe(params => {
      this.activeCheckins = JSON.parse(params._id)
      console.log('=this.activeCheckins 22 == : ' + JSON.stringify(this.activeCheckins));
      //  this.customer_name = JSON.parse(this.activeCheckins.customer_name); 
      this.customer_name = this.activeCheckins.customer_name;
      this.employee_designation = this.activeCheckins.employee_designation;

      this.dealer_name = this.activeCheckins.dealer_name;
      this.distributor_name = this.activeCheckins.distributor_name;

      this.checkin_time = this.activeCheckins.checkin_time;
      this.checkout_time = this.activeCheckins.checkout_time;
      this.imgurl = this.activeCheckins.pic;
      this.checkin_loc = this.activeCheckins.checkin_loc;
      this.checkout_loc = this.activeCheckins.checkout_loc;
      this.checkinId = this.activeCheckins._id;
      console.log('=this.customer_name == : ' + this.customer_name);
    });
  }


  gotoCheckIn(){
    console.log('=check _id= : ' + this.checkinId);
    localStorage.setItem('checkin_id',this.checkinId);
    this.router.navigateByUrl('/create-check-in/');
  }

}
