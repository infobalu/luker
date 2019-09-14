import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-empallcheckin',
  templateUrl: './empallcheckin.page.html',
  styleUrls: ['./empallcheckin.page.scss'],
})
export class EmpallcheckinPage implements OnInit {
  activeCheckins: any = [];
  activeCheckinsDealer: any = [];
  activeCheckinsDist: any = [];

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.triggerAllCheckIns();
  }

  segmentChanged(ev: any) {
    console.log('Segment changed : ', ev)
  }

  todaysCheckin() {
    console.log("=TODAY=")
    this.triggerAllCheckIns();
  }
  dealerCheckin() {
   

    this.apiService.getData('/getAllCheckins/' + '2019-09-12').subscribe(result => {
      if(result['success'] == 1){
        this.activeCheckins = result['data'];
        console.log("== this.getAllCheckins == : "+  JSON.stringify(this.activeCheckins));
        this.activeCheckins =  this.activeCheckins.filter(d => d.check_in_for == 'dealer');
      }
    });

    
    //console.log("=dealerCheckin= : "+JSON.stringify(this.activeCheckinsDealer));
  }
  distributorCheckin() {
    console.log("=distributorCheckin=")
    this.apiService.getData('/getAllCheckins/' + '2019-09-12').subscribe(result => {
      if(result['success'] == 1){
        this.activeCheckins = result['data'];
        console.log("== this.getAllCheckins == : "+  JSON.stringify(this.activeCheckins));
        this.activeCheckins =  this.activeCheckins.filter(d => d.check_in_for == 'dist');
      }
    });

    
  }


  triggerAllCheckIns(){

    this.apiService.getData('/getAllCheckins/' + '2019-09-12').subscribe(result => {
      if(result['success'] == 1){
        this.activeCheckins = result['data'];
        console.log("== this.getAllCheckins == : "+  JSON.stringify(this.activeCheckins));
      }
    });
  }


}
