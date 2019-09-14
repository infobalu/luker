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

module.exports = "<!-- Default Segment -->\n<ion-segment (ionChange)=\"segmentChanged($event)\">\n\n  <ion-segment-button value=\"today\" (click)='todaysCheckin()'>\n    <ion-label>Today</ion-label>\n  </ion-segment-button>\n\n  <ion-segment-button value=\"dealer\" (click)='dealerCheckin()'>\n    <ion-label>Dealer</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"distributor\" (click)='distributorCheckin()'>\n    <ion-label>Distributor</ion-label>\n  </ion-segment-button>\n</ion-segment>"

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


var EmpallcheckinPage = /** @class */ (function () {
    function EmpallcheckinPage() {
    }
    EmpallcheckinPage.prototype.ngOnInit = function () {
    };
    EmpallcheckinPage.prototype.segmentChanged = function (ev) {
        console.log('Segment changed : ', ev);
    };
    EmpallcheckinPage.prototype.todaysCheckin = function () {
        console.log("=TODAY=");
    };
    EmpallcheckinPage.prototype.dealerCheckin = function () {
        console.log("=dealerCheckin=");
    };
    EmpallcheckinPage.prototype.distributorCheckin = function () {
        console.log("=distributorCheckin=");
    };
    EmpallcheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empallcheckin',
            template: __webpack_require__(/*! ./empallcheckin.page.html */ "./src/app/pages/empallcheckin/empallcheckin.page.html"),
            styles: [__webpack_require__(/*! ./empallcheckin.page.scss */ "./src/app/pages/empallcheckin/empallcheckin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmpallcheckinPage);
    return EmpallcheckinPage;
}());



/***/ })

}]);
//# sourceMappingURL=empallcheckin-empallcheckin-module.js.map