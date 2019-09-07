(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-markattendance-markattendance-module"],{

/***/ "./src/app/pages/markattendance/markattendance.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/markattendance/markattendance.module.ts ***!
  \***************************************************************/
/*! exports provided: MarkattendancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkattendancePageModule", function() { return MarkattendancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _markattendance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markattendance.page */ "./src/app/pages/markattendance/markattendance.page.ts");







var routes = [
    {
        path: '',
        component: _markattendance_page__WEBPACK_IMPORTED_MODULE_6__["MarkattendancePage"]
    }
];
var MarkattendancePageModule = /** @class */ (function () {
    function MarkattendancePageModule() {
    }
    MarkattendancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_markattendance_page__WEBPACK_IMPORTED_MODULE_6__["MarkattendancePage"]]
        })
    ], MarkattendancePageModule);
    return MarkattendancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/markattendance/markattendance.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/markattendance/markattendance.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <form>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h4>Attendance</h4>\n          </div>\n          <ion-avatar>\n            <img src=\"assets/img/start.jpg\" (click) =\"triggerStart()\">\n          </ion-avatar>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"dayplan\" placeholder=\"Day Plan\" [(ngModel)]=\"dayplan\" ></ion-input>\n            </ion-item>\n            \n          </div>\n          <div padding>\n            <ion-button size=\"small\" type=\"submit\" expand=\"block\" (click) =\"markAttendance()\">Save</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/markattendance/markattendance.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/markattendance/markattendance.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcmthdHRlbmRhbmNlL21hcmthdHRlbmRhbmNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/markattendance/markattendance.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/markattendance/markattendance.page.ts ***!
  \*************************************************************/
/*! exports provided: MarkattendancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkattendancePage", function() { return MarkattendancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");








var MarkattendancePage = /** @class */ (function () {
    function MarkattendancePage(apiService, toastController, router, geolocation, nativeGeocoder) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.router = router;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    MarkattendancePage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("usr data : " + JSON.stringify(this.userDetails));
    };
    MarkattendancePage.prototype.ionViewWillEnter = function () {
        this.getGeoLocation();
    };
    MarkattendancePage.prototype.markAttendance = function () {
        var _this = this;
        console.log("=this._id== : " + this.userDetails._id);
        var time = moment__WEBPACK_IMPORTED_MODULE_4__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
        var params = {
            user: this.userDetails._id,
            status: this.status,
            start_time: time,
            start_location: this.locationName,
            day_plan: this.dayplan
        };
        console.log('=params== : ' + params);
        this.apiService.postData('/attendance', params).subscribe(function (result) {
            console.log("=attendance result= :" + JSON.stringify(result));
            localStorage.setItem('attendance', JSON.stringify(result['data']));
            if (result['success'] == "1") {
                _this.presentToast(result['message'], 'bottom');
                _this.router.navigateByUrl('/dashboard');
            }
            else {
                _this.presentToast(result['message'], 'middle');
            }
        }, function (error) {
            console.log("=ERRRRRRRRR== : " + error);
            alert(JSON.stringify(error));
        });
    };
    MarkattendancePage.prototype.triggerStart = function () {
        this.status = 'present';
        this.presentToast('started', 'bottom');
    };
    MarkattendancePage.prototype.presentToast = function (msg, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            position: position,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkattendancePage.prototype.getGeoLocation = function () {
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
    MarkattendancePage.prototype.whereInTheEarth = function (latitude, longitude) {
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
        })
            .catch(function (error) {
            _this.locationName = "Unable to fetch geolocation";
        });
    };
    MarkattendancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-markattendance',
            template: __webpack_require__(/*! ./markattendance.page.html */ "./src/app/pages/markattendance/markattendance.page.html"),
            styles: [__webpack_require__(/*! ./markattendance.page.scss */ "./src/app/pages/markattendance/markattendance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]])
    ], MarkattendancePage);
    return MarkattendancePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-markattendance-markattendance-module.js.map