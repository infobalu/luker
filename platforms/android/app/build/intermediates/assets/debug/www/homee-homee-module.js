(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homee-homee-module"],{

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

module.exports = "<ion-header class=\"red_header\" text-center>\n    <ion-toolbar text-center padding>\n      <img src=\"assets/img/user.svg\" class=\"user_img\">\n    </ion-toolbar>\n    <ion-toolbar text-center>\n      <ion-title>{{name}} </ion-title>\n      <p class=\"_text_md _text_white\"> welcome</p>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"red_mask\"></div>\n    <ion-grid padding style=\"margin-top: 5vh\">\n      <ion-row>\n        <ion-card class=\"card_list\" padding>\n          <div class=\"card_top_bar\">\n            <ion-row>\n              <ion-col col-6>\n                <p class=\"text_muted\"> Total <br> representatives</p>\n              </ion-col>\n              <ion-col col-6 text-right>\n                <button ion-button class=\"btn_plane\" (click)=\"goToViewEmployee()\"> View all</button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>\n                <h1 class=\"count_num\"> 500</h1>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div class=\"card_bottom_bar\" text-center padding>\n            <!-- <button ion-button class=\"btn_blue\"> Add new representative </button> -->\n            <ion-button expand=\"block\" class=\"btn_blue\"  (click)='goToAddEmployee()'>Add new representative</ion-button>\n          </div>\n        </ion-card>\n      </ion-row>\n  \n      <ion-row>\n        <ion-card class=\"card_list _card_black\" padding>\n          <ion-row>\n            <ion-col col-6>\n              <p class=\"_text_white\"> todays total <br>attendance</p>\n            </ion-col>\n            <ion-col col-6 text-right>\n              <p class=\"_text_white\"> <span class=\"count_num\"> 88</span> / 150</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n  \n      <ion-row>\n        <ion-card class=\"card_list _card_muted\" padding>\n          <ion-row>\n            <ion-col col-6>\n              <p class=\"_text_white\"> Download Check-in <br>report</p>\n            </ion-col>\n            <ion-col col-6 text-right>\n             date picker\n  \n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-row>\n    </ion-grid>\n  </ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeePage = /** @class */ (function () {
    function HomeePage(router) {
        this.router = router;
    }
    HomeePage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("=this.userDetails= : " + JSON.stringify(this.userDetails));
        this.name = this.userDetails.employee_name;
    };
    HomeePage.prototype.goToAddEmployee = function () {
        this.router.navigateByUrl('/add-employee');
    };
    HomeePage.prototype.goToViewEmployee = function () {
        this.router.navigateByUrl('/viewemployees');
    };
    HomeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homee',
            template: __webpack_require__(/*! ./homee.page.html */ "./src/app/pages/homee/homee.page.html"),
            styles: [__webpack_require__(/*! ./homee.page.scss */ "./src/app/pages/homee/homee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeePage);
    return HomeePage;
}());



/***/ })

}]);
//# sourceMappingURL=homee-homee-module.js.map