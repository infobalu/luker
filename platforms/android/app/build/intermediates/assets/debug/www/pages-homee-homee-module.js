(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homee-homee-module"],{

/***/ "./src/app/pages/homee/homee.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.module.ts ***!
  \*********************************************/
/*! exports provided: HomeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeePageModule", function() { return HomeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homee.page */ "./src/app/pages/homee/homee.page.ts");







var routes = [
    {
        path: '',
        component: _homee_page__WEBPACK_IMPORTED_MODULE_6__["HomeePage"]
    }
];
var HomeePageModule = /** @class */ (function () {
    function HomeePageModule() {
    }
    HomeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_homee_page__WEBPACK_IMPORTED_MODULE_6__["HomeePage"]]
        })
    ], HomeePageModule);
    return HomeePageModule;
}());



/***/ }),

/***/ "./src/app/pages/homee/homee.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>homee</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/homee/homee.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/homee/homee.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVlL2hvbWVlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/homee/homee.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/homee/homee.page.ts ***!
  \*******************************************/
/*! exports provided: HomeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeePage", function() { return HomeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeePage = /** @class */ (function () {
    function HomeePage() {
    }
    HomeePage.prototype.ngOnInit = function () {
    };
    HomeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homee',
            template: __webpack_require__(/*! ./homee.page.html */ "./src/app/pages/homee/homee.page.html"),
            styles: [__webpack_require__(/*! ./homee.page.scss */ "./src/app/pages/homee/homee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeePage);
    return HomeePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-homee-homee-module.js.map