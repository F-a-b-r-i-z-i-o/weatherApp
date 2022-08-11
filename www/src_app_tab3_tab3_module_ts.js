"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 58:
/*!***********************************************!*\
  !*** ./src/app/tab3/services/tab3.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Service": () => (/* binding */ Tab3Service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/http/ngx */ 9754);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);





let Tab3Service = class Tab3Service {
    constructor(httpNative, platform, http) {
        this.httpNative = httpNative;
        this.platform = platform;
        this.http = http;
    }
    getUsersForcast() {
        //promise
        return new Promise((resolve, reject) => {
            if (this.platform.is('cordova')) {
                this.httpNative
                    .get('https://jsonplaceholder.typicode.com/users', {}, {})
                    .then((data) => {
                    let formattedResponse = JSON.parse(data.data);
                    resolve(formattedResponse);
                })
                    .catch((error) => {
                    reject(error);
                });
            }
            else {
                this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
                    resolve(data);
                }, (error) => {
                    reject(error);
                });
            }
        });
    }
};
Tab3Service.ctorParameters = () => [
    { type: _awesome_cordova_plugins_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
Tab3Service = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], Tab3Service);



/***/ }),

/***/ 8058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    },
    {
        path: 'users-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab3_users-detail_users-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./users-detail/users-detail.module */ 5104)).then(m => m.UsersDetailPageModule)
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 7586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 2308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 8058);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 2308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 8752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 4170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_tab3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tab3.service */ 58);






let Tab3Page = class Tab3Page {
    constructor(route, tab3Service) {
        this.route = route;
        this.tab3Service = tab3Service;
        //Guard
        this.Load = false;
    }
    getUsers() {
        //Get request to the API
        this.tab3Service.getUsersForcast().then((data) => {
            this.Load = true;
            //Controll if data is load
            console.log(data);
            if (data) {
                this.usersList = data;
                console.log(this.usersList);
                //console.log(this.usersList[0].address.city);
                for (let [index, user] of this.usersList.entries()) {
                    user.avatar = 'https://picsum.photos/200/300?random=' + index;
                }
            }
        }, (error) => {
            //guard
            this.Load = true;
            //error to load page
            this.error = error.message;
            console.log(this.error);
        });
    }
    buttonClick(item) {
        console.log(item);
        this.route.navigate(['users-detail'], { state: { item } });
    }
    ngOnInit() {
        //execute function
        console.log('USEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
        this.getUsers();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_tab3_service__WEBPACK_IMPORTED_MODULE_2__.Tab3Service }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 8752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      USERS\n      <ion-icon name=\"people-outline\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background-color: #f5fffa\">\n  <div *ngIf=\"!Load\" id=\"spinner-cont\">\n    <ion-spinner id=\"spinner\" name=\"lines\"></ion-spinner>\n  </div>\n\n  <ion-list>\n    <ion-item\n      button\n      (click)=\"buttonClick(item)\"\n      *ngFor=\"let item of usersList;\"\n    >\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.avatar\" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.name}}</h2>\n        <h3>{{item.email}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <div class=\"error\" *ngIf=\"error\">\n    <h1 id=\"message\">An error Occurred!</h1>\n    <p class=\"center\">{{error}}</p>\n  </div>\n</ion-content>");

/***/ }),

/***/ 4170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --background: #f5fffa;\n}\nion-header ion-toolbar {\n  --background: #f5fffa;\n}\nion-header ion-toolbar ion-title {\n  text-align: center;\n  font-size: medium;\n  --background: #f5fffa;\n}\nion-content {\n  --background: #f5fffa;\n}\nion-content ion-list {\n  --background: #f5fffa;\n}\nion-content ion-list ion-item {\n  --background: #f5fffa;\n}\nion-content ion-list ion-item ion-label {\n  color: black;\n  --background: #f5fffa;\n}\nion-content ion-list ion-item ion-avatar {\n  --background: #f5fffa;\n}\n#spinner {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  color: black;\n}\n.error {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background-color: lightsalmon;\n  position: absolute;\n  color: red;\n  border: 2px solid red;\n}\n.center {\n  text-align: center;\n}\n#message {\n  text-align: center;\n  margin-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUFJO0VBQ0UscUJBQUE7QUFFTjtBQURNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBR1I7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFBSTtFQUNFLHFCQUFBO0FBRU47QUFETTtFQUNFLHFCQUFBO0FBR1I7QUFGUTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUlWO0FBRlE7RUFDRSxxQkFBQTtBQUlWO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtBQUdKO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFHSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmNWZmZmE7XG4gICAgICBpb24tdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWZmZmE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgIGlvbi1saXN0IHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmNWZmZmE7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICNzcGlubmVyIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIFxuICAuZXJyb3Ige1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIH1cbiAgLmNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAjbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map