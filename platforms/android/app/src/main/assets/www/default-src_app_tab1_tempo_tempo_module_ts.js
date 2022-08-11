"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_tab1_tempo_tempo_module_ts"],{

/***/ 4272:
/*!***********************************************!*\
  !*** ./src/app/tab1/services/tab1.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Service": () => (/* binding */ Tab1Service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9754);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);





let Tab1Service = class Tab1Service {
    constructor(httpNative, platform, http) {
        this.httpNative = httpNative;
        this.platform = platform;
        this.http = http;
    }
    getForcastDetail(id) {
        //promise
        return new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                this.httpNative
                    .get('https://www.metaweather.com/api/location/' + id, {}, {})
                    .then((data) => {
                    let formattedResponse = JSON.parse(data.data);
                    resolve(formattedResponse);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                this.http
                    .get('https://www.metaweather.com/api/location/' + id)
                    .subscribe((data) => {
                    resolve(data);
                }, (error) => {
                    reject(error);
                });
            }
        });
    }
};
Tab1Service.ctorParameters = () => [
    { type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
Tab1Service = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], Tab1Service);



/***/ }),

/***/ 9958:
/*!****************************************************!*\
  !*** ./src/app/tab1/tempo/tempo-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoPageRoutingModule": () => (/* binding */ TempoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tempo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempo.page */ 93);




const routes = [
    {
        path: '',
        component: _tempo_page__WEBPACK_IMPORTED_MODULE_0__.TempoPage
    }
];
let TempoPageRoutingModule = class TempoPageRoutingModule {
};
TempoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TempoPageRoutingModule);



/***/ }),

/***/ 6882:
/*!********************************************!*\
  !*** ./src/app/tab1/tempo/tempo.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoPageModule": () => (/* binding */ TempoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _tempo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempo-routing.module */ 9958);
/* harmony import */ var _tempo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempo.page */ 93);
/* harmony import */ var src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tabs/tabs.page */ 3278);








let TempoPageModule = class TempoPageModule {
};
TempoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tempo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TempoPageRoutingModule,
        ],
        declarations: [_tempo_page__WEBPACK_IMPORTED_MODULE_1__.TempoPage, src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage],
        exports: [src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage]
    })
], TempoPageModule);



/***/ }),

/***/ 93:
/*!******************************************!*\
  !*** ./src/app/tab1/tempo/tempo.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoPage": () => (/* binding */ TempoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tempo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tempo.page.html */ 4616);
/* harmony import */ var _tempo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tempo.page.scss */ 5320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_tab1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tab1.service */ 4272);






let TempoPage = class TempoPage {
    constructor(router, route, tab1Service) {
        this.router = router;
        this.route = route;
        this.tab1Service = tab1Service;
        //guard
        this.Load = false;
        //id and name pass by tab1page
        this.id = this.router.getCurrentNavigation().extras.state.id;
        this.name = this.router.getCurrentNavigation().extras.state.name;
    }
    //get request in the api with woeid
    getData() {
        this.tab1Service
            .getForcastDetail(this.id)
            .then((data) => {
            if (data) {
                this.Load = true;
                console.log(data);
                this.listWeather = data.consolidated_weather;
                console.log(this.listWeather);
                console.log(this.id);
                console.log(this.name);
            }
        })
            .catch((error) => {
            this.Load = true;
            //error to load page
            this.error = error.message;
            console.log(this.error);
        });
    }
    goHome() {
        //redirect home
        let previousPage = this.route.url.substring(0, this.route.url.lastIndexOf('/'));
        this.route.navigate([previousPage]);
    }
    ngOnInit() {
        //execute function
        console.log('WEATHERRRRRRRRRRRRRRRRRRRRRRR');
        this.getData();
        console.log(this.route.url);
    }
};
TempoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_tab1_service__WEBPACK_IMPORTED_MODULE_2__.Tab1Service }
];
TempoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tempo',
        template: _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tempo_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tempo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TempoPage);



/***/ }),

