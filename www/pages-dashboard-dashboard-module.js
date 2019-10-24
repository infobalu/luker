(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"],
        children: [
            { path: 'viewemployees', loadChildren: '../viewemployees/viewemployees.module#ViewemployeesPageModule' },
            { path: 'homee', loadChildren: '../homee/homee.module#HomeePageModule' },
            { path: 'profileadmin', loadChildren: '../profileadmin/profileadmin.module#ProfileadminPageModule' },
            { path: 'empallcheckin', loadChildren: '../empallcheckin/empallcheckin.module#EmpallcheckinPageModule' },
            { path: 'emp-attendane-rpt', loadChildren: '../emp-attendane-rpt/emp-attendane-rpt.module#EmpAttendaneRptPageModule' },
            { path: 'clenttype', loadChildren: '../clenttype/clenttype.module#ClenttypePageModule' },
            { path: 'mycheckins', loadChildren: '../mycheckins/mycheckins.module#MycheckinsPageModule' },
            { path: '', loadChildren: '../homee/homee.module#HomeePageModule' }
        ]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"homee\" (click)='tab2Selected()'>\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>HOME</ion-label>\n\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"viewemployees\" *ngIf=\"userDetails.user_type == 'owner'\">\n      <img src=\"assets/img/rep.png\" class=\"tab_img\">\n      <ion-label>REPRESENTATIVE</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"empallcheckin\" *ngIf=\"userDetails.user_type == 'owner'\">\n      <img src=\"assets/img/check.png\" class=\"tab_img\">\n      <ion-label>CHECKINS</ion-label>\n    </ion-tab-button> \n\n    <!-- <ion-tab-button tab=\"clenttype\" *ngIf=\"userDetails.user_type == 'employee'\"> -->\n        <ion-tab-button tab=\"mycheckins\" *ngIf=\"userDetails.user_type == 'employee'\">\n\n      <img src=\"assets/img/check.png\" class=\"tab_img\">\n      <ion-label>CHECKINS</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profileadmin\">\n      <img src=\"assets/img/profile.png\" class=\"tab_img\">\n      <ion-label>PROFILE</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard ion-button {\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: 25px; }\n\n.dashboard .active-check-ins {\n  margin: 15px;\n  margin-top: 45px; }\n\n.dashboard .active-check-ins ion-row {\n    border: 1px solid black; }\n\n.dashboard .active-check-ins ion-col {\n    max-width: 33%;\n    min-width: 33%; }\n\n.dashboard .active-check-ins .head {\n    text-align: center;\n    font-size: 20px; }\n\n.dashboard .active-check-ins .head ion-col {\n      max-width: 100%; }\n\n.dashboard .active-check-ins ion-button {\n    padding-left: 10px;\n    padding-right: 10px;\n    height: 25px;\n    margin-top: 0px;\n    padding: 0px;\n    width: 96px;\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1bWVzaGIvRGVza3RvcC9zYW1wbGUvZ3VydS9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBUnhCO0lBV1ksdUJBQXVCLEVBQUE7O0FBWG5DO0lBY1ksY0FBYztJQUNkLGNBQWMsRUFBQTs7QUFmMUI7SUFtQlksa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFwQjNCO01Bc0JnQixlQUFlLEVBQUE7O0FBdEIvQjtJQTJCWSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfSAgIFxuICAgIC5hY3RpdmUtY2hlY2staW5zIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0NXB4O1xuXG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzMlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");










var DashboardPage = /** @class */ (function () {
    function DashboardPage(menu, apiService, router, alertController, geolocation, nativeGeocoder, toastController, platform) {
        this.menu = menu;
        this.apiService = apiService;
        this.router = router;
        this.alertController = alertController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.toastController = toastController;
        this.platform = platform;
        this.activeCheckins = [];
        this.n1 = 1;
        this.checkins = 0;
        this.forCheckin = 0;
    }
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(true);
        // this.getActiveCheckins();
    };
    DashboardPage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        this.attendance = JSON.parse(localStorage.getItem("attendance"));
        //this.day_plan_status = this.userDetails.day_plan_status;
        this.day_plan_status = this.userDetails.day_plan_status;
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
    DashboardPage.prototype.getActiveCheckins = function () {
        var _this = this;
        this.apiService.getData('/getActiveCheckins/' + this.userDetails['_id']).subscribe(function (result) {
            _this.activeCheckins = result['data'];
        });
    };
    DashboardPage.prototype.goToAddEmployee = function () {
        this.router.navigateByUrl('/add-employee');
    };
    DashboardPage.prototype.goToCheckIn = function () {
        this.forCheckin = 1;
        this.getGeoLocation();
    };
    DashboardPage.prototype.radioChecked = function (val) {
        console.log("radioGroupChange : ", val);
    };
    DashboardPage.prototype.triggerStop = function () {
        console.log("triggerStop : ");
        this.getGeoLocation();
    };
    DashboardPage.prototype.getGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            _this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    DashboardPage.prototype.whereInTheEarth = function (latitude, longitude) {
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
                var time = moment__WEBPACK_IMPORTED_MODULE_5__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
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
                    console.log('====LOCATION====== : ' + _this.locationName);
                    console.log('=FOR CHECKIN==');
                    var params = {
                        created_by: _this.userDetails._id,
                        checkin_time: moment__WEBPACK_IMPORTED_MODULE_5__().format('DD-MM-YYYY, hh:mm:ss a'),
                        checkin_loc: _this.locationName,
                    };
                    _this.apiService.postData('/startCheckIn', params).subscribe(function (result) {
                        console.log("=startCheckIn= :" + JSON.stringify(result));
                        if (result['success'] == "1") {
                            _this.router.navigateByUrl('/clenttype');
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
            _this.isToggled = true;
            _this.n1 = 0;
            _this.presentToast('Please check the location settings Or :' + error, 'bottom');
        });
    };
    DashboardPage.prototype.markAttendance = function () {
        this.presentAlertPrompt();
    };
    DashboardPage.prototype.presentAlertPrompt = function () {
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
                                            var time = moment__WEBPACK_IMPORTED_MODULE_5__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
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
    DashboardPage.prototype.presentToast = function (msg, position) {
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
    DashboardPage.prototype.notify = function (val) {
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
    DashboardPage.prototype.goToMyCheckin = function () {
        this.router.navigateByUrl('/mycheckins');
    };
    DashboardPage.prototype.goToViewEmployee = function () {
        this.router.navigateByUrl('/viewemployees');
    };
    DashboardPage.prototype.goToAttendanceRpt = function () {
        var time = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
        this.apiService.getData('/attendanceReport/' + time).subscribe(function (result) {
            //this.activeCheckins = result['data'];
            console.log("== this.attendanceReport == : " + JSON.stringify(result['data']));
            if (result['success'] == 1) {
            }
        });
        this.apiService.getData('/getCheckins/' + '5d71d8546f6282269c53d82e').subscribe(function (result) {
            //this.activeCheckins = result['data'];
            console.log("== this.getCheckins == : " + JSON.stringify(result['data']));
            if (result['success'] == 1) {
            }
        });
    };
    // ngAfterViewInit() {
    //   this.platform.backButton.subscribe();
    //   console.log("=this.router.url == : " + this.router.url);
    //   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
    //     this.presentAlertPromptExit();
    //   });
    // }
    DashboardPage.prototype.presentAlertPromptExit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exit',
                            message: 'Are you sure want to quit?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        navigator['app'].exitApp();
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
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map