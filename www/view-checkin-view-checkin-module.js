(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-checkin-view-checkin-module"],{

/***/ "./src/app/view-checkin/view-checkin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/view-checkin/view-checkin.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _view_checkin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-checkin.page */ "./src/app/view-checkin/view-checkin.page.ts");







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

/***/ "./src/app/view-checkin/view-checkin.page.html":
/*!*****************************************************!*\
  !*** ./src/app/view-checkin/view-checkin.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>view-checkin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content><ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>My Check-ins</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h3> &nbsp; &nbsp; &nbsp;Total </h3>\n  <ion-list>\n    <ion-item  type=\"item-text-wrap\">\n      <ion-card background-color: #BEBEBE;>\n        <ion-card-header>\n          <ion-card-subtitle>tiem</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-label>Rep : </ion-label>\n          <ion-item>\n            <ion-label>Checkin Type :</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Checkin Time : </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Location:</ion-label>\n          </ion-item>\n          <ion-item>\n\n            <ion-label>Checkout Time : </ion-label>\n          </ion-item>\n\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/view-checkin/view-checkin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/view-checkin/view-checkin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY2hlY2tpbi92aWV3LWNoZWNraW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/view-checkin/view-checkin.page.ts":
/*!***************************************************!*\
  !*** ./src/app/view-checkin/view-checkin.page.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./view-checkin.page.html */ "./src/app/view-checkin/view-checkin.page.html"),
            styles: [__webpack_require__(/*! ./view-checkin.page.scss */ "./src/app/view-checkin/view-checkin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewCheckinPage);
    return ViewCheckinPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-checkin-view-checkin-module.js.map