(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clenttype-clenttype-module"],{

/***/ "./src/app/pages/clenttype/clenttype.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/clenttype/clenttype.module.ts ***!
  \*****************************************************/
/*! exports provided: ClenttypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClenttypePageModule", function() { return ClenttypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clenttype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clenttype.page */ "./src/app/pages/clenttype/clenttype.page.ts");







var routes = [
    {
        path: '',
        component: _clenttype_page__WEBPACK_IMPORTED_MODULE_6__["ClenttypePage"]
    }
];
var ClenttypePageModule = /** @class */ (function () {
    function ClenttypePageModule() {
    }
    ClenttypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_clenttype_page__WEBPACK_IMPORTED_MODULE_6__["ClenttypePage"]]
        })
    ], ClenttypePageModule);
    return ClenttypePageModule;
}());



/***/ }),

/***/ "./src/app/pages/clenttype/clenttype.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/clenttype/clenttype.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Client type</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n        <ion-radio-group>\n          <ion-list-header>\n            Please choose client type\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>Dealer</ion-label>\n            <ion-radio value=\"dealer\" checked (ionSelect)=\"radioChecked('dealer')\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Distributor</ion-label>\n            <ion-radio value=\"distributor\" (ionSelect)=\"radioChecked('distributor')\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n\n      </ion-list>\n\n      <div padding>\n          <ion-button size=\"small\" type=\"submit\" (click)=\"addCheckin()\">Confirm</ion-button>\n        </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/clenttype/clenttype.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/clenttype/clenttype.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsZW50dHlwZS9jbGVudHR5cGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/clenttype/clenttype.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/clenttype/clenttype.page.ts ***!
  \***************************************************/
/*! exports provided: ClenttypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClenttypePage", function() { return ClenttypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");









var ClenttypePage = /** @class */ (function () {
    function ClenttypePage(menu, router, geolocation, nativeGeocoder, apiService, toastController) {
        this.menu = menu;
        this.router = router;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.apiService = apiService;
        this.toastController = toastController;
        this.clientType = 'dealer';
    }
    ClenttypePage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
    };
    ClenttypePage.prototype.radioChecked = function (val) {
        console.log('radioGroupChange : ', val);
        this.clientType = val;
        localStorage.setItem('clienttype', val);
    };
    ClenttypePage.prototype.addCheckin = function () {
        // this.router.navigateByUrl('/create-check-in/' + this.clientType );
        this.getGeoLocation();
    };
    ClenttypePage.prototype.getGeoLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            _this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ClenttypePage.prototype.whereInTheEarth = function (latitude, longitude) {
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
                var time = moment__WEBPACK_IMPORTED_MODULE_6__().format('DD-MM-YYYY, hh:mm:ss a'); // August 31st 2019, 9:52:34 pm
                console.log('==this.userDetails ID === : ' + _this.userDetails._id);
                console.log('====LOCATION====== : ' + _this.locationName);
                console.log('=FOR CHECKIN==');
                var params = {
                    created_by: _this.userDetails._id,
                    checkin_time: moment__WEBPACK_IMPORTED_MODULE_6__().format('DD-MM-YYYY, hh:mm:ss a'),
                    checkin_loc: _this.locationName,
                };
                _this.apiService.postData('/startCheckIn', params).subscribe(function (result) {
                    console.log("=startCheckIn= :" + JSON.stringify(result));
                    if (result['success'] == "1") {
                        _this.router.navigateByUrl('/create-check-in/' + _this.clientType);
                    }
                    else {
                        _this.presentToast(result['message'], 'bottom');
                    }
                }, function (error) {
                    alert(JSON.stringify(error));
                });
            }
            else {
                _this.locationName = "Unable to fetch geolocation";
                _this.presentToast('Please check the location settings', 'bottom');
            }
        })
            .catch(function (error) {
            _this.locationName = "Unable to fetch geolocation";
            _this.presentToast('Please check the location settings Or :' + error, 'bottom');
        });
    };
    ClenttypePage.prototype.presentToast = function (msg, position) {
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
    ClenttypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clenttype',
            template: __webpack_require__(/*! ./clenttype.page.html */ "./src/app/pages/clenttype/clenttype.page.html"),
            styles: [__webpack_require__(/*! ./clenttype.page.scss */ "./src/app/pages/clenttype/clenttype.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ClenttypePage);
    return ClenttypePage;
}());



/***/ })

}]);
//# sourceMappingURL=clenttype-clenttype-module.js.map