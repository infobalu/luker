import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-emp-attendane-rpt',
  templateUrl: './emp-attendane-rpt.page.html',
  styleUrls: ['./emp-attendane-rpt.page.scss'],
})
export class EmpAttendaneRptPage implements OnInit {
  activeCheckins: any = [];
  internetstatus: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.goToAttendanceRpt();
  }

  goToAttendanceRpt() {

    let time = moment().format('YYYY-MM-DD');

   // this.internetstatus = localStorage.getItem("internet");
   if (navigator.onLine) {

      this.apiService.getData('/attendanceReport/' + time).subscribe(result => {
        this.activeCheckins = result['data'];
        console.log("== this.attendanceReport == : " + JSON.stringify(result['data']));
        if (result['success'] == 1) {

        }
      });
    } else {
      alert('Please check your internet connection');
    }
  }


}
