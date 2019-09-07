(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-checkin-view-checkin-module"],{

/***/ "./src/app/pages/view-checkin/view-checkin.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-checkin/view-checkin.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewCheckinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCheckinPageModule", function() { return ViewCheckinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-checkin.page */ "./src/app/pages/view-checkin/view-checkin.page.ts");







var routes = [
    {
        path: '',
        component: _view_checkin_page__WEBPACK_IMPORTED_MODULE_6__["ViewCheckinPage"]
    }
];
var ViewCheckinPageModule = /** @class */ (function () {
    function ViewCheckinPageModule() {
    }
    ViewCheckinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_checkin_page__WEBPACK_IMPORTED_MODULE_6__["ViewCheckinPage"]]
        })
    ], ViewCheckinPageModule);
    return ViewCheckinPageModule;
}());



/***/ }),

/***/ "./src/app/pages/view-checkin/view-checkin.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-checkin/view-checkin.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n\n</ion-content><ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>View Check-ins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n      <ion-card background-color: #BEBEBE;>\n        <ion-card-header>\n          <ion-card-subtitle>Check-in on</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-label>Rep : Balakrishnan  </ion-label>\n          <ion-item>\n            <ion-label>Checkin Type : Dealer</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Checkin Time :  07/09/2010 09:30 am </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Location: Palakkad</ion-label>\n          </ion-item>\n          <ion-item>\n\n            <ion-label>Checkout Time : 07/09/2010 06:30 am</ion-label>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item> \n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/view-checkin/view-checkin.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/view-checkin/view-checkin.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctY2hlY2tpbi92aWV3LWNoZWNraW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/view-checkin/view-checkin.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/view-checkin/view-checkin.page.ts ***!
  \*********************************************************/
/*! exports provided: ViewCheckinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCheckinPage", function() { return ViewCheckinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewCheckinPage = /** @class */ (function () {
    function ViewCheckinPage() {
    }
    ViewCheckinPage.prototype.ngOnInit = function () {
    };
    ViewCheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-checkin',
            template: __webpack_require__(/*! ./view-checkin.page.html */ "./src/app/pages/view-checkin/view-checkin.page.html"),
            styles: [__webpack_require__(/*! ./view-checkin.page.scss */ "./src/app/pages/view-checkin/view-checkin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewCheckinPage);
    return ViewCheckinPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-view-checkin-view-checkin-module.js.map