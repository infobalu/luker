import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ApiService } from './../../services/api.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as moment from 'moment';
import { File, FileEntry } from '@ionic-native/file/ngx';

declare var cordova;

@Component({
  selector: 'app-create-check-in',
  templateUrl: './create-check-in.page.html',
  styleUrls: ['./create-check-in.page.scss'],
})

export class CreateCheckInPage implements OnInit {

  distributorForm: any;
  dealerForm: any;
  latitude: any;
  longitude: any;
  locationName: any;
  checkInFor: any;
  userDetails: any;
  capturedPhoto: any;
  base64Image: any;
  image: any;
  checkinId:any;
  loading:any;


  imgBlob: any;
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private camera: Camera,
    private file: File,
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.checkInFor = this.userDetails.employee_type;
    console.log('=this.checkInFor == : ' + this.checkInFor);
    this.checkinId = localStorage.getItem('checkin_id')

    console.log('=checkinId== :'+this.checkinId);


    this.distributorForm = new FormGroup({
      distributorName: new FormControl('', Validators.compose([Validators.required])),
      retailerName: new FormControl('', Validators.compose([Validators.required])),
      location: new FormControl('', Validators.compose([Validators.required])),
      retailerNum: new FormControl('', Validators.compose([Validators.required])),
      retaileraddr: new FormControl('', Validators.compose([Validators.required])),
      routename: new FormControl('', Validators.compose([Validators.required])),
      topbrand: new FormControl('', Validators.compose([Validators.required])),
      secsales: new FormControl('', Validators.compose([Validators.required])),
      lukerorder: new FormControl('', Validators.compose([Validators.required])),
      lukersec: new FormControl('', Validators.compose([Validators.required])),
      lukershare: new FormControl('', Validators.compose([Validators.required])),
      targetval: new FormControl('', Validators.compose([Validators.required])),
      lukertarget: new FormControl('', Validators.compose([Validators.required]))
    });

    this.dealerForm = new FormGroup({
      dealerName: new FormControl('', Validators.compose([Validators.required])),
      dateofvisit: new FormControl('', Validators.compose([Validators.required])),
      projectname: new FormControl('', Validators.compose([Validators.required])),
      segment: new FormControl('', Validators.compose([Validators.required])),
      custname: new FormControl('', Validators.compose([Validators.required])),
      mobileNumber: new FormControl('', Validators.compose([Validators.required])),
      decmakername: new FormControl('', Validators.compose([Validators.required])),
      decmakernum: new FormControl('', Validators.compose([Validators.required])),
      contractorname: new FormControl('', Validators.compose([Validators.required])),
      contractornum: new FormControl('', Validators.compose([Validators.required])),
      consultantname: new FormControl('', Validators.compose([Validators.required])),
      consultantnum: new FormControl('', Validators.compose([Validators.required])),
      architectname: new FormControl('', Validators.compose([Validators.required])),
      architectnum: new FormControl('', Validators.compose([Validators.required])),
      electricianname: new FormControl('', Validators.compose([Validators.required])),
      electriciannum: new FormControl('', Validators.compose([Validators.required])),
      buildername: new FormControl('', Validators.compose([Validators.required])),
      buildernum: new FormControl('', Validators.compose([Validators.required])),
      stageconstruction: new FormControl('', Validators.compose([Validators.required])),
      expectprice: new FormControl('', Validators.compose([Validators.required])),
      location: new FormControl('', Validators.compose([Validators.required])),
      remarks: new FormControl('', Validators.compose([Validators.required])),
      compname: new FormControl('', Validators.compose([Validators.required])),
      projectvalue: new FormControl('', Validators.compose([Validators.required])),

    });

  }

  ngOnInit() {
    const dp = new DatePipe(navigator.language);
    const p = 'y-MM-dd'; // YYYY-MM-DD
    const dtr = dp.transform(new Date(), p);
    console.log('date', dtr);
    if (this.checkInFor === 'dealer') {
      // this.dealerForm.dateofvisit.patchValue(dtr);
      const val = 'dateofvisit';
      this.dealerForm.controls[val].patchValue(dtr);
    }
  }

  ionViewWillEnter() {
    this.getGeoLocation();
  }

  getGeoLocation() {
    this.locationName = 'Unable to fetch geolocation';
    this.distributorForm.controls.location.setValue(this.locationName);
    this.dealerForm.controls.location.setValue(this.locationName);

    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
      this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  distributorFormSubmit(data) {
    let time = moment().format('DD-MM-YYYY, hh:mm:ss a');
    let params = {
      check_in_for: this.checkInFor,
      created_by: this.userDetails._id,
      checkin_loc: this.distributorForm.value.retaileraddr,
      checkin_time: 6,
      checkout_loc: this.distributorForm.value.routename,
      checkout_time: time,
      distributor_name: this.distributorForm.value.distributorName,
      retailer_name: this.distributorForm.value.retailerName,
      retailer_number: this.distributorForm.value.retailerNum,
      address: this.distributorForm.value.retaileraddr,
      route_name: this.distributorForm.value.routename,
      top_sale: this.distributorForm.value.topbrand,
      secondary_sale: this.distributorForm.value.secsales,
      luker_day: this.distributorForm.value.lukerorder,
      luker_month: this.distributorForm.value.lukersec,
      luker_share: this.distributorForm.value.lukershare,
      targeted_value: this.distributorForm.value.targetval,
      targeted_share: this.distributorForm.value.lukertarget,
      checkin_id:this.checkinId,
      latitude:this.latitude,
      longitude:this.longitude,
      location:this.distributorForm.value.routename
    };
    console.log('params', JSON.stringify(params));
    this.presentLoading();
    this.apiService.postData('/createCheckIn', params).subscribe((result: any) => {
      console.log('result distributor', JSON.stringify(result));
      const finaldatas = result;
      if (finaldatas.success == 1) {
        
        this.uploadImages(this.checkinId);
        this.dismissLoading();
        this.presentToast('checked out successfully', 'bottom');
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  dealerFormSubmit(data) {
    console.log('data', data);
    console.log('form control value', this.dealerForm.value);
    let time = moment().format('DD-MM-YYYY, hh:mm:ss a');

    let params = {
      check_in_for: this.checkInFor,
      created_by: this.userDetails._id,
      checkin_loc: this.dealerForm.value.location,
      checkin_time: this.dealerForm.value.dateofvisit,
      checkout_loc: this.dealerForm.value.location,
      checkout_time: time,
      type_of_segment: this.dealerForm.value.segment,
      dealer_name: this.dealerForm.value.dealerName,
      customer_name: this.dealerForm.value.custname,
      customer_number: this.dealerForm.value.mobileNumber,

      decision_maker_name: this.dealerForm.value.decmakername,
      decision_maker_number: this.dealerForm.value.decmakernum,
      contractor_name: this.dealerForm.value.contractorname,
      contractor_number: this.dealerForm.value.contractornum,
      consultant_name: this.dealerForm.value.consultantname,
      consultant_number: this.dealerForm.value.consultantnum,
      architect_name: this.dealerForm.value.architectname,
      architect_number: this.dealerForm.value.architectnum,
      electrician_name: this.dealerForm.value.electricianname,
      electrician_number: this.dealerForm.value.electriciannum,
      builder_name: this.dealerForm.value.buildername,
      builder_number: this.dealerForm.value.buildernum,
      construction_stage: this.dealerForm.value.stageconstruction,
      exp_pro_final: this.dealerForm.value.expectprice,
      remarks: this.dealerForm.value.remarks,
      competitor_name: this.dealerForm.value.compname,
      checkin_id: this.checkinId,
      latitude:this.latitude,
      longitude:this.longitude,
      location:this.distributorForm.value.routename
    };
    this.presentLoading();
    this.apiService.postData('/createCheckIn', params).subscribe((result: any) => {
      console.log('result dealer', JSON.stringify(result));
      const finaldatas = result;
      if (finaldatas.success == 1) {
        this.dismissLoading();
        this.uploadImages(this.checkinId);
        this.presentToast('Check out successfully', 'bottom');
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  makeFileIntoBlob(filePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = '';
      this.file.resolveLocalFilesystemUrl(filePath).then(fileEntry => {
        const { name, nativeURL } = fileEntry;
        // get the path..
        const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
        console.log('path', path);
        console.log('fileName', name);
        fileName = name;
        // we are provided the name, so now read the file into
        // a buffer
        return this.file.readAsArrayBuffer(path, name);
      })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          const imgBlob = new Blob([buffer], {
            type: 'image/jpeg'
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({ fileName, imgBlob });
        })
        .catch(e => reject(e));
    });
  }

  async uploadFromCamera() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    try {
      const cameraInfo = await this.camera.getPicture(options);
      const blobInfo = await this.makeFileIntoBlob(cameraInfo);
      this.base64Image = cameraInfo;

      this.capturedPhoto = blobInfo;
      console.log('this.capturedPhoto', this.capturedPhoto);
    } catch (e) {
      console.log(e.message);
      console.log('File Upload Error ' + e.message);
    }
  }


  uploadImages(path: any) {
    let _self = this;
    cordova.plugin.http.uploadFile('https://dev.salesblazon.co:8080/uploadImage', { },
      {'checkin_id': path}, this.base64Image, 'image', function (response) {
        console.log('response', JSON.stringify(response));
        _self.router.navigateByUrl('/dashboard');
      }, function (response) {
        console.error(response.error);
        _self.dismissLoading();
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

  whereInTheEarth(latitude, longitude) {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        if (result[0]) {
          this.locationName = '';
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

        this.distributorForm.controls.location.setValue(this.locationName);
        this.dealerForm.controls.location.setValue(this.locationName);

        this.distributorForm.controls.retaileraddr.setValue(this.locationName);
      })
      .catch((error: any) => {
        this.locationName = "Unable to fetch geolocation";
        this.distributorForm.controls.location.setValue(this.locationName);
        this.dealerForm.controls.location.setValue(this.locationName);
      });

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
}
