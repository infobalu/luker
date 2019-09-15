(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-employee-add-employee-module"],{

/***/ "./src/app/pages/add-employee/add-employee.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.module.ts ***!
  \***********************************************************/
/*! exports provided: AddEmployeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePageModule", function() { return AddEmployeePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_employee_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-employee.page */ "./src/app/pages/add-employee/add-employee.page.ts");







var routes = [
    {
        path: '',
        component: _add_employee_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeePage"]
    }
];
var AddEmployeePageModule = /** @class */ (function () {
    function AddEmployeePageModule() {
    }
    AddEmployeePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_employee_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeePage"]]
        })
    ], AddEmployeePageModule);
    return AddEmployeePageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-employee/add-employee.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ion-header class=\"black_header\" text-center>\n  <ion-toolbar text-center padding>\n    <ion-title>New representative</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding: 0 1.6rem\">\n  <form class=\"add-employee-form\" [formGroup]=\"firstForm\" (ngSubmit)=\"firstFormSubmit(firstForm)\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div padding>\n            <ion-item class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Email (Username)*</ion-label>\n              <ion-input name=\"username\" type=\"text\" formControlName=\"username\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Password*</ion-label>\n              <ion-input name=\"password\" type=\"text\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Name*</ion-label>\n              <ion-input name=\"ename\" type=\"text\" formControlName=\"ename\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Account Email</ion-label>\n              <ion-input name=\"accountEmail\" type=\"text\" formControlName=\"accountEmail\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Mobile</ion-label>\n              <ion-input name=\"mobile\" type=\"text\" formControlName=\"mobile\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Designation</ion-label>\n              <ion-input name=\"designation\" type=\"text\" formControlName=\"designation\"></ion-input>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Shift Start Time*</ion-label>\n              <ion-datetime name=\"startTime\" formControlName=\"startTime\" display-format=\"hh:mm a\"></ion-datetime>\n            </ion-item>\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"floating\">Employee Shift End Time*</ion-label>\n              <ion-datetime name=\"endTime\" formControlName=\"endTime\" display-format=\"hh:mm a\"></ion-datetime>\n            </ion-item>\n           \n            <ion-item  class=\"inp_box\">\n                <ion-label position=\"floating\">Employee No</ion-label>\n                <ion-input name=\"empno\" type=\"text\" formControlName=\"empno\"></ion-input>\n            </ion-item>\n\n            <ion-item  class=\"inp_box\">\n              <ion-label position=\"stacked\">Employee Type*</ion-label>\n              <ion-select name=\"type\" formControlName=\"type\" okText=\"Ok\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Normal Employee\">Dealer</ion-select-option>\n                <ion-select-option value=\"Authorized Employee\">Distributor</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"firstForm.invalid\" expand=\"block\">Add Employee\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n<!-- \n\n<ion-header class=\"black_header\" text-center>\n    <ion-toolbar text-center padding>\n      <ion-title> New representative</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content style=\"padding: 0 1.6rem\">\n    <ion-grid>\n      <ion-list>\n        <ion-item class=\"inp_box\">\n          <ion-label floating>Username</ion-label>\n          <ion-input type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item class=\"inp_box\">\n            <ion-label floating>Username</ion-label>\n            <ion-input type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item class=\"inp_box\">\n              <ion-label floating>Username</ion-label>\n              <ion-input type=\"text\"></ion-input>\n            </ion-item>\n      </ion-list>\n    </ion-grid>\n  </ion-content> -->"

/***/ }),

/***/ "./src/app/pages/add-employee/add-employee.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-employee-form ion-label {\n  padding-top: 4px;\n  letter-spacing: 0.6px;\n  font-size: 15px; }\n\n.add-employee-form ion-input, .add-employee-form ion-datetime, .add-employee-form ion-select {\n  color: #0d8a63; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1bWVzaGIvRGVza3RvcC9zYW1wbGUvZ3VydS9zcmMvYXBwL3BhZ2VzL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBSnZCO0VBT1EsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWVtcGxveWVlLWZvcm17XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLWRhdGV0aW1lLCBpb24tc2VsZWN0IHtcbiAgICAgICAgY29sb3I6ICMwZDhhNjM7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/add-employee/add-employee.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/add-employee/add-employee.page.ts ***!
  \*********************************************************/
/*! exports provided: AddEmployeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeePage", function() { return AddEmployeePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddEmployeePage = /** @class */ (function () {
    function AddEmployeePage(apiService, router, toastController) {
        this.apiService = apiService;
        this.router = router;
        this.toastController = toastController;
    }
    AddEmployeePage.prototype.ngOnInit = function () {
        this.userDetails = JSON.parse(localStorage.getItem("userDetails"));
        this.firstForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            ename: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            accountEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("10:00 am", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("05:00 pm", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            // pic: new FormControl(""),
            // type: new FormControl("", Validators.compose([
            //   Validators.required
            // ])),
            empno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    };
    AddEmployeePage.prototype.firstFormSubmit = function (data) {
        var _this = this;
        console.log("= data.value.empno== : " + data.value.empno);
        var params = {
            email: data.value.username,
            password: data.value.password,
            employee_name: data.value.ename,
            employee_account_email: data.value.accountEmail,
            employee_mobile: data.value.mobile,
            employee_designation: data.value.designation,
            employee_shift_start: data.value.startTime,
            employee_shift_end: data.value.endTime,
            employee_type: data.value.type,
            user_type: 'employee',
            added_by: this.userDetails._id,
            employee_post_location: 'palakkad',
            employee_no: data.value.empno
        };
        this.apiService.postData('/users', params).subscribe(function (result) {
            console.log('==result= : ' + JSON.stringify(result));
            _this.presentToast("Employee added successfully", "bottom");
            _this.router.navigateByUrl('/dashboard');
        }, function (error) {
            alert(JSON.stringify(error));
        });
    };
    AddEmployeePage.prototype.presentToast = function (msg, position) {
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
    AddEmployeePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__(/*! ./add-employee.page.html */ "./src/app/pages/add-employee/add-employee.page.html"),
            styles: [__webpack_require__(/*! ./add-employee.page.scss */ "./src/app/pages/add-employee/add-employee.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AddEmployeePage);
    return AddEmployeePage;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





var ApiService = /** @class */ (function () {
    function ApiService(http, cordovahttp) {
        this.http = http;
        this.cordovahttp = cordovahttp;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].service_URL;
    }
    ApiService.prototype.getData = function (url) {
        console.log('=URL = : ' + this.baseURL + url);
        return this.http.get(this.baseURL + url);
    };
    ApiService.prototype.postData = function (url, params) {
        console.log('=URL = : ' + this.baseURL + url);
        console.log('=params = : ' + JSON.stringify(params));
        return this.http.post(this.baseURL + url, params);
    };
    ApiService.prototype.postApi = function (url, payload, header) {
        //   this.cordovahttp.setHeader('':'')
        //   payload.forEach((value,key) => {
        //     console.log(key+" "+value)
        //   });
        //   return this.cordovahttp.post(url, payload, header);
        // }
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
    ], ApiService);
    return ApiService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-employee-add-employee-module.js.map