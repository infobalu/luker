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
  userDetails:any;
  constructor(
    public menu: MenuController,
    private router: Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private apiService: ApiService,
    public toastController: ToastController
    ) {}

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));

  }

  radioChecked(val) {
    console.log('radioGroupChange : ', val);
    this.clientType = val;
    localStorage.setItem('clienttype', val);
  }

  addCheckin(){
   // this.router.navigateByUrl('/create-check-in/' + this.clientType );
    this.getGeoLocation();
  }


  getGeoLocation() {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
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

          console.log("= this.locationName final= : " + this.locationName);

          let time = moment().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm


          console.log('==this.userDetails ID === : ' + this.userDetails._id);

         
        console.log('====LOCATION====== : '+this.locationName);

            console.log('=FOR CHECKIN==');
            let params = {
              created_by: this.userDetails._id,
              checkin_time:  moment().format('DD-MM-YYYY, hh:mm:ss a') ,
              checkin_loc: this.locationName,
            };

            this.apiService.postData('/startCheckIn', params).subscribe(result => {
              console.log("=startCheckIn= :"+JSON.stringify(result));
              if(result['success'] == "1") {
                this.router.navigateByUrl('/create-check-in/' + this.clientType );
              } else {
                this.presentToast(result['message'], 'bottom');
              }
            }, error => {
              alert(JSON.stringify(error));
            });
        

        } else {
          this.locationName = "Unable to fetch geolocation";
          this.presentToast('Please check the location settings', 'bottom');
        }
      })
      .catch((error: any) => {
        this.locationName = "Unable to fetch geolocation";
        this.presentToast('Please check the location settings Or :' + error, 'bottom');
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

  //

  goToMyCheckin(){
    this.router.navigateByUrl('/mycheckins');
  }

}