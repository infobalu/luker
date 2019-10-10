(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emp-attendane-rpt-emp-attendane-rpt-module"],{

/***/ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmpAttendaneRptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpAttendaneRptPageModule", function() { return EmpAttendaneRptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emp_attendane_rpt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emp-attendane-rpt.page */ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.ts");







var routes = [
    {
        path: '',
        component: _emp_attendane_rpt_page__WEBPACK_IMPORTED_MODULE_6__["EmpAttendaneRptPage"]
    }
];
var EmpAttendaneRptPageModule = /** @class */ (function () {
    function EmpAttendaneRptPageModule() {
    }
    EmpAttendaneRptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_emp_attendane_rpt_page__WEBPACK_IMPORTED_MODULE_6__["EmpAttendaneRptPage"]]
        })
    ], EmpAttendaneRptPageModule);
    return EmpAttendaneRptPageModule;
}());



/***/ }),

/***/ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n    <ion-toolbar text-center class=\"red_header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n         </ion-buttons>\n    <ion-title>Employee Attendance</ion-title>\n    </ion-toolbar>\n  <!-- <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>  -->\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-card class=\"card_list\" padding *ngFor=\"let album of activeCheckins\">\n          <ion-item *ngFor=\"let subitem of album.user\">\n        <div class=\"card_top_bar\">\n          <h1 class=\"card_title\"> {{subitem.employee_name}}</h1>\n          <p class=\"text_dark .m_0\" > Mobile Number : {{subitem.employee_mobile}}</p>\n    \n          <p class=\"text_dark .m_0\"> Employee Type : {{subitem.employee_type}}</p>\n        </div>\n      </ion-item>\n        <div class=\"card_bottom_bar\">\n         \n          <p class=\"text_dark .m_0\"> Location : {{album.employee_post_location}}</p>\n         \n\n          <p class=\"text_dark .m_0\" > Status : {{album.status}}</p>\n          <p class=\"text_dark .m_0\" > Start Time : {{album.start_time}}</p>\n          <p class=\"text_dark .m_0\" > End Time : {{album.start_time}}</p>\n          <p class=\"text_dark .m_0\" > Location : {{album.start_location}}</p>\n        </div>\n      \n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcC1hdHRlbmRhbmUtcnB0L2VtcC1hdHRlbmRhbmUtcnB0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.ts ***!
  \*******************************************************************/
/*! exports provided: EmpAttendaneRptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpAttendaneRptPage", function() { return EmpAttendaneRptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




var EmpAttendaneRptPage = /** @class */ (function () {
    function EmpAttendaneRptPage(apiService) {
        this.apiService = apiService;
        this.activeCheckins = [];
    }
    EmpAttendaneRptPage.prototype.ngOnInit = function () {
        this.goToAttendanceRpt();
    };
    EmpAttendaneRptPage.prototype.goToAttendanceRpt = function () {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.apiService.getData('/attendanceReport/' + time).subscribe(function (result) {
            _this.activeCheckins = result['data'];
            console.log("== this.attendanceReport == : " + JSON.stringify(result['data']));
            if (result['success'] == 1) {
            }
        });
    };
    EmpAttendaneRptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emp-attendane-rpt',
            template: __webpack_require__(/*! ./emp-attendane-rpt.page.html */ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.html"),
            styles: [__webpack_require__(/*! ./emp-attendane-rpt.page.scss */ "./src/app/pages/emp-attendane-rpt/emp-attendane-rpt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EmpAttendaneRptPage);
    return EmpAttendaneRptPage;
}());



/***/ })

}]);
//# sourceMappingURL=emp-attendane-rpt-emp-attendane-rpt-module.js.map