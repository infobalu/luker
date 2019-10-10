import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ViewcheckinPage } from './../../pages/viewcheckin/viewcheckin.page';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-mycheckins',
  templateUrl: './mycheckins.page.html',
  styleUrls: ['./mycheckins.page.scss'],
})
export class MycheckinsPage implements OnInit {
  userDetails: any;
  activeCheckins: any = [];
  date: string;
  name: string;
  checkinType: string;
  location: string;
  chktime: string;
  chkouttime: string;
  count: string;

  myCheckin: any;

  constructor(private apiService: ApiService,
    public toastController: ToastController,
    private router: Router,
    public navCtrl: NavController) {
    this.count = '';
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("= this.userDetails['_id']== : " + this.userDetails._id);

    this.apiService.getData('/getCheckins/' + this.userDetails._id).subscribe(result => {
      this.activeCheckins = result['data'];
      console.log("== this.activeCheckins == : " + JSON.stringify(this.activeCheckins));

      if (result['success'] == 1) {
        this.count = result['checkins'];
        console.log("===this.count= : " + this.count);
      }

    });
  }

  async presentToast(msg, position) {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      duration: 2000
    });
    toast.present();
  }

  selectPack(pack) {
   
    let navigateExtars: NavigationExtras = {
      queryParams: {
        _id: JSON.stringify(pack)
      }

    };
    this.router.navigate(['checkindetail'], navigateExtars);
  }
}
