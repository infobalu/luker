(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewcheckin-viewcheckin-module"],{

/***/ "./src/app/pages/viewcheckin/viewcheckin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewcheckin/viewcheckin.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewcheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcheckinPageModule", function() { return ViewcheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewcheckin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewcheckin.page */ "./src/app/pages/viewcheckin/viewcheckin.page.ts");







var routes = [
    {
        path: '',
        component: _viewcheckin_page__WEBPACK_IMPORTED_MODULE_6__["ViewcheckinPage"]
    }
];
var ViewcheckinPageModule = /** @class */ (function () {
    function ViewcheckinPageModule() {
    }
    ViewcheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewcheckin_page__WEBPACK_IMPORTED_MODULE_6__["ViewcheckinPage"]]
        })
    ], ViewcheckinPageModule);
    return ViewcheckinPageModule;
}());



/***/ }),

/***/ "./src/app/pages/viewcheckin/viewcheckin.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewcheckin/viewcheckin.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>View Check-ins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item type=\"item-text-wrap\" *ngFor=\"let album of activeCheckins\">\n      <ion-card background-color: #BEBEBE;>\n        <ion-card-header>\n          <ion-img [src]=\"imgurl\"></ion-img>\n          <ion-card-subtitle>Rep : {{album.dealer_name}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-item>\n            <ion-label>Checkin Time :{{album.checkin_time}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Checkout Time :{{album.checkout_time}}</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Dealer Name :{{album.dealer_name}}</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Mobile Number :{{album.contractor_number}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Location :{{album.checkin_loc}}</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Type of segment :{{album.type_of_segment}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Project completion persontage :</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Focused verticals :</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Other value expected :</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Comments :{{album.remarks}}</ion-label>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label>Support needed: </ion-label>\n          </ion-item>\n\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/viewcheckin/viewcheckin.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewcheckin/viewcheckin.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdjaGVja2luL3ZpZXdjaGVja2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/viewcheckin/viewcheckin.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/viewcheckin/viewcheckin.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewcheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcheckinPage", function() { return ViewcheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");




var ViewcheckinPage = /** @class */ (function () {
    function ViewcheckinPage(activatedRoute, apiService) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.activeCheckins = [];
    }
    ViewcheckinPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkinid = this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params._id) {
                _this.checkinid = JSON.parse(params._id);
                var k = params._id;
                _this.imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWeXT7jA26O1mNr7cARA0MICtJ7eZ0KXetCkBqMczkZK9uW1R';
                _this.triggerMyCheckIns();
            }
        });
    };
    ViewcheckinPage.prototype.triggerMyCheckIns = function () {
        var _this = this;
        this.apiService.getData('/getCheckinsDetails/' + this.checkinid).subscribe(function (result) {
            if (result['success'] == 1) {
                _this.activeCheckins = result['data'];
                console.log("== this.activeCheckins qqq== : " + JSON.stringify(_this.activeCheckins));
            }
        });
    };
    ViewcheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewcheckin',
            template: __webpack_require__(/*! ./viewcheckin.page.html */ "./src/app/pages/viewcheckin/viewcheckin.page.html"),
            styles: [__webpack_require__(/*! ./viewcheckin.page.scss */ "./src/app/pages/viewcheckin/viewcheckin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ViewcheckinPage);
    return ViewcheckinPage;
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
//# sourceMappingURL=pages-viewcheckin-viewcheckin-module.js.map