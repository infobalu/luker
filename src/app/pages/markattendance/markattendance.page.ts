import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-markattendance',
  templateUrl: './markattendance.page.html',
  styleUrls: ['./markattendance.page.scss'],
})
export class MarkattendancePage implements OnInit {

  userDetails: any;
  status:string;
  dayplan:string;
  latitude: any;
  longitude: any;
  locationName: any;

  constructor(private apiService: ApiService,
    public toastController: ToastController,
    private router: Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("usr data : "+JSON.stringify(this.userDetails));
  }

  ionViewWillEnter() {
    this.getGeoLocation();
  }
  markAttendance() {    
    console.log("=this._id== : "+this.userDetails._id);

    let time =  moment().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
        
    let params = {
      user: this.userDetails._id,
      status: this.status,
      start_time : time,
      start_location : this.locationName,
      day_plan : this.dayplan
    };
    console.log('=params== : '+params);

    this.apiService.postData('/attendance', params).subscribe(result => {
      console.log("=attendance result= :"+JSON.stringify(result));
      localStorage.setItem('attendance', JSON.stringify(result['data']));
      if(result['success'] == "1") {
        this.presentToast(result['message'], 'bottom');
        this.router.navigateByUrl('/dashboard');
      } else {
        this.presentToast(result['message'], 'middle');
      }
    }, error => {
      console.log("=ERRRRRRRRR== : "+error);

      alert(JSON.stringify(error));
    });

   
  }
  triggerStart(){
    this.status = 'present';
    this.presentToast('started','bottom');
  }

  async presentToast(msg, position) {
    const toast = await this.toastController.create({
      message: msg,
      position: position,
      duration: 2000
    });
    toast.present();
  }

  getGeoLocation() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.whereInTheEarth(data.coords.latitude, data.coords.longitude)
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    });
  }

  whereInTheEarth(latitude, longitude) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        if (result[0]) {
          this.locationName = "";
          if (result[0]['subThoroughfare']) {
            this.locationName = this.locationName + result[0]['subThoroughfare'] + ",";
          }
          if (result[0]['thoroughfare']) {
            this.locationName = this.locationName + result[0]['thoroughfare'] + ",";
          }
          if (result[0]['subLocality']) {
            this.locationName = this.locationName + result[0]['subLocality'] + ",";
          }
          if (result[0]['locality']) {
            this.locationName = this.locationName + result[0]['locality'] + ",";
          }
          if (result[0]['subAdministrativeArea']) {
            this.locationName = this.locationName + result[0]['subAdministrativeArea'] + ",";
          }
          if (result[0]['administrativeArea']) {
            this.locationName = this.locationName + result[0]['administrativeArea'] + ",";
          }
          if (result[0]['postalCode']) {
            this.locationName = this.locationName + result[0]['postalCode'] + ",";
          }
          if (result[0]['countryName']) {
            this.locationName = this.locationName + result[0]['countryName'] + ",";
          }
        } else {
          this.locationName = "Unable to fetch geolocation";
        }

       

    
      })
      .catch((error: any) => {
        this.locationName = "Unable to fetch geolocation";
   
      });
  }

}
