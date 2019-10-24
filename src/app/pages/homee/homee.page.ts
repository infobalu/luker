import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import * as moment from 'moment';
import { Platform } from '@ionic/angular';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-homee',
  templateUrl: './homee.page.html',
  styleUrls: ['./homee.page.scss'],
})
export class HomeePage implements OnInit {
  userDetails: any;
  name: String;
  latitude: any;
  longitude: any;
  locationName: any;
  public isToggled: boolean;
  day_plan_status: string;
  dayplan: string;
  n1: number = 1;
  checkins: number = 0;
  att_id: any;
  forCheckin: number = 0;
  params: any;
  activeCheckins: any = [];
  total_emp: number = 0;
  present_emp: number = 0;
  loading: any;
  internetstatus: any;
  backButtonSubscription

  constructor(private router: Router, private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public toastController: ToastController, private apiService: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private platform: Platform) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
    this.name = this.userDetails.employee_name;
    this.day_plan_status = this.userDetails.day_plan_status;
    this.total_emp = this.userDetails.total_emp;

    this.checkins = this.userDetails.checkins;
    this.att_id = this.userDetails.att_id;

    this.internetstatus = localStorage.getItem("internet");
    console.log("= this.internetstatus == : " + this.internetstatus);

    if (this.day_plan_status == '1') {
      this.isToggled = true;
      this.n1 = 1;
    } else {
      this.isToggled = false;
      this.n1 = 1;
    }

  }


  goToAddEmployee() {
    this.router.navigateByUrl('/add-employee');
  }
  goToViewEmployee() {
    this.router.navigateByUrl('/viewemployees');
  }
  goToViewAttendance() {
    this.router.navigateByUrl('/emp-attendane-rpt');
  }

  notify(val) {
    if (navigator.onLine) {
      console.log("==notify called= : " + val);
      if (this.isToggled && this.n1 == 1) {
        console.log("Toggled: " + this.isToggled);
        this.getGeoLocation();
      } else if (this.n1 == 1) {
        console.log("Toggled: " + this.isToggled);
        this.getGeoLocation();
      }
      this.n1 = 1;
    } else {
      alert('Please check your internet connection');
    }
  }

  getGeoLocation() {
    this.presentLoading();
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

          this.dismissLoading();

          if (!this.isToggled && this.forCheckin == 0) {

            this.params = {
              end_time: time,
              end_location: this.locationName,
              att_id: this.att_id,
              user_id: this.userDetails._id
            };

            this.apiService.postData('/endAttendance', this.params).subscribe(result => {
              console.log("=result= :" + JSON.stringify(result));
              if (result['success'] == "1") {
                this.presentToast(result['message'], 'bottom');
                // this.router.navigateByUrl('/login');
                this.isToggled = false;
                this.n1 = 0;
              } else {
                this.presentToast('Something went wrong, Please try again..', 'bottom');
                this.isToggled = true;
                this.n1 = 0;
              }
            }, error => {
              alert(JSON.stringify(error));
              this.isToggled = true;
              this.n1 = 0;
            });
          } else if (this.isToggled && this.forCheckin == 0) {
            console.log("mark atten");
            this.markAttendance();
          } else if (this.forCheckin == 1) {
            this.forCheckin = 0;

            console.log('====LOCATION====== : ' + this.locationName);

            console.log('=FOR CHECKIN==');
            let params = {
              created_by: this.userDetails._id,
              checkin_time: moment().format('DD-MM-YYYY, hh:mm:ss a'),
              checkin_loc: this.locationName,
            };

            this.apiService.postData('/startCheckIn', params).subscribe(result => {
              console.log("=startCheckIn= :" + JSON.stringify(result));
              if (result['success'] == "1") {
                console.log('=check _id= : ' + result['data']._id);
                localStorage.setItem('checkin_id', result['data']._id);
                this.router.navigateByUrl('/create-check-in/');
              } else {
                this.presentToast(result['message'], 'bottom');
              }
            }, error => {
              alert(JSON.stringify(error));
            });
          }

        } else {
          this.locationName = "Unable to fetch geolocation";
          this.presentToast('Please check the location settings', 'bottom');
        }
      })
      .catch((error: any) => {
        this.locationName = "Unable to fetch geolocation";
        console.log("=ERROR== : " + error);
        this.isToggled = true;
        this.n1 = 0;
        this.dismissLoading();
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


  markAttendance() {
    this.presentAlertPrompt();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      inputs: [
        {
          name: 'dayplan',
          type: 'text',
          placeholder: 'Day Plan'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel : ' + this.isToggled);
            this.isToggled = false;
            this.n1 = 0;
          }
        }, {
          text: 'Ok',
          handler: data => {

            if (data.dayplan == "") {
              this.presentToast("Day plan is required", 'bottom');
              this.isToggled = false;
              this.n1 = 0;
            } else {
              console.log(data.dayplan)

              this.dayplan = data.dayplan;

              let time = moment().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm

              let params = {
                user: this.userDetails._id,
                status: 'present',
                start_time: time,
                start_location: this.locationName,
                day_plan: this.dayplan
              };
              console.log('=params== : ' + params);

              this.apiService.postData('/attendance', params).subscribe(result => {

                localStorage.setItem('attendance', JSON.stringify(result['data']));


                console.log("=attendance result NEW= :" + JSON.stringify(localStorage.getItem('attendance')));

                if (result['success'] == "1") {
                  this.presentToast(result['message'], 'bottom');
                  this.day_plan_status = '1';
                  // this.router.navigateByUrl('/dashboard');
                  this.presentToast(result['message'], 'bottom');
                } else {
                  this.presentToast(result['message'], 'bottom');
                  this.isToggled = false;
                  this.n1 = 0;
                }
              }, error => {
                console.log("=ERRRRRRRRR== : " + error);
                this.isToggled = true;
                this.n1 = 0;
              });
            }

          }

        }
      ]
    });

    await alert.present();
  }

  goToCheckIn() {
    //this.router.navigateByUrl('/clenttype');
    if (navigator.onLine) {
      this.forCheckin = 1;
      this.getGeoLocation();
    }
    else {
      alert('Please check your internet connection');
    }

  }

  ionViewWillEnter() {
    console.log("==ionViewWillEnter==");
    this.triggerHomeApi();
  }

  triggerHomeApi() {
    let params = {
      userId: this.userDetails._id
    };

    if (navigator.onLine) {
      this.apiService.postData('/dashboard', params).subscribe(result => {
        console.log("=result= :" + JSON.stringify(result));

        if (result['success'] == 1) {
          if (this.userDetails.user_type == 'owner') {
            this.total_emp = result['data']['user'].total_emp;
            this.present_emp = result['data']['user'].present_emp;

          } else if (this.userDetails.user_type == 'employee') {

            this.checkins = result['data']['user'].checkins;
            console.log("= this.checkins= :" + this.checkins);
            console.log("=day_plan_status= : " + this.day_plan_status);

            if (this.day_plan_status == '1') {
              this.isToggled = true;
              this.n1 = 1;
            } else {
              this.isToggled = false;
              this.n1 = 1;
            }

          }
        }
      }, error => {
        alert(JSON.stringify(error));
      });

    } else {
      alert('Please check your internet connection');
    }

  }

  async dismissLoading() {
    this.loadingController.dismiss();
    console.log('Loading dismissed!');
  }


  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please Wait...',
    });
    await this.loading.present();
  }

  doRefresh(event) {
    this.triggerHomeApi();
    event.target.complete();
  }

}
