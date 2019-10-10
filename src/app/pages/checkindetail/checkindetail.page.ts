import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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



  constructor(private activatedRoute: ActivatedRoute) { }

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

      console.log('=this.customer_name == : ' + this.customer_name);
    });
  }

}