/***/ 4616:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tempo/tempo.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"goHome()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Weather <ion-icon name=\"cloud-outline\"></ion-icon></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!Load\" id=\"spinner-cont\">\n    <ion-spinner id=\"spinner\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <div class=\"error\" *ngIf=\"error\">\n    <h1 id=\"message\">An error Occurred!</h1>\n    <p class=\"center\">{{error}}</p>\n  </div>\n\n  <ion-card *ngFor=\"let item of listWeather\">\n    <ion-card-content>\n      <div id=\"container\">\n        <div id=\"titolo1\">\n          <h1 style=\"font-size: medium\">{{item.created | date:'hh:mm a'}}</h1>\n          <h1 class=\"end1\">\n            <b id=\"big\">{{item.max_temp.toFixed()}}°</b>\n            <b id=\"small\"> / {{item.min_temp.toFixed()}}° </b>\n          </h1>\n        </div>\n        <div id=\"immagine\">\n          <img\n            src=\"https://www.metaweather.com/static/img/weather/png/64/{{item.weather_state_abbr}}.png\"\n          />\n        </div>\n        <div id=\"titolo4\">\n          <h1 style=\"font-size: medium; text-align: end\">\n            <b>{{item.applicable_date | date}}</b>\n          </h1>\n          <h1 class=\"end2\" style=\"font-size: medium\">\n            {{item.weather_state_name}}\n          </h1>\n        </div>\n        <hr />\n      </div>\n      <div id=\"city\">\n        <h2>\n          <b>{{name}}</b>\n        </h2>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 5320:
/*!********************************************!*\
  !*** ./src/app/tab1/tempo/tempo.page.scss ***!
  \********************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --background: #f5fffa;\n}\nion-header ion-toolbar {\n  --background: #f5fffa;\n}\nion-header ion-toolbar ion-title {\n  font-size: large;\n  text-align: center;\n}\nion-header ion-buttons {\n  --background: #f5fffa;\n}\nion-header ion-buttons ion-back-button {\n  color: black;\n}\nion-content {\n  --background: #f5fffa;\n}\nion-content ion-card {\n  --background: #e4f0fc;\n  color: black;\n}\nion-content ion-card ion-card-content {\n  padding: 20px;\n  --background: #e4f0fc;\n}\n.tempo {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n}\n#tempoI {\n  height: 80px;\n  width: 80px;\n  align-self: center;\n}\nimg {\n  width: 100%;\n  height: 100%;\n}\n#city {\n  width: 100%;\n  align-self: baseline;\n}\nhr {\n  border-style: inset;\n  border-width: 2px;\n}\n#small {\n  font-size: 15px;\n  text-align: start;\n}\n#big {\n  font-size: 20px;\n  text-align: start;\n}\n#spinner-cont {\n  height: 100%;\n  width: 100%;\n  background-color: #f5fffa;\n}\n#spinner {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  color: black;\n}\n.error {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background-color: lightsalmon;\n  position: absolute;\n  color: red;\n  border: 2px solid red;\n}\n.center {\n  text-align: center;\n}\n#message {\n  text-align: center;\n  margin-top: 50%;\n}\nh2 {\n  width: 100%;\n  margin-top: 10px;\n}\n.left {\n  border: 2px solid;\n  height: 30px;\n  width: 100%;\n}\n.right {\n  width: 100%;\n  height: 30px;\n}\n.tleft {\n  text-align: left;\n  width: 102px;\n  height: 0px;\n}\n.tright {\n  height: 0px;\n  text-align: end;\n}\n#container {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n#immagine {\n  align-self: center;\n  height: 80px;\n  width: 80px;\n}\n#titolo1 {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  margin-bottom: 28px;\n  height: 132px;\n  width: 101px;\n}\n#titolo4 {\n  display: flex;\n  flex-direction: column;\n  align-self: flex-end;\n  margin-bottom: 28px;\n  height: 132px;\n  width: 122px;\n}\n.end1 {\n  margin-top: 107px;\n  align-self: start;\n}\n.end2 {\n  text-align: end;\n  width: 100%;\n  align-self: start;\n  margin-top: 114px;\n}\nhr {\n  align-self: baseline;\n  border: 2px solid gray;\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNFLHFCQUFBO0FBRU47QUFETTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUFJO0VBQ0UscUJBQUE7QUFFTjtBQURNO0VBQ0UsWUFBQTtBQUdSO0FBRUU7RUFDRSxxQkFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFTjtBQURNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBR1I7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBSUo7QUFGRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUtKO0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBS0o7QUFIRTtFQUNFLGtCQUFBO0FBTUo7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQU1KO0FBSkU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQUpFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTEU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUUo7QUFORTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBU0o7QUFORTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBU0o7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFVSjtBQVJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBV0o7QUFSRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVdKO0FBVEU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBWUo7QUFWRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQWFKO0FBWEU7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBY0oiLCJmaWxlIjoidGVtcG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbnMge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICBpb24tY2FyZCB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlNGYwZmM7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZTRmMGZjO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnRlbXBvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIH1cbiAgI3RlbXBvSSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gICNjaXR5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgfVxuICBociB7XG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgfVxuICBcbiAgI3NtYWxsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIH1cbiAgI2JpZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG4gIFxuICAjc3Bpbm5lci1jb250IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmZmYTtcbiAgfVxuICAjc3Bpbm5lciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLmVycm9yIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICB9XG4gIC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgI21lc3NhZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gIH1cbiAgaDIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5sZWZ0IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC50bGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAycHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gIH1cbiAgLnRyaWdodCB7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIFxuICAjY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI2ltbWFnaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICB9XG4gICN0aXRvbG8xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICBoZWlnaHQ6IDEzMnB4O1xuICAgIHdpZHRoOiAxMDFweDtcbiAgfVxuICBcbiAgI3RpdG9sbzQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgIGhlaWdodDogMTMycHg7XG4gICAgd2lkdGg6IDEyMnB4O1xuICB9XG4gIC5lbmQxIHtcbiAgICBtYXJnaW4tdG9wOiAxMDdweDtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgfVxuICAuZW5kMiB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDExNHB4O1xuICB9XG4gIGhyIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_tab1_tempo_tempo_module_ts.js.map