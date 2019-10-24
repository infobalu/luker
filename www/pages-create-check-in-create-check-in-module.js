(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-check-in-create-check-in-module"],{

/***/ "./src/app/pages/create-check-in/create-check-in.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-check-in/create-check-in.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreateCheckInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCheckInPageModule", function() { return CreateCheckInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_check_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-check-in.page */ "./src/app/pages/create-check-in/create-check-in.page.ts");







var routes = [
    {
        path: '',
        component: _create_check_in_page__WEBPACK_IMPORTED_MODULE_6__["CreateCheckInPage"]
    }
];
var CreateCheckInPageModule = /** @class */ (function () {
    function CreateCheckInPageModule() {
    }
    CreateCheckInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_check_in_page__WEBPACK_IMPORTED_MODULE_6__["CreateCheckInPage"]]
        })
    ], CreateCheckInPageModule);
    return CreateCheckInPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-check-in/create-check-in.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-check-in/create-check-in.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center class=\"red_header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{checkInFor}}&nbsp;Check In</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form *ngIf=\"checkInFor == 'Distributor'\" class=\"add-employee-form\" [formGroup]=\"distributorForm\"\n    (ngSubmit)=\"distributorFormSubmit(distributorForm)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n \n            <ion-item>\n              <ion-label position=\"floating\">Distributor Name</ion-label>\n              <ion-input name=\"distributorName\" type=\"text\" formControlName=\"distributorName\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Retailer Name</ion-label>\n              <ion-input name=\"retailerName\" type=\"text\" formControlName=\"retailerName\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Retailer Number</ion-label>\n              <ion-input name=\"retailerNum\" type=\"tel\" formControlName=\"retailerNum\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Address</ion-label>\n              <ion-input name=\"retaileraddr\" type=\"text\" formControlName=\"retaileraddr\" readonly></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Route name</ion-label>\n              <ion-input name=\"routename\" type=\"text\" formControlName=\"routename\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Top Selling Brands</ion-label>\n              <ion-input name=\"topbrand\" type=\"text\" formControlName=\"topbrand\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Secondary sales vertical</ion-label>\n              <ion-input name=\"secsales\" type=\"text\" formControlName=\"secsales\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Luker order of day</ion-label>\n              <ion-input name=\"lukerorder\" type=\"text\" formControlName=\"lukerorder\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Luker secondary</ion-label>\n              <ion-input name=\"lukersec\" type=\"text\" formControlName=\"lukersec\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Luker counter share</ion-label>\n              <ion-input name=\"lukershare\" type=\"text\" formControlName=\"lukershare\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\">Luker Targeted value</ion-label>\n              <ion-input name=\"targetval\" type=\"text\" formControlName=\"targetval\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Luker Targeted share</ion-label>\n              <ion-input name=\"lukertarget\" type=\"text\" formControlName=\"lukertarget\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Upload Image</ion-label>\n              <!-- <ion-input type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input> -->\n              <ion-button (click)=\"uploadFromCamera()\" shape=\"round\" fill=\"outline\">+ Click to upload image</ion-button>\n\n              <!-- <ion-avatar>\n                  <img *ngIf=\"capturedPhoto\" [src]=\"capturedPhoto\"/>\n                 \n                </ion-avatar> -->\n\n            </ion-item>\n\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"distributorForm.invalid\" expand=\"block\">Check Out\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <form *ngIf=\"checkInFor == 'Dealer'\" class=\"add-employee-form\" [formGroup]=\"dealerForm\"\n    (ngSubmit)=\"dealerFormSubmit(dealerForm)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-item>\n              <ion-label position=\"floating\">Dealer Name</ion-label>\n              <ion-input name=\"dealerName\" type=\"text\" formControlName=\"dealerName\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Date of Visit</ion-label>\n              <ion-input name=\"dateofvisit\" type=\"date\" formControlName=\"dateofvisit\" disabled=\"true\"></ion-input>\n              <!-- <ion-datetime displayFormat=\"MM DD YY\" formControlName=\"dateofvisit\"></ion-datetime> -->\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Name of Project</ion-label>\n              <ion-input name=\"projectname\" type=\"text\" formControlName=\"projectname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Type or Segment</ion-label>\n              <ion-select interface=\"popover\" formControlName=\"segment\">\n                <ion-select-option value=\"project\">Project</ion-select-option>\n                <ion-select-option value=\"directcustomer\">Direct Customer</ion-select-option>\n                <ion-select-option value=\"consultant\">Consultant</ion-select-option>\n                <ion-select-option value=\"builder\">Builder</ion-select-option>\n                <ion-select-option value=\"architect\">Architect</ion-select-option>\n                <ion-select-option value=\"electrician\">Electrician</ion-select-option>\n                <ion-select-option value=\"others\">Others</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Name of the customer</ion-label>\n              <ion-input name=\"custname\" type=\"text\" formControlName=\"custname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Mobile Number</ion-label>\n              <ion-input name=\"mobileNumber\" type=\"tel\" formControlName=\"mobileNumber\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Decision maker name</ion-label>\n              <ion-input name=\"decmakername\" type=\"text\" formControlName=\"decmakername\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Decision maker contact number</ion-label>\n              <ion-input name=\"decmakernum\" type=\"tel\" formControlName=\"decmakernum\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Contractor name</ion-label>\n              <ion-input name=\"contractorname\" type=\"text\" formControlName=\"contractorname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Contractor contact number</ion-label>\n              <ion-input name=\"contractornum\" type=\"tel\" formControlName=\"contractornum\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Consultant name</ion-label>\n              <ion-input name=\"consultantname\" type=\"text\" formControlName=\"consultantname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Consultant contact number</ion-label>\n              <ion-input name=\"consultantnum\" type=\"tel\" formControlName=\"consultantnum\"></ion-input>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-label position=\"floating\">Architect name</ion-label>\n              <ion-input name=\"architectname\" type=\"text\" formControlName=\"architectname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Architect contact number</ion-label>\n              <ion-input name=\"architectnum\" type=\"tel\" formControlName=\"architectnum\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Electrician name</ion-label>\n              <ion-input name=\"electricianname\" type=\"text\" formControlName=\"electricianname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Electrician contact number</ion-label>\n              <ion-input name=\"electriciannum\" type=\"tel\" formControlName=\"electriciannum\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Builder name</ion-label>\n              <ion-input name=\"buildername\" type=\"text\" formControlName=\"buildername\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Builder contact number</ion-label>\n              <ion-input name=\"buildernum\" type=\"tel\" formControlName=\"buildernum\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Stage of construction</ion-label>\n              <ion-input name=\"stageconstruction\" type=\"text\" formControlName=\"stageconstruction\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Expected project finalization</ion-label>\n              <ion-input name=\"expectprice\" type=\"text\" formControlName=\"expectprice\" [(ngModel)]=\"project_finalized_dt\"\n                (click)=\"showDatePicker()\">\n              </ion-input> \n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Check In Location</ion-label>\n              <ion-input name=\"location\" type=\"text\" formControlName=\"location\" readonly></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-textarea placeholder=\"Remarks ...\" formControlName=\"remarks\"></ion-textarea>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Competitor Name</ion-label>\n              <ion-input name=\"compname\" type=\"text\" formControlName=\"compname\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Project value</ion-label>\n              <ion-input name=\"projectvalue\" type=\"text\" formControlName=\"projectvalue\"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label stacked>Upload Image</ion-label>\n              <!-- <ion-input type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\"></ion-input> -->\n              <ion-button (click)=\"uploadFromCamera()\" shape=\"round\" fill=\"outline\">+ Click to upload image</ion-button>\n\n              <!-- <ion-avatar>\n                <img *ngIf=\"base64Image\" [src]=\"base64Image\"/>\n              </ion-avatar> -->\n\n            </ion-item>\n\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"dealerForm.invalid\" expand=\"block\">Check Out\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/create-check-in/create-check-in.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/create-check-in/create-check-in.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jaGVjay1pbi9jcmVhdGUtY2hlY2staW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-check-in/create-check-in.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-check-in/create-check-in.page.ts ***!
  \***************************************************************/
