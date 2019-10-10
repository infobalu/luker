(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homee-homee-module"],{

/***/ "./src/app/pages/homee/homee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.module.ts ***!
  \*********************************************/
/*! exports provided: HomeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeePageModule", function() { return HomeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homee.page */ "./src/app/pages/homee/homee.page.ts");







var routes = [
    {
        path: '',
        component: _homee_page__WEBPACK_IMPORTED_MODULE_6__["HomeePage"]
    }
];
var HomeePageModule = /** @class */ (function () {
    function HomeePageModule() {
    }
    HomeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_homee_page__WEBPACK_IMPORTED_MODULE_6__["HomeePage"]]
        })
    ], HomeePageModule);
    return HomeePageModule;
}());



/***/ }),

/***/ "./src/app/pages/homee/homee.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-header text-center>\n      <ion-toolbar text-center padding class=\"red_header\">\n      <img src=\"assets/img/user.svg\" class=\"user_img\" style=\"margin-bottom: 1rem\">\n      <ion-title>{{name}} </ion-title>\n      <p class=\"_text_md _text_white m_0\"> Welcome</p>\n      </ion-toolbar>\n      <!-- <ion-toolbar text-center class=\"red_header\">\n      \n      </ion-toolbar> -->\n      </ion-header>\n \n\n<!-- \n  <ion-header> <ion-toolbar class=\"new-background-color\"> <ion-title>{{name}}</ion-title> </ion-toolbar> </ion-header> -->\n\n\n  <ion-content>\n    <div class=\"red_mask\"></div>\n    <ion-grid padding style=\"margin-top: 5vh\">\n      <ion-row>\n        <ion-card class=\"card_list\" padding>\n          <div class=\"card_top_bar\">\n            <ion-row>\n              <ion-col col-6>\n                <p class=\"text_muted\" *ngIf=\"userDetails.user_type == 'owner'\"> Total <br> representatives</p>\n                <p class=\"bold text_md text_dark\" *ngIf=\"userDetails.user_type == 'employee'\"> Mark<br> my attendance</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <button ion-button class=\"btn_plane\" (click)=\"goToViewEmployee()\" *ngIf=\"userDetails.user_type == 'owner'\"> View all</button>\n                <ion-item *ngIf=\"userDetails.user_type == 'employee'\">\n                    <ion-toggle  [(ngModel)]=\"isToggled\" (ionChange)=\"notify(n1)\"></ion-toggle>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>\n                <h1 class=\"count_num m_0\" *ngIf=\"userDetails.user_type == 'owner'\"> {{total_emp}}</h1>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"card_bottom_bar\" text-center padding>\n            <!-- <button ion-button class=\"btn_blue\"> Add new representative </button> -->\n            <ion-button expand=\"block\" class=\"btn_blue\"  (click)='goToAddEmployee()' *ngIf=\"userDetails.user_type == 'owner'\">\n              Add new representative</ion-button>\n\n              <ion-button expand=\"block\" class=\"btn_blue\"  (click)='goToViewAttendance()' *ngIf=\"userDetails.user_type == 'owner'\">\n                  View Attendance</ion-button>\n\n            <ion-row *ngIf=\"userDetails.user_type == 'employee'\">\n                <ion-col col-6>\n                  Check-in <br> Left &nbsp; <span class=\"check_count\"> {{checkins}}</span>\n                </ion-col>\n    \n                <!-- <ion-col col-6 text-right>\n                  <button class=\"btn_fab\"  (click)=\"goToCheckIn()\"> <ion-icon name=\"add\"></ion-icon> </button>\n                </ion-col> -->\n\n                <div padding>\n                  <ion-button size=\"small\" type=\"submit\" (click)=\"goToCheckIn()\"  [disabled]=\"day_plan_status == 0\">Start Check-in</ion-button>\n                </div>\n\n\n              </ion-row>\n\n\n          </div>\n        </ion-card>\n      </ion-row>\n  \n      <ion-row *ngIf=\"userDetails.user_type == 'owner'\">\n        <ion-card class=\"card_list _card_black\" padding>\n          <ion-row>\n            <ion-col col-6>\n              <p class=\"_text_white\"> Today's Total <br>Attendance</p>\n            </ion-col>\n            <ion-col col-6 text-right>\n              <p class=\"_text_white\"> <span class=\"count_num\"> {{present_emp}}</span> / {{total_emp}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n  \n      <ion-row *ngIf=\"userDetails.user_type == 'owner'\">\n        <ion-card class=\"card_list _card_muted\" padding >\n          <ion-row>\n            <ion-col col-6>\n              <p class=\"_text_white\"> Today's Check-in <br>report</p>\n            </ion-col>\n            <ion-col col-6 text-right>\n             <!-- date picker -->\n  \n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n    </ion-grid>\n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/homee/homee.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar.background {\n  background: red; }\n\n.new-background-color {\n  --background: #c6101c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1bWVzaGIvRGVza3RvcC9zYW1wbGUvZ3VydS9zcmMvYXBwL3BhZ2VzL2hvbWVlL2hvbWVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQ0osRUFBQTs7QUFFQTtFQUF1QixxQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZWUvaG9tZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIuYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiByZWRcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yeyAtLWJhY2tncm91bmQ6ICNjNjEwMWM7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/homee/homee.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/homee/homee.page.ts ***!
  \*******************************************/
