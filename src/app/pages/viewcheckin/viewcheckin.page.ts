import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-viewcheckin',
  templateUrl: './viewcheckin.page.html',
  styleUrls: ['./viewcheckin.page.scss'],
})
export class ViewcheckinPage implements OnInit {
  checkinid: any;
  activeCheckins: any = [];
  imgurl:any;
  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.checkinid = this.activatedRoute.queryParams.subscribe(params =>{
      if(params && params._id){
        this.checkinid =JSON.parse(params._id)
        var k = params._id;
        this.imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWeXT7jA26O1mNr7cARA0MICtJ7eZ0KXetCkBqMczkZK9uW1R';
      }
    });
  }
  triggerMyCheckIns(){

    this.apiService.getData('/getCheckinsDetails/' + this.checkinid).subscribe(result => {
      if(result['success'] == 1){
        this.activeCheckins = result['data'];
        console.log("== this.activeCheckins qqq== : "+  JSON.stringify(this.activeCheckins));
      }
    });
  }

  ionViewWillEnter(){
    console.log("==ionViewWillEnter==");
    this.triggerMyCheckIns();
  }

}
