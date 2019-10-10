(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profileadmin-profileadmin-module"],{

/***/ "./src/app/pages/profileadmin/profileadmin.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profileadmin/profileadmin.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileadminPageModule", function() { return ProfileadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profileadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profileadmin.page */ "./src/app/pages/profileadmin/profileadmin.page.ts");







var routes = [
    {
        path: '',
        component: _profileadmin_page__WEBPACK_IMPORTED_MODULE_6__["ProfileadminPage"]
    }
];
var ProfileadminPageModule = /** @class */ (function () {
    function ProfileadminPageModule() {
    }
    ProfileadminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profileadmin_page__WEBPACK_IMPORTED_MODULE_6__["ProfileadminPage"]]
        })
    ], ProfileadminPageModule);
    return ProfileadminPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profileadmin/profileadmin.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/profileadmin/profileadmin.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  text-center>\n  <ion-toolbar text-center padding class=\"red_header\">\n    <img src=\"assets/img/user.svg\" class=\"user_img\">\n  </ion-toolbar>\n  <ion-toolbar text-center class=\"red_header\">\n    <ion-title>{{name}} </ion-title>\n    <p class=\"_text_md _text_white\"> {{email}}</p>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n      <ion-list>\n          <ion-item (click)='Logout()'>\n            <ion-icon name=\"log-out\" item-start></ion-icon>\n              Logout\n          </ion-item>\n        </ion-list>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profileadmin/profileadmin.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profileadmin/profileadmin.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVhZG1pbi9wcm9maWxlYWRtaW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/profileadmin/profileadmin.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profileadmin/profileadmin.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileadminPage", function() { return ProfileadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileadminPage = /** @class */ (function () {
    function ProfileadminPage(router) {
        this.router = router;
    }
    ProfileadminPage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
        this.name = this.userDetails.employee_name;
        this.email = this.userDetails.employee_account_email;
    };
    ProfileadminPage.prototype.Logout = function () {
        console.log('=LOGOUT==');
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    ProfileadminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profileadmin',
            template: __webpack_require__(/*! ./profileadmin.page.html */ "./src/app/pages/profileadmin/profileadmin.page.html"),
            styles: [__webpack_require__(/*! ./profileadmin.page.scss */ "./src/app/pages/profileadmin/profileadmin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileadminPage);
    return ProfileadminPage;
}());



/***/ })

}]);
//# sourceMappingURL=profileadmin-profileadmin-module.js.map