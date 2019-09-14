(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewemployees-viewemployees-module"],{

/***/ "./src/app/pages/viewemployees/viewemployees.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewemployeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemployeesPageModule", function() { return ViewemployeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewemployees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewemployees.page */ "./src/app/pages/viewemployees/viewemployees.page.ts");







var routes = [
    {
        path: '',
        component: _viewemployees_page__WEBPACK_IMPORTED_MODULE_6__["ViewemployeesPage"]
    }
];
var ViewemployeesPageModule = /** @class */ (function () {
    function ViewemployeesPageModule() {
    }
    ViewemployeesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewemployees_page__WEBPACK_IMPORTED_MODULE_6__["ViewemployeesPage"]]
        })
    ], ViewemployeesPageModule);
    return ViewemployeesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Employees</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let album of activeCheckins\" type=\"item-text-wrap\" (click)=\"selectPack(album)\">\n      <ion-card background-color: #BEBEBE;>\n        <ion-card-header>\n          <ion-card-subtitle></ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-label>Name: {{album.employee_name}}</ion-label>\n          <ion-item>\n            <ion-label> {{album.employee_account_email}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{album.employee_mobile}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label> {{album.employee_designation}} </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label> {{album.employee_shift_start}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> {{album.employee_shift_end}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label> {{album.employee_post_location}}</ion-label>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n</ion-content> -->\n\n\n<ion-header class=\"red_header\">\n    <ion-toolbar text-center>\n    <ion-title>Representative List</ion-title>\n    </ion-toolbar>\n  <!-- <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>  -->\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <h1 class=\"_title text_muted mb_10\"> Representative List </h1>\n    <ion-row>\n      <ion-card class=\"card_list\" padding *ngFor=\"let album of activeCheckins\">\n        <div class=\"card_top_bar\">\n          <h1 class=\"card_title\"> {{album.employee_name}}</h1>\n          <p class=\"text_muted\"> {{album.employee_designation}}</p>\n        </div>\n        <div class=\"card_bottom_bar\">\n          <p class=\"text_dark\"> Mobile Number : {{album.employee_mobile}}</p>\n          <p class=\"text_dark\"> Location : {{album.employee_post_location}}</p>\n        </div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdlbXBsb3llZXMvdmlld2VtcGxveWVlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewemployeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemployeesPage", function() { return ViewemployeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ViewemployeesPage = /** @class */ (function () {
    function ViewemployeesPage(apiService, toastController) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.activeCheckins = [];
    }
    ViewemployeesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getData('/users').subscribe(function (result) {
            _this.activeCheckins = result['data'];
            console.log("== this.activeCheckins == : " + JSON.stringify(_this.activeCheckins));
        });
    };
    ViewemployeesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewemployees',
            template: __webpack_require__(/*! ./viewemployees.page.html */ "./src/app/pages/viewemployees/viewemployees.page.html"),
            styles: [__webpack_require__(/*! ./viewemployees.page.scss */ "./src/app/pages/viewemployees/viewemployees.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ViewemployeesPage);
    return ViewemployeesPage;
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
//# sourceMappingURL=viewemployees-viewemployees-module.js.map