(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mycheckins-mycheckins-module"],{

/***/ "./src/app/pages/mycheckins/mycheckins.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/mycheckins/mycheckins.module.ts ***!
  \*******************************************************/
/*! exports provided: MycheckinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycheckinsPageModule", function() { return MycheckinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mycheckins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mycheckins.page */ "./src/app/pages/mycheckins/mycheckins.page.ts");







var routes = [
    {
        path: '',
        component: _mycheckins_page__WEBPACK_IMPORTED_MODULE_6__["MycheckinsPage"]
    }
];
var MycheckinsPageModule = /** @class */ (function () {
    function MycheckinsPageModule() {
    }
    MycheckinsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mycheckins_page__WEBPACK_IMPORTED_MODULE_6__["MycheckinsPage"]]
        })
    ], MycheckinsPageModule);
    return MycheckinsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mycheckins/mycheckins.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/mycheckins/mycheckins.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Check-ins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3> &nbsp; &nbsp; &nbsp;Total checkin pending : {{count}}</h3>\n  <ion-list>\n    <ion-item *ngFor=\"let album of activeCheckins\" type=\"item-text-wrap\" (click)=\"selectPack(album)\">\n      <ion-card background-color: #BEBEBE;>\n        <ion-card-header>\n          <ion-card-subtitle>{{album.create_date}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-label>Rep : {{album.customer_name}}</ion-label>\n          <ion-item>\n            <ion-label>Checkin Type : {{album.check_in_for}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Checkin Time : {{album.checkin_time}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Location: {{album.checkin_loc}} </ion-label>\n          </ion-item>\n          <ion-item>\n\n            <ion-label>Checkout Time : {{album.checkout_time}}</ion-label>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mycheckins/mycheckins.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/mycheckins/mycheckins.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215Y2hlY2tpbnMvbXljaGVja2lucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/mycheckins/mycheckins.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/mycheckins/mycheckins.page.ts ***!
  \*****************************************************/
/*! exports provided: MycheckinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycheckinsPage", function() { return MycheckinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MycheckinsPage = /** @class */ (function () {
    function MycheckinsPage(apiService, toastController, router, navCtrl) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.router = router;
        this.navCtrl = navCtrl;
        this.activeCheckins = [];
        this.count = '';
    }
    MycheckinsPage.prototype.ngOnInit = function () {
    };
    MycheckinsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("= this.userDetails['_id']== : " + this.userDetails._id);
        this.apiService.getData('/getCheckins/' + this.userDetails._id).subscribe(function (result) {
            _this.activeCheckins = result['data'];
            console.log("== this.activeCheckins == : " + JSON.stringify(_this.activeCheckins));
            if (result['success'] == 1) {
                _this.count = result['checkins'];
                console.log("===this.count= : " + _this.count);
            }
        });
    };
    MycheckinsPage.prototype.presentToast = function (msg, position) {
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
    MycheckinsPage.prototype.selectPack = function (pack) {
        console.log("=THIS IS CARD == : " + pack._id);
        var navigateExtars = {
            queryParams: {
                _id: JSON.stringify(pack._id)
            }
        };
        //   this.router.navigateByUrl('/viewcheckin', pack._id);
        this.router.navigate(['viewcheckin'], navigateExtars);
    };
    MycheckinsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mycheckins',
            template: __webpack_require__(/*! ./mycheckins.page.html */ "./src/app/pages/mycheckins/mycheckins.page.html"),
            styles: [__webpack_require__(/*! ./mycheckins.page.scss */ "./src/app/pages/mycheckins/mycheckins.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], MycheckinsPage);
    return MycheckinsPage;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(http, cordovahttp) {
        this.http = http;
        this.cordovahttp = cordovahttp;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].service_URL;
    }
    ApiService.prototype.getData = function (url) {
        console.log('=URL = : ' + this.baseURL + url);
        return this.http.get(this.baseURL + url);
    };
    ApiService.prototype.postData = function (url, params) {
        console.log('=URL = : ' + this.baseURL + url);
        console.log('=params = : ' + JSON.stringify(params));
        return this.http.post(this.baseURL + url, params);
    };
    ApiService.prototype.postApi = function (url, payload, header) {
        //   this.cordovahttp.setHeader('':'')
        //   payload.forEach((value,key) => {
        //     console.log(key+" "+value)
        //   });
        //   return this.cordovahttp.post(url, payload, header);
        // }
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mycheckins-mycheckins-module.js.map