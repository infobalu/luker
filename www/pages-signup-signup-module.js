(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"signup-page\" padding>\n  <form [formGroup]=\"firstForm\" (ngSubmit)=\"firstFormSubmit(firstForm)\">\n    <ion-grid *ngIf=\"!showSeconfForm\">\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h1>Team Guru</h1>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"emailid\" type=\"email\" placeholder=\"your@email.com\" formControlName=\"emailid\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"firstForm.invalid\" expand=\"block\">CONTINUE</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form [formGroup]=\"secondForm\" (ngSubmit)=\"secondFormSubmit(secondForm)\">\n    <ion-grid *ngIf=\"showSeconfForm\">\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Sign Up</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input name=\"companyName\" type=\"text\" placeholder=\"Company Name\" formControlName=\"companyName\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"contactPerson\" type=\"text\" placeholder=\"Contact Person\" formControlName=\"contactPerson\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"designation\" type=\"text\" placeholder=\"Designation\" formControlName=\"designation\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"Work email\" formControlName=\"email\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"contactNumber\" type=\"text\" placeholder=\"Contact Number\" formControlName=\"contactNumber\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-select name=\"country\" formControlName=\"country\" okText=\"Ok\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"\">Select Country</ion-select-option>\n                <ion-select-option value=\"India\">India</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"secondForm.invalid\" expand=\"block\">Create Account\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-page .item-native {\n  border-color: black; }\n\n.signup-page ion-item {\n  --color: rgb(0, 0, 0); }\n\n.signup-page ion-button {\n  --background: #062f77; }\n\n.signup-page ion-select {\n  padding-left: 0px;\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1bWVzaGIvRGVza3RvcC9zYW1wbGUvZ3VydS9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQW1CLEVBQUE7O0FBRjNCO0VBS1EscUJBQVEsRUFBQTs7QUFMaEI7RUFRUSxxQkFBYSxFQUFBOztBQVJyQjtFQVdRLGlCQUFpQjtFQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtcGFnZSB7XG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xuICAgIH1cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SignupPage = /** @class */ (function () {
    function SignupPage(apiService, router, toastController) {
        this.apiService = apiService;
        this.router = router;
        this.toastController = toastController;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.firstForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.passwordvalidation)
        });
        this.secondForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            contactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    };
    SignupPage.prototype.passwordvalidation = function (formcontrol) {
        if (formcontrol.value.length < 5) {
            return { "password": true };
        }
    };
    SignupPage.prototype.firstFormSubmit = function (data) {
        this.showSeconfForm = true;
        this.firstFormData = data.value;
    };
    SignupPage.prototype.secondFormSubmit = function (data) {
        var _this = this;
        this.secondFormData = data.value;
        var params = {
            email: this.firstFormData.emailid,
            password: this.firstFormData.password,
            company_name: this.secondFormData.companyName,
            contact_person: this.secondFormData.contactPerson,
            designation: this.secondFormData.designation,
            work_email: this.secondFormData.email,
            contact_number: this.secondFormData.contactNumber,
            user_type: 'owner'
        };
        this.apiService.postData('/users', params).subscribe(function (result) {
            _this.presentToast();
            localStorage.clear();
            _this.router.navigateByUrl('/login');
        });
    };
    SignupPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Registration completed succesfully. Please try to login',
                            position: 'middle',
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
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/pages/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SignupPage);
    return SignupPage;
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
//# sourceMappingURL=pages-signup-signup-module.js.map