(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-check-out-create-check-out-module"],{

/***/ "./src/app/pages/create-check-out/create-check-out.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/create-check-out/create-check-out.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateCheckOutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCheckOutPageModule", function() { return CreateCheckOutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_check_out_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-check-out.page */ "./src/app/pages/create-check-out/create-check-out.page.ts");







var routes = [
    {
        path: '',
        component: _create_check_out_page__WEBPACK_IMPORTED_MODULE_6__["CreateCheckOutPage"]
    }
];
var CreateCheckOutPageModule = /** @class */ (function () {
    function CreateCheckOutPageModule() {
    }
    CreateCheckOutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_check_out_page__WEBPACK_IMPORTED_MODULE_6__["CreateCheckOutPage"]]
        })
    ], CreateCheckOutPageModule);
    return CreateCheckOutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-check-out/create-check-out.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/create-check-out/create-check-out.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Check Out</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form *ngIf=\"checkInFor == 'distributor'\" class=\"add-employee-form\" [formGroup]=\"distributorForm\"\n    (ngSubmit)=\"distributorFormSubmit(distributorForm)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-item>\n              <ion-label position=\"floating\">Distributor Name*</ion-label>\n              <ion-input name=\"distributorName\" type=\"text\" formControlName=\"distributorName\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Retailer Name*</ion-label>\n              <ion-input name=\"retailerName\" type=\"text\" formControlName=\"retailerName\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Location*</ion-label>\n              <ion-input name=\"location\" type=\"text\" formControlName=\"location\" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Top Selling Brands</ion-label>\n              <ion-select name=\"topSellingBrands\" formControlName=\"topSellingBrands\" okText=\"Ok\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Philips\">Philips</ion-select-option>\n                <ion-select-option value=\"Videocon\">Videocon</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Top Selling Verticals</ion-label>\n              <ion-select name=\"topSellingVerticals\" formControlName=\"topSellingVerticals\" okText=\"Ok\"\n                cancelText=\"Dismiss\">\n                <ion-select-option value=\"Educational\">Educational</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Secondary Sales Verticals</ion-label>\n              <ion-select name=\"secondarySalesVerticals\" formControlName=\"secondarySalesVerticals\" okText=\"Ok\"\n                cancelText=\"Dismiss\">\n                <ion-select-option value=\"Educational\">Educational</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Luker Secondary</ion-label>\n              <ion-input name=\"lukerSecondary\" type=\"text\" formControlName=\"lukerSecondary\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Luker Counter Share</ion-label>\n              <ion-input name=\"lukerCounterShare\" type=\"text\" formControlName=\"lukerCounterShare\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Targeted Value</ion-label>\n              <ion-input name=\"targetedValue\" type=\"text\" formControlName=\"targetedValue\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Luker Targeted Counter Share</ion-label>\n              <ion-input name=\"lukerTargetedCounterShare\" type=\"text\" formControlName=\"lukerTargetedCounterShare\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Comments</ion-label>\n              <ion-input name=\"comments\" type=\"text\" formControlName=\"comments\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Photo</ion-label>\n              <ion-input name=\"pic\" type=\"file\" formControlName=\"pic\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"distributorForm.invalid\" expand=\"block\">Add Check In\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <form *ngIf=\"checkInFor == 'dealer'\" class=\"add-employee-form\" [formGroup]=\"dealerForm\"\n    (ngSubmit)=\"dealerFormSubmit(dealerForm)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-item>\n              <ion-label position=\"floating\">Dealer Name*</ion-label>\n              <ion-input name=\"dealerName\" type=\"text\" formControlName=\"dealerName\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Mobile Number*</ion-label>\n              <ion-input name=\"mobileNumber\" type=\"text\" formControlName=\"mobileNumber\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Location*</ion-label>\n              <ion-input name=\"location\" type=\"text\" formControlName=\"location\" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Type Or Segment</ion-label>\n              <ion-select name=\"typeOrSegment\" formControlName=\"typeOrSegment\" okText=\"Ok\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Electrition\">Electrition</ion-select-option>\n                <ion-select-option value=\"Videocon\">Videocon</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Project % Completed</ion-label>\n              <ion-input name=\"projectCompleted\" type=\"text\" formControlName=\"projectCompleted\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Focused Verticals</ion-label>\n              <ion-select name=\"focusedVerticals\" formControlName=\"focusedVerticals\" okText=\"Ok\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Educational\">Educational</ion-select-option>\n                <ion-select-option value=\"Other\">Other</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Other Value Expected</ion-label>\n              <ion-input name=\"otherValueExpected\" type=\"text\" formControlName=\"otherValueExpected\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Comments</ion-label>\n              <ion-input name=\"comments\" type=\"text\" formControlName=\"comments\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"stacked\">Photo</ion-label>\n              <ion-input name=\"pic\" type=\"file\" formControlName=\"pic\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"dealerForm.invalid\" expand=\"block\">Add Check In\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/create-check-out/create-check-out.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/create-check-out/create-check-out.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jaGVjay1vdXQvY3JlYXRlLWNoZWNrLW91dC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/create-check-out/create-check-out.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-check-out/create-check-out.page.ts ***!
  \*****************************************************************/
/*! exports provided: CreateCheckOutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCheckOutPage", function() { return CreateCheckOutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");






var CreateCheckOutPage = /** @class */ (function () {
    function CreateCheckOutPage(geolocation, nativeGeocoder, activatedRoute) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.activatedRoute = activatedRoute;
    }
    CreateCheckOutPage.prototype.ngOnInit = function () {
        this.checkInFor = this.activatedRoute.snapshot.paramMap.get('checkInFor');
        this.distributorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            distributorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            retailerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            topSellingBrands: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            topSellingVerticals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            secondarySalesVerticals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lukerSecondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lukerCounterShare: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            targetedValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            lukerTargetedCounterShare: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            pic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.dealerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dealerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            typeOrSegment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            projectCompleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            focusedVerticals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            otherValueExpected: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            pic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.getGeoLocation();
    };
    CreateCheckOutPage.prototype.getGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            _this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.whereInTheEarth(data.coords.latitude, data.coords.longitude);
            _this.latitude = data.coords.latitude;
            _this.longitude = data.coords.longitude;
        });
    };
    CreateCheckOutPage.prototype.distributorFormSubmit = function (data) {
    };
    CreateCheckOutPage.prototype.dealerFormSubmit = function (data) {
    };
    CreateCheckOutPage.prototype.whereInTheEarth = function (latitude, longitude) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
            .then(function (result) {
            if (result[0]) {
                _this.locationName = "";
                if (result[0]['subThoroughfare']) {
                    _this.locationName = _this.locationName + result[0]['subThoroughfare'] + ",";
                }
                if (result[0]['thoroughfare']) {
                    _this.locationName = _this.locationName + result[0]['thoroughfare'] + ",";
                }
                if (result[0]['subLocality']) {
                    _this.locationName = _this.locationName + result[0]['subLocality'] + ",";
                }
                if (result[0]['locality']) {
                    _this.locationName = _this.locationName + result[0]['locality'] + ",";
                }
                if (result[0]['subAdministrativeArea']) {
                    _this.locationName = _this.locationName + result[0]['subAdministrativeArea'] + ",";
                }
                if (result[0]['administrativeArea']) {
                    _this.locationName = _this.locationName + result[0]['administrativeArea'] + ",";
                }
                if (result[0]['postalCode']) {
                    _this.locationName = _this.locationName + result[0]['postalCode'] + ",";
                }
                if (result[0]['countryName']) {
                    _this.locationName = _this.locationName + result[0]['countryName'] + ",";
                }
            }
            else {
                _this.locationName = "Unable to fetch geolocation";
            }
            _this.distributorForm.controls.location.setValue(_this.locationName);
            _this.dealerForm.controls.location.setValue(_this.locationName);
        })
            .catch(function (error) {
            _this.locationName = "Unable to fetch geolocation";
            _this.distributorForm.controls.location.setValue(_this.locationName);
            _this.dealerForm.controls.location.setValue(_this.locationName);
        });
    };
    CreateCheckOutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-check-out',
            template: __webpack_require__(/*! ./create-check-out.page.html */ "./src/app/pages/create-check-out/create-check-out.page.html"),
            styles: [__webpack_require__(/*! ./create-check-out.page.scss */ "./src/app/pages/create-check-out/create-check-out.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateCheckOutPage);
    return CreateCheckOutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-check-out-create-check-out-module.js.map