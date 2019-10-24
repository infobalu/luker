(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empallcheckin-empallcheckin-module"],{

/***/ "./src/app/pages/empallcheckin/empallcheckin.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/empallcheckin/empallcheckin.module.ts ***!
  \*************************************************************/
/*! exports provided: EmpallcheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpallcheckinPageModule", function() { return EmpallcheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _empallcheckin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empallcheckin.page */ "./src/app/pages/empallcheckin/empallcheckin.page.ts");







var routes = [
    {
        path: '',
        component: _empallcheckin_page__WEBPACK_IMPORTED_MODULE_6__["EmpallcheckinPage"]
    }
];
var EmpallcheckinPageModule = /** @class */ (function () {
    function EmpallcheckinPageModule() {
    }
    EmpallcheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_empallcheckin_page__WEBPACK_IMPORTED_MODULE_6__["EmpallcheckinPage"]]
        })
    ], EmpallcheckinPageModule);
    return EmpallcheckinPageModule;
}());



/***/ }),

/***/ "./src/app/pages/empallcheckin/empallcheckin.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/empallcheckin/empallcheckin.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default Segment -->\n<ion-segment (ionChange)=\"segmentChanged($event)\">\n\n  <ion-segment-button value=\"today\" (click)='todaysCheckin()' checked>\n    <ion-label>Today</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"dealer\" (click)='dealerCheckin()'>\n    <ion-label>Dealer</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"distributor\" (click)='distributorCheckin()'>\n    <ion-label>Distributor</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\n<ion-header>\n    <ion-toolbar text-center  class=\"red_header\">\n        <ion-title>Check-ins</ion-title>\n    </ion-toolbar>\n  <!-- <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>  -->\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-card class=\"card_list\" padding *ngFor=\"let album of activeCheckins\" (click)=\"selectPack(album)\">\n        <div class=\"card_top_bar\" *ngFor=\"let subitem of album.created_by\">\n          <h1 class=\"card_title\">{{subitem.employee_name}}</h1>\n          <p class=\"text_muted m_0\">Location :  {{album.checkin_loc}}</p>\n        </div>\n\n        <div class=\"card_bottom_bar _timing\">\n            <ion-row>\n              <ion-col col-6 text-center style=\"border-right: 1px solid #eee\">\n                <p class=\"text_muted\"> Checkin Time <br>\n                  <span class=\"bold _text_high\"> {{album.checkin_time}}</span></p>\n              </ion-col>\n              <ion-col col-6 text-center>\n                <p class=\"text_muted\"> Check out Time <br>\n                  <span class=\"bold _text_high\"> {{album.checkout_time}}</span></p>\n              </ion-col>\n            </ion-row>\n          </div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/empallcheckin/empallcheckin.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/empallcheckin/empallcheckin.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGFsbGNoZWNraW4vZW1wYWxsY2hlY2tpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/empallcheckin/empallcheckin.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/empallcheckin/empallcheckin.page.ts ***!
  \***********************************************************/
/*! exports provided: EmpallcheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpallcheckinPage", function() { return EmpallcheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EmpallcheckinPage = /** @class */ (function () {
    function EmpallcheckinPage(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.activeCheckins = [];
        this.activeCheckinsDealer = [];
        this.activeCheckinsDist = [];
    }
    EmpallcheckinPage.prototype.ngOnInit = function () {
        this.triggerAllCheckIns();
    };
    EmpallcheckinPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed : ', ev);
    };
    EmpallcheckinPage.prototype.todaysCheckin = function () {
        console.log("=TODAY=");
        // this.internetstatus = localStorage.getItem("internet");
        if (navigator.onLine) {
            this.triggerAllCheckIns();
        }
        else {
            alert('Please check your internet connection');
        }
    };
    EmpallcheckinPage.prototype.dealerCheckin = function () {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.apiService.getData('/getAllCheckins/' + time).subscribe(function (result) {
            if (result['success'] == 1) {
                _this.activeCheckins = result['data'];
                console.log("== this.getAllCheckins == : " + JSON.stringify(_this.activeCheckins));
                _this.activeCheckins = _this.activeCheckins.filter(function (d) { return d.check_in_for == 'Dealer'; });
            }
        });
        //console.log("=dealerCheckin= : "+JSON.stringify(this.activeCheckinsDealer));
    };
    EmpallcheckinPage.prototype.distributorCheckin = function () {
        var _this = this;
        console.log("=distributorCheckin=");
        var time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.apiService.getData('/getAllCheckins/' + time).subscribe(function (result) {
            if (result['success'] == 1) {
                _this.activeCheckins = result['data'];
                console.log("== this.getAllCheckins == : " + JSON.stringify(_this.activeCheckins));
                _this.activeCheckins = _this.activeCheckins.filter(function (d) { return d.check_in_for == 'Distributor'; });
            }
        });
    };
    EmpallcheckinPage.prototype.triggerAllCheckIns = function () {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.apiService.getData('/getAllCheckins/' + time).subscribe(function (result) {
            if (result['success'] == 1) {
                _this.activeCheckins = result['data'];
                console.log("== this.getAllCheckins == : " + JSON.stringify(_this.activeCheckins));
            }
        });
    };
    EmpallcheckinPage.prototype.selectPack = function (pack) {
        var navigateExtars = {
            queryParams: {
                _id: JSON.stringify(pack)
            }
        };
        this.router.navigate(['checkindetail'], navigateExtars);
    };
    EmpallcheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empallcheckin',
            template: __webpack_require__(/*! ./empallcheckin.page.html */ "./src/app/pages/empallcheckin/empallcheckin.page.html"),
            styles: [__webpack_require__(/*! ./empallcheckin.page.scss */ "./src/app/pages/empallcheckin/empallcheckin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EmpallcheckinPage);
    return EmpallcheckinPage;
}());



/***/ })

}]);
//# sourceMappingURL=empallcheckin-empallcheckin-module.js.map