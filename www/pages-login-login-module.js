(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"login-page\" padding>\n  <form [formGroup]=\"firstForm\" (ngSubmit)=\"login(firstForm)\" style=\"position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div style=\"padding: 10vh 0\">\n            <div text-center>\n              <h1> App Logo </h1>\n            </div>\n            <div text-center>\n              <h3>Login</h3>\n            </div>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-label position=\"floating\">Email ID</ion-label>\n              <ion-input name=\"emailid\" type=\"email\" formControlName=\"emailid\"></ion-input>\n            </ion-item>\n            <!-- <ion-input name=\"emailid\" type=\"email\" placeholder=\"your@email.com\" formControlName=\"emailid\"></ion-input> -->\n            <!-- <ion-item>\n              \n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n            </ion-item> -->\n\n            <ion-item>\n              <ion-label position=\"floating\">Password </ion-label>\n              <ion-input name=\"password\" type=\"password\"  formControlName=\"password\"></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button class=\"btn_red\" expand=\"block\" size=\"large\" type=\"submit\" [disabled]=\"firstForm.invalid\">Login\n            </ion-button>\n            <!-- <ion-button class=\"btn_red\" size=\"large\" type=\"submit\" [disabled]=\"firstForm.invalid\" expand=\"block\">Login</ion-button> -->\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <div text-center>\n          If you don't have an account, please <a routerLink='/signup'>\n            register</a> first!\n        </div>\n      </ion-row> -->\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page ion-item {\n  --color: rgb(0, 0, 0); }\n\n.login-page ion-item {\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1bWVzaGIvRGVza3RvcC9zYW1wbGUvZ3VydS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLHFCQUFRLEVBQUE7O0FBSGhCO0VBU1EsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XG4gICBcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1jb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIH1cblxuICAgIFxuXG4gICAgaW9uLWl0ZW17XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");








var LoginPage = /** @class */ (function () {
    function LoginPage(menu, router, apiService, toastController, alertController, network) {
        this.menu = menu;
        this.router = router;
        this.apiService = apiService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.network = network;
        this.network.onDisconnect().subscribe(function () {
            console.log('NO INTERNET login');
            localStorage.setItem('internet', "0");
        });
        this.network.onConnect().subscribe(function () {
            console.log(' INTERNET login');
            localStorage.setItem('internet', "1");
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var time1 = new Date(1570453660052);
        console.log('==time1 = : ' + time1);
        var time2 = new Date();
        console.log('==time2 = : ' + time2);
        //this.diff_minutes(time2, time1);
        this.firstForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", this.passwordvalidation)
        });
    };
    LoginPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'SalesBlazon!',
                            message: 'ERRRRRRROR!!!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        navigator['app'].exitApp();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        navigator['app'].exitApp();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.diff_minutes = function (dt2, dt1) {
        var diff = (dt2.getTime() - dt1.getTime()) / 1000;
        diff /= 60;
        var diffHr = Math.abs(dt1.getTime() - dt2.getTime()) / 3600000;
        console.log('==diffHr== : ' + diffHr);
        console.log('==diff== : ' + diff);
        if (diff > 10000) {
            this.presentAlertPrompt();
        }
        return Math.abs(Math.round(diff));
    };
    LoginPage.prototype.passwordvalidation = function (formcontrol) {
        if (formcontrol.value.length < 5) {
            return { "password": true };
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.login = function (data) {
        var _this = this;
        var params = {
            email: data.value.emailid,
            password: data.value.password
        };
        // this.internetstatus = localStorage.getItem("internet");
        // console.log("= this.internetstatus == : "+ this.internetstatus);
        if (navigator.onLine) {
            this.apiService.postData('/user/login', params).subscribe(function (result) {
                console.log("=result= :" + JSON.stringify(result));
                if (result['status'] == "success") {
                    localStorage.setItem('userDetails', JSON.stringify(result['data']['user']));
                    /* if (result['data']['user']['employee_name']) {
                       this.presentToast('Welcome ' + result['data']['user']['employee_name'], 'bottom');
                     } else {
                       this.presentToast('Welcome ' + result['data']['user']['contact_person'], 'bottom');
                     }*/
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    _this.presentToast('Username or password is incorrect', 'middle');
                }
            }, function (error) {
                alert(JSON.stringify(error));
            });
        }
        else {
            alert('Please check your internet connection');
        }
    };
    LoginPage.prototype.presentToast = function (msg, position) {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map