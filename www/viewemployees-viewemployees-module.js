(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewemployees-viewemployees-module"],{

/***/ "./src/app/pages/viewemployees/viewemployees.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewemployeesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemployeesPageModule", function() { return ViewemployeesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewemployees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewemployees.page */ "./src/app/pages/viewemployees/viewemployees.page.ts");







var routes = [
    {
        path: '',
        component: _viewemployees_page__WEBPACK_IMPORTED_MODULE_6__["ViewemployeesPage"]
    }
];
var ViewemployeesPageModule = /** @class */ (function () {
    function ViewemployeesPageModule() {
    }
    ViewemployeesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewemployees_page__WEBPACK_IMPORTED_MODULE_6__["ViewemployeesPage"]]
        })
    ], ViewemployeesPageModule);
    return ViewemployeesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n    <ion-toolbar text-center class=\"red_header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n         </ion-buttons>\n    <ion-title>Representative List</ion-title>\n    <!-- <ion-back-button></ion-back-button> -->\n    </ion-toolbar>\n   \n  <!-- <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar>  --> \n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-card class=\"card_list\" padding *ngFor=\"let album of activeCheckins\" (click)=\"presentModal(album)\">\n        <div class=\"card_top_bar\">\n          <h1 class=\"card_title\"> {{album.employee_name}}</h1>\n          <p class=\"text_muted m_0 \"> {{album.employee_designation}}</p>\n        </div>\n        <div class=\"card_bottom_bar\">\n          <p class=\"text_dark m_0\" > Mobile Number : {{album.employee_mobile}}</p>\n          <p class=\"text_dark\"> Location : {{album.employee_post_location}}</p>\n        </div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdlbXBsb3llZXMvdmlld2VtcGxveWVlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/viewemployees/viewemployees.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/viewemployees/viewemployees.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewemployeesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewemployeesPage", function() { return ViewemployeesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ViewemployeesPage = /** @class */ (function () {
    function ViewemployeesPage(apiService, toastController, router, modalController) {
        this.apiService = apiService;
        this.toastController = toastController;
        this.router = router;
        this.modalController = modalController;
        this.activeCheckins = [];
    }
    ViewemployeesPage.prototype.ngOnInit = function () {
    };
    ViewemployeesPage.prototype.presentModal = function (album) {
        console.log('=album=== : ' + JSON.stringify(album._id));
        var navigateExtars = {
            queryParams: {
                _id: JSON.stringify(album._id)
            }
        };
        this.router.navigate(['userdetilview'], navigateExtars);
    };
    ViewemployeesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("==ionViewWillEnter==");
        this.apiService.getData('/users').subscribe(function (result) {
            _this.activeCheckins = result['data'];
        });
    };
    ViewemployeesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewemployees',
            template: __webpack_require__(/*! ./viewemployees.page.html */ "./src/app/pages/viewemployees/viewemployees.page.html"),
            styles: [__webpack_require__(/*! ./viewemployees.page.scss */ "./src/app/pages/viewemployees/viewemployees.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], ViewemployeesPage);
    return ViewemployeesPage;
}());



/***/ })

}]);
//# sourceMappingURL=viewemployees-viewemployees-module.js.map