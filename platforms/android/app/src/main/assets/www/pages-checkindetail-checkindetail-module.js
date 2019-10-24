(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkindetail-checkindetail-module"],{

/***/ "./src/app/pages/checkindetail/checkindetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkindetail/checkindetail.module.ts ***!
  \*************************************************************/
/*! exports provided: CheckindetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckindetailPageModule", function() { return CheckindetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkindetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkindetail.page */ "./src/app/pages/checkindetail/checkindetail.page.ts");







var routes = [
    {
        path: '',
        component: _checkindetail_page__WEBPACK_IMPORTED_MODULE_6__["CheckindetailPage"]
    }
];
var CheckindetailPageModule = /** @class */ (function () {
    function CheckindetailPageModule() {
    }
    CheckindetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkindetail_page__WEBPACK_IMPORTED_MODULE_6__["CheckindetailPage"]]
        })
    ], CheckindetailPageModule);
    return CheckindetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkindetail/checkindetail.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkindetail/checkindetail.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center class=\"black_header\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n       </ion-buttons>\n    <ion-title>Check-in details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"dark_mask\"></div>\n  <ion-grid padding>\n    <ion-row>\n      <!-- <ion-card class=\"card_list\" padding text-center *ngFor=\"let album of activeCheckins\"> -->\n          <ion-card class=\"card_list\" padding text-center > \n        <div class=\"card_top_bar\">\n          <img [src]=\"imgurl\" class=\"user_img\"  style=\"height: 100px; width: 100px; border-radius: 100px\">\n          <h1 class=\"card_title\"> {{customer_name}}</h1>\n          <p class=\"text_dark m_0\">  {{employee_designation}}</p>\n          <p class=\"text_dark m_0\" *ngIf=\"check_in_for==Dealer\">{{dealer_name}} </p>\n          <p class=\"text_dark m_0\" *ngIf=\"check_in_for==Distributor\">{{distributor_name }}</p>\n        </div>\n        <div class=\"card_bottom_bar _timing\">\n          <ion-row>\n            <ion-col col-6 text-center style=\"border-right: 1px solid #eee\">\n              <p class=\"text_muted\"> Check In Time <br>\n                <span class=\"bold _text_high\"> {{checkin_time}}</span></p>\n            </ion-col>\n            <ion-col col-6 text-center>\n              <p class=\"text_muted\"> Check Out Time <br>\n                <span class=\"bold _text_high\"> {{checkout_time}}</span></p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-card>\n    </ion-row>\n\n    <ion-row>\n      <ion-card class=\"card_list\" padding>\n        <!-- <ion-row style=\"border-bottom: 1px solid #eee;padding-bottom: 5px;margin-bottom: 10px;\">\n          <ion-col col-6>\n            <p class=\"text_dark m_0\">Mobile Number </p>\n          </ion-col>\n          <ion-col col-6>\n            <p class=\"text_dark m_0\"> </p>\n          </ion-col>\n        </ion-row> -->\n        <ion-row style=\"border-bottom: 1px solid #eee;padding-bottom: 5px;margin-bottom: 10px;\">\n          <ion-col col-6>\n            <p class=\"text_dark m_0\">Address </p>\n          </ion-col>\n          <ion-col col-6>\n            <p class=\"text_dark m_0\">{{checkin_loc}} </p>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"border-bottom: 1px solid #eee;padding-bottom: 5px;margin-bottom: 10px;\">\n          <ion-col col-6>\n            <p class=\"text_dark m_0\">Route </p>\n          </ion-col>\n          <ion-col col-6>\n            <p class=\"text_dark m_0\">{{checkout_loc}} </p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer padding>\n  <ion-button class=\"btn_red\" expand=\"block\" size=\"large\" type=\"submit\" (click)='gotoCheckIn()' [disabled]=\"!checkout_time == ''\">Check Out\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/checkindetail/checkindetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/checkindetail/checkindetail.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNraW5kZXRhaWwvY2hlY2tpbmRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/checkindetail/checkindetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkindetail/checkindetail.page.ts ***!
  \***********************************************************/
/*! exports provided: CheckindetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckindetailPage", function() { return CheckindetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CheckindetailPage = /** @class */ (function () {
    function CheckindetailPage(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activeCheckins = [];
    }
    CheckindetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activeCheckins = this.activatedRoute.queryParams.subscribe(function (params) {
            _this.activeCheckins = JSON.parse(params._id);
            console.log('=this.activeCheckins 22 == : ' + JSON.stringify(_this.activeCheckins));
            //  this.customer_name = JSON.parse(this.activeCheckins.customer_name); 
            _this.customer_name = _this.activeCheckins.customer_name;
            _this.employee_designation = _this.activeCheckins.employee_designation;
            _this.dealer_name = _this.activeCheckins.dealer_name;
            _this.distributor_name = _this.activeCheckins.distributor_name;
            _this.checkin_time = _this.activeCheckins.checkin_time;
            _this.checkout_time = _this.activeCheckins.checkout_time;
            _this.imgurl = _this.activeCheckins.pic;
            _this.checkin_loc = _this.activeCheckins.checkin_loc;
            _this.checkout_loc = _this.activeCheckins.checkout_loc;
            _this.checkinId = _this.activeCheckins._id;
            console.log('=this.customer_name == : ' + _this.customer_name);
        });
    };
    CheckindetailPage.prototype.gotoCheckIn = function () {
        console.log('=check _id= : ' + this.checkinId);
        localStorage.setItem('checkin_id', this.checkinId);
        this.router.navigateByUrl('/create-check-in/');
    };
    CheckindetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkindetail',
            template: __webpack_require__(/*! ./checkindetail.page.html */ "./src/app/pages/checkindetail/checkindetail.page.html"),
            styles: [__webpack_require__(/*! ./checkindetail.page.scss */ "./src/app/pages/checkindetail/checkindetail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckindetailPage);
    return CheckindetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkindetail-checkindetail-module.js.map