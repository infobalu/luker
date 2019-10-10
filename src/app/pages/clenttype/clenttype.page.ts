import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import * as moment from 'moment';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-clenttype',
  templateUrl: './clenttype.page.html',
  styleUrls: ['./clenttype.page.scss'],
})
export class ClenttypePage implements OnInit {

  clientType: string = 'dealer';
  latitude: any;
  longitude: any;
  locationName: any;
  params: any;
  userDetails: any;
  constructor(
    public menu: MenuController,
    private router: Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private apiService: ApiService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));

  }

  goToMyCheckin() {
    this.router.navigateByUrl('/mycheckins');
  }

}