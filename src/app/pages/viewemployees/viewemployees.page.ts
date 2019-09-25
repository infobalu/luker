import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
import { UserdetilviewPage } from '../userdetilview/userdetilview.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.page.html',
  styleUrls: ['./viewemployees.page.scss'],
})
export class ViewemployeesPage implements OnInit {
  activeCheckins: any = [];

  constructor(private apiService: ApiService,
    public toastController: ToastController,
    private router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
  }


  presentModal(album) {
    console.log('=album=== : '+JSON.stringify(album._id));

    let navigateExtars : NavigationExtras = {
      queryParams:{
        _id : JSON.stringify(album._id)
      }
      
    };

    this.router.navigate(['userdetilview'],navigateExtars);
  }

  ionViewWillEnter(){
    console.log("==ionViewWillEnter==");
    this.apiService.getData('/users').subscribe(result => {
      this.activeCheckins = result['data'];
    });
  }
}

