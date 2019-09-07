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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>viewcheckin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

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



var ViewcheckinPage = /** @class */ (function () {
    function ViewcheckinPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ViewcheckinPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkinid = this.activatedRoute.queryParams.subscribe(function (params) {
            console.log("==params  22 = : " + JSON.stringify(params));
            if (params && params._id) {
                _this.checkinid = JSON.parse(params._id);
                var k = params._id;
                console.log('=this.checkinid 111== : ' + k);
                console.log('=this.checkinid vieswwww== : ' + _this.checkinid);
            }
        });
    };
    ViewcheckinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewcheckin',
            template: __webpack_require__(/*! ./viewcheckin.page.html */ "./src/app/pages/viewcheckin/viewcheckin.page.html"),
            styles: [__webpack_require__(/*! ./viewcheckin.page.scss */ "./src/app/pages/viewcheckin/viewcheckin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewcheckinPage);
    return ViewcheckinPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-viewcheckin-viewcheckin-module.js.map