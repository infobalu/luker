import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetilview',
  templateUrl: './userdetilview.page.html',
  styleUrls: ['./userdetilview.page.scss'],
})
export class UserdetilviewPage implements OnInit {
  activeCheckins: any = [];
  employee_name:string;
  employee_mobile:string;
  employee_account_email:string;
  employee_designation:string;
  employee_vertical:string;
  employee_post_location:string;
  employee_area:string;
  userid:any;


  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployeeDetail();
  }

  getEmployeeDetail(){


    this.userid = this.activatedRoute.queryParams.subscribe(params =>{
      this.userid =JSON.parse(params._id)

      console.log('=this.userid == : '+this.userid);

      this.apiService.getData('/userDetails/'+ this.userid).subscribe(result => {
      this.activeCheckins = result['data'];
      console.log('=this.userDetails == : '+JSON.stringify(this.activeCheckins));
      this.employee_name = this.activeCheckins.employee_name;
      this.employee_mobile  = this.activeCheckins.employee_mobile;

      this.employee_account_email = this.activeCheckins.employee_account_email;
      this.employee_designation  = this.activeCheckins.employee_designation;

      this.employee_post_location = this.activeCheckins.employee_post_location;
      this.employee_area  = this.activeCheckins.employee_area;

    });

    
    });
  }

}