/*! exports provided: HomeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeePage", function() { return HomeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var HomeePage = /** @class */ (function () {
    function HomeePage(router, geolocation, nativeGeocoder, toastController, apiService, alertController) {
        this.router = router;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.toastController = toastController;
        this.apiService = apiService;
        this.alertController = alertController;
        this.n1 = 1;
        this.checkins = 0;
        this.forCheckin = 0;
        this.activeCheckins = [];
        this.total_emp = 0;
        this.present_emp = 0;
    }
    HomeePage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
        this.name = this.userDetails.employee_name;
        this.day_plan_status = this.userDetails.day_plan_status;
        this.total_emp = this.userDetails.total_emp;
        console.log("=this.user_type= : " + this.userDetails.user_type);
        console.log("=day_plan_status= : " + this.day_plan_status);
        console.log("=total_emp= : " + this.total_emp);
        this.checkins = this.userDetails.checkins;
        this.att_id = this.userDetails.att_id;
        if (this.day_plan_status == '1') {
            this.isToggled = true;
            this.n1 = 1;
        }
        else {
            this.isToggled = false;
            this.n1 = 1;
        }
    };
    HomeePage.prototype.goToAddEmployee = function () {
        this.router.navigateByUrl('/add-employee');
    };
    HomeePage.prototype.goToViewEmployee = function () {
        this.router.navigateByUrl('/viewemployees');
    };
    HomeePage.prototype.goToViewAttendance = function () {
        this.router.navigateByUrl('/emp-attendane-rpt');
    };
    HomeePage.prototype.notify = function (val) {
        console.log("==notify called= : " + val);
        if (this.isToggled && this.n1 == 1) {
            console.log("Toggled: " + this.isToggled);
            this.getGeoLocation();
        }
        else if (this.n1 == 1) {
            console.log("Toggled: " + this.isToggled);
            this.getGeoLocation();
        }
        this.n1 = 1;
    };
    HomeePage.prototype.getGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            _this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomeePage.prototype.whereInTheEarth = function (latitude, longitude) {
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
                console.log("= this.locationName final= : " + _this.locationName);
                var time = moment__WEBPACK_IMPORTED_MODULE_7__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
                console.log('==this.userDetails ID === : ' + _this.userDetails._id);
                if (!_this.isToggled && _this.forCheckin == 0) {
                    _this.params = {
                        end_time: time,
                        end_location: _this.locationName,
                        att_id: _this.att_id,
                        user_id: _this.userDetails._id
                    };
                    _this.apiService.postData('/endAttendance', _this.params).subscribe(function (result) {
                        console.log("=result= :" + JSON.stringify(result));
                        if (result['success'] == "1") {
                            _this.presentToast(result['message'], 'middle');
                            // this.router.navigateByUrl('/login');
                            _this.isToggled = false;
                            _this.n1 = 0;
                        }
                        else {
                            _this.presentToast('Something went wrong, Please try again..', 'middle');
                            _this.isToggled = true;
                            _this.n1 = 0;
                        }
                    }, function (error) {
                        alert(JSON.stringify(error));
                        _this.isToggled = true;
                        _this.n1 = 0;
                    });
                }
                else if (_this.isToggled && _this.forCheckin == 0) {
                    console.log("mark atten");
                    _this.markAttendance();
                }
                else if (_this.forCheckin == 1) {
                    _this.forCheckin = 0;
                    console.log('====LOCATION====== : ' + _this.locationName);
                    console.log('=FOR CHECKIN==');
                    var params = {
                        created_by: _this.userDetails._id,
                        checkin_time: moment__WEBPACK_IMPORTED_MODULE_7__().format('DD-MM-YYYY, hh:mm:ss a'),
                        checkin_loc: _this.locationName,
                    };
                    _this.apiService.postData('/startCheckIn', params).subscribe(function (result) {
                        console.log("=startCheckIn= :" + JSON.stringify(result));
                        if (result['success'] == "1") {
                            console.log('=check _id= : ' + result['data']._id);
                            localStorage.setItem('checkin_id', result['data']._id);
                            _this.router.navigateByUrl('/create-check-in/');
                        }
                        else {
                            _this.presentToast(result['message'], 'bottom');
                        }
                    }, function (error) {
                        alert(JSON.stringify(error));
                    });
                }
            }
            else {
                _this.locationName = "Unable to fetch geolocation";
                _this.presentToast('Please check the location settings', 'bottom');
            }
        })
            .catch(function (error) {
            _this.locationName = "Unable to fetch geolocation";
            console.log("=ERROR== : " + error);
            _this.isToggled = true;
            _this.n1 = 0;
            _this.presentToast('Please check the location settings Or :' + error, 'bottom');
        });
    };
    HomeePage.prototype.presentToast = function (msg, position) {
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
    HomeePage.prototype.markAttendance = function () {
        this.presentAlertPrompt();
    };
    HomeePage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel : ' + _this.isToggled);
                                        _this.isToggled = false;
                                        _this.n1 = 0;
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data.dayplan == "") {
                                            _this.presentToast("dayplan is required", 'bottom');
                                            _this.isToggled = false;
                                            _this.n1 = 0;
                                        }
                                        else {
                                            console.log(data.dayplan);
                                            _this.dayplan = data.dayplan;
                                            var time = moment__WEBPACK_IMPORTED_MODULE_7__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
                                            var params = {
                                                user: _this.userDetails._id,
                                                status: 'present',
                                                start_time: time,
                                                start_location: _this.locationName,
                                                day_plan: _this.dayplan
                                            };
                                            console.log('=params== : ' + params);
                                            _this.apiService.postData('/attendance', params).subscribe(function (result) {
                                                localStorage.setItem('attendance', JSON.stringify(result['data']));
                                                console.log("=attendance result NEW= :" + JSON.stringify(localStorage.getItem('attendance')));
                                                if (result['success'] == "1") {
                                                    _this.presentToast(result['message'], 'bottom');
                                                    _this.day_plan_status = '1';
                                                    // this.router.navigateByUrl('/dashboard');
                                                }
                                                else {
                                                    _this.presentToast(result['message'], 'middle');
                                                }
                                            }, function (error) {
                                                console.log("=ERRRRRRRRR== : " + error);
                                                _this.isToggled = true;
                                                _this.n1 = 0;
                                            });
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeePage.prototype.goToCheckIn = function () {
        //this.router.navigateByUrl('/clenttype');
        this.forCheckin = 1;
        this.getGeoLocation();
    };
    HomeePage.prototype.ionViewWillEnter = function () {
        console.log("==ionViewWillEnter==");
        this.triggerHomeApi();
    };
    HomeePage.prototype.triggerHomeApi = function () {
        var _this = this;
        var params = {
            userId: this.userDetails._id
        };
        this.apiService.postData('/dashboard', params).subscribe(function (result) {
            console.log("=result= :" + JSON.stringify(result));
            if (result['success'] == 1) {
                if (_this.userDetails.user_type == 'owner') {
                    _this.total_emp = result['data']['user'].total_emp;
                    _this.present_emp = result['data']['user'].present_emp;
                }
                else if (_this.userDetails.user_type == 'employee') {
                    _this.checkins = result['data']['user'].checkins;
                    console.log("= this.checkins= :" + _this.checkins);
                }
            }
        }, function (error) {
            alert(JSON.stringify(error));
        });
    };
    HomeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homee',
            template: __webpack_require__(/*! ./homee.page.html */ "./src/app/pages/homee/homee.page.html"),
            styles: [__webpack_require__(/*! ./homee.page.scss */ "./src/app/pages/homee/homee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], HomeePage);
    return HomeePage;
}());



/***/ })

}]);
//# sourceMappingURL=homee-homee-module.js.map