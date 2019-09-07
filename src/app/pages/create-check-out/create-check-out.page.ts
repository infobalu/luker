import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-create-check-out',
  templateUrl: './create-check-out.page.html',
  styleUrls: ['./create-check-out.page.scss'],
})
export class CreateCheckOutPage implements OnInit {

  distributorForm: any;
  dealerForm: any;
  latitude: any;
  longitude: any;
  locationName: any;
  checkInFor: any;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkInFor = this.activatedRoute.snapshot.paramMap.get('checkInFor');

    this.distributorForm = new FormGroup({
      distributorName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      retailerName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      location: new FormControl("", Validators.compose([
        Validators.required
      ])),
      topSellingBrands: new FormControl(""),
      topSellingVerticals: new FormControl(""),
      secondarySalesVerticals: new FormControl(""),
      lukerSecondary: new FormControl(""),
      lukerCounterShare: new FormControl(""),
      targetedValue: new FormControl(""),
      lukerTargetedCounterShare: new FormControl(""),
      comments: new FormControl(""),
      pic: new FormControl(""),
    });

    this.dealerForm = new FormGroup({
      dealerName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      mobileNumber: new FormControl("", Validators.compose([
        Validators.required
      ])),
      location: new FormControl("", Validators.compose([
        Validators.required
      ])),
      typeOrSegment: new FormControl(""),
      projectCompleted: new FormControl(""),
      focusedVerticals: new FormControl(""),
      otherValueExpected: new FormControl(""),
      comments: new FormControl(""),
      pic: new FormControl(""),
    });

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

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.whereInTheEarth(data.coords.latitude, data.coords.longitude)
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    });
  }

  distributorFormSubmit(data) {
  }

  dealerFormSubmit(data) {
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

        this.distributorForm.controls.location.setValue(this.locationName);
        this.dealerForm.controls.location.setValue(this.locationName);
      })
      .catch((error: any) => {
        this.locationName = "Unable to fetch geolocation";
        this.distributorForm.controls.location.setValue(this.locationName);
        this.dealerForm.controls.location.setValue(this.locationName);
      });

  }

}