/*! exports provided: CreateCheckInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCheckInPage", function() { return CreateCheckInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");














var CreateCheckInPage = /** @class */ (function () {
    function CreateCheckInPage(geolocation, nativeGeocoder, activatedRoute, apiService, camera, file, router, toastController, loadingController, datePicker) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.camera = camera;
        this.file = file;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.datePicker = datePicker;
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        this.checkinId = localStorage.getItem('checkin_id');
        this.checkInFor = this.userDetails.employee_type;
        console.log("==this.checkInFor== : " + this.checkInFor);
        this.distributorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            distributorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            retailerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            retailerNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            retaileraddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            routename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            topbrand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            secsales: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lukerorder: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lukersec: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lukershare: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            targetval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lukertarget: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.dealerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dealerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            dateofvisit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            projectname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            segment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            custname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            decmakername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            decmakernum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            contractorname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            contractornum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            consultantname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            consultantnum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            architectname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            architectnum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            electricianname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            electriciannum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            buildername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            buildernum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            stageconstruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            expectprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            compname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            projectvalue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
        console.log('=checkinId== :' + this.checkinId);
    }
    CreateCheckInPage.prototype.ngOnInit = function () {
        var dp = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"](navigator.language);
        var p = 'y-MM-dd'; // YYYY-MM-DD
        var dtr = dp.transform(new Date(), p);
        console.log('date', dtr);
        if (this.checkInFor === 'Dealer') {
            // this.dealerForm.dateofvisit.patchValue(dtr);
            var val = 'dateofvisit';
            this.dealerForm.controls[val].patchValue(dtr);
        }
    };
    CreateCheckInPage.prototype.ionViewWillEnter = function () {
        this.getGeoLocation();
    };
    CreateCheckInPage.prototype.getGeoLocation = function () {
        var _this = this;
        this.locationName = 'Unable to fetch geolocation';
        this.distributorForm.controls.location.setValue(this.locationName);
        this.dealerForm.controls.location.setValue(this.locationName);
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            _this.whereInTheEarth(resp.coords.latitude, resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    CreateCheckInPage.prototype.distributorFormSubmit = function (data) {
        var _this = this;
        var time = moment__WEBPACK_IMPORTED_MODULE_10__().format('DD-MM-YYYY, hh:mm:ss a');
        var params = {
            check_in_for: this.checkInFor,
            created_by: this.userDetails._id,
            checkin_loc: this.distributorForm.value.retaileraddr,
            checkin_time: 6,
            checkout_loc: this.distributorForm.value.retaileraddr,
            checkout_time: time,
            distributor_name: this.distributorForm.value.distributorName,
            retailer_name: this.distributorForm.value.retailerName,
            retailer_number: this.distributorForm.value.retailerNum,
            address: this.distributorForm.value.retaileraddr,
            route_name: this.distributorForm.value.routename,
            top_sale: this.distributorForm.value.topbrand,
            secondary_sale: this.distributorForm.value.secsales,
            luker_day: this.distributorForm.value.lukerorder,
            luker_month: this.distributorForm.value.lukersec,
            luker_share: this.distributorForm.value.lukershare,
            targeted_value: this.distributorForm.value.targetval,
            targeted_share: this.distributorForm.value.lukertarget,
            checkin_id: this.checkinId,
            latitude: this.latitude,
            longitude: this.longitude,
            location: this.distributorForm.value.routename
        };
        console.log('params', JSON.stringify(params));
        this.presentLoading();
        // this.internetstatus = localStorage.getItem("internet");
        if (navigator.onLine) {
            this.apiService.postData('/createCheckIn', params).subscribe(function (result) {
                console.log('result distributor', JSON.stringify(result));
                var finaldatas = result;
                if (finaldatas.success == 1) {
                    _this.uploadImages(_this.checkinId);
                    _this.dismissLoading();
                    _this.presentToast('checked out successfully', 'bottom');
                    _this.router.navigateByUrl('/dashboard');
                }
            });
        }
        else {
            alert('Please check your internet connection');
        }
    };
    CreateCheckInPage.prototype.dealerFormSubmit = function (data) {
        var _this = this;
        console.log('data', data);
        console.log('form control value', this.dealerForm.value);
        var time = moment__WEBPACK_IMPORTED_MODULE_10__().format('DD-MM-YYYY, hh:mm:ss a');
        var params = {
            check_in_for: this.checkInFor,
            created_by: this.userDetails._id,
            checkin_loc: this.dealerForm.value.location,
            checkin_time: this.dealerForm.value.dateofvisit,
            checkout_loc: this.dealerForm.value.location,
            checkout_time: time,
            type_of_segment: this.dealerForm.value.segment,
            dealer_name: this.dealerForm.value.dealerName,
            customer_name: this.dealerForm.value.custname,
            customer_number: this.dealerForm.value.mobileNumber,
            decision_maker_name: this.dealerForm.value.decmakername,
            decision_maker_number: this.dealerForm.value.decmakernum,
            contractor_name: this.dealerForm.value.contractorname,
            contractor_number: this.dealerForm.value.contractornum,
            consultant_name: this.dealerForm.value.consultantname,
            consultant_number: this.dealerForm.value.consultantnum,
            architect_name: this.dealerForm.value.architectname,
            architect_number: this.dealerForm.value.architectnum,
            electrician_name: this.dealerForm.value.electricianname,
            electrician_number: this.dealerForm.value.electriciannum,
            builder_name: this.dealerForm.value.buildername,
            builder_number: this.dealerForm.value.buildernum,
            construction_stage: this.dealerForm.value.stageconstruction,
            exp_pro_final: this.dealerForm.value.expectprice,
            remarks: this.dealerForm.value.remarks,
            competitor_name: this.dealerForm.value.compname,
            checkin_id: this.checkinId,
            latitude: this.latitude,
            longitude: this.longitude,
            location: this.distributorForm.value.routename
        };
        this.presentLoading();
        //this.internetstatus = localStorage.getItem("internet");
        if (navigator.onLine) {
            this.apiService.postData('/createCheckIn', params).subscribe(function (result) {
                console.log('result dealer', JSON.stringify(result));
                var finaldatas = result;
                if (finaldatas.success == 1) {
                    _this.dismissLoading();
                    _this.uploadImages(_this.checkinId);
                    _this.presentToast('Check out successfully', 'bottom');
                    _this.router.navigateByUrl('/dashboard');
                }
            });
        }
        else {
            alert('Please check your internet connection');
        }
    };
    CreateCheckInPage.prototype.makeFileIntoBlob = function (filePath) {
        var _this = this;
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise(function (resolve, reject) {
            var fileName = '';
            _this.file.resolveLocalFilesystemUrl(filePath).then(function (fileEntry) {
                var name = fileEntry.name, nativeURL = fileEntry.nativeURL;
                // get the path..
                var path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
                console.log('path', path);
                console.log('fileName', name);
                fileName = name;
                // we are provided the name, so now read the file into
                // a buffer
                return _this.file.readAsArrayBuffer(path, name);
            })
                .then(function (buffer) {
                // get the buffer and make a blob to be saved
                var imgBlob = new Blob([buffer], {
                    type: 'image/jpeg'
                });
                console.log(imgBlob.type, imgBlob.size);
                resolve({ fileName: fileName, imgBlob: imgBlob });
            })
                .catch(function (e) { return reject(e); });
        });
    };
    CreateCheckInPage.prototype.uploadFromCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, cameraInfo, blobInfo, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 80,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        cameraInfo = _a.sent();
                        return [4 /*yield*/, this.makeFileIntoBlob(cameraInfo)];
                    case 3:
                        blobInfo = _a.sent();
                        this.base64Image = cameraInfo;
                        this.capturedPhoto = blobInfo;
                        console.log('this.capturedPhoto', this.capturedPhoto);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        console.log('File Upload Error ' + e_1.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreateCheckInPage.prototype.uploadImages = function (path) {
        var _self = this;
        cordova.plugin.http.uploadFile('https://dev.salesblazon.co:8080/uploadImage', {}, { 'checkin_id': path }, this.base64Image, 'image', function (response) {
            console.log('response', JSON.stringify(response));
            _self.router.navigateByUrl('/dashboard');
        }, function (response) {
            console.error(response.error);
            _self.dismissLoading();
        });
    };
    CreateCheckInPage.prototype.presentToast = function (msg, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            position: position,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCheckInPage.prototype.whereInTheEarth = function (latitude, longitude) {
        var _this = this;
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
            .then(function (result) {
            if (result[0]) {
                _this.locationName = '';
                if (result[0]['subThoroughfare']) {
                    _this.locationName = _this.locationName + result[0]['subThoroughfare'] + ",";
                }
                if (result[0]['thoroughfare']) {
                    _this.locationName = _this.locationName + result[0]['thoroughfare'] + ",";
                }
                if (result[0]['subLocality']) {
                    _this.locationName = _this.locationName + result[0]['subLocality'] + ",";
                }
                if (result[0]['locality']) {
                    _this.locationName = _this.locationName + result[0]['locality'] + ",";
                }
                if (result[0]['subAdministrativeArea']) {
                    _this.locationName = _this.locationName + result[0]['subAdministrativeArea'] + ",";
                }
                if (result[0]['administrativeArea']) {
                    _this.locationName = _this.locationName + result[0]['administrativeArea'] + ",";
                }
                if (result[0]['postalCode']) {
                    _this.locationName = _this.locationName + result[0]['postalCode'] + ",";
                }
                if (result[0]['countryName']) {
                    _this.locationName = _this.locationName + result[0]['countryName'] + ",";
                }
            }
            else {
                _this.locationName = "Unable to fetch geolocation";
            }
            _this.distributorForm.controls.location.setValue(_this.locationName);
            _this.dealerForm.controls.location.setValue(_this.locationName);
            _this.distributorForm.controls.retaileraddr.setValue(_this.locationName);
            console.log("===locationName==: " + _this.locationName);
        })
            .catch(function (error) {
            console.log("===locationName errrr==: " + error);
        });
    };
    CreateCheckInPage.prototype.dismissLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loadingController.dismiss();
                console.log('Loading dismissed!');
                return [2 /*return*/];
            });
        });
    };
    CreateCheckInPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please Wait...',
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCheckInPage.prototype.showDatePicker = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            console.log('Got date: ', date),
                _this.project_finalized_dt = moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY"),
                console.log('project_finalized_dt: ', _this.project_finalized_dt);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    CreateCheckInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-check-in',
            template: __webpack_require__(/*! ./create-check-in.page.html */ "./src/app/pages/create-check-in/create-check-in.page.html"),
            styles: [__webpack_require__(/*! ./create-check-in.page.scss */ "./src/app/pages/create-check-in/create-check-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["DatePicker"]])
    ], CreateCheckInPage);
    return CreateCheckInPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-check-in-create-check-in-module.js.map