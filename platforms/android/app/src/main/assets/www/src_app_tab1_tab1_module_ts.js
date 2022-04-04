"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    },
    {
        path: 'tempo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_tab1_tempo_tempo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tempo/tempo.module */ 6882)).then(m => m.TempoPageModule)
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 123);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let Tab1Page = class Tab1Page {
    constructor(route) {
        this.route = route;
        //static list of city name with woeid 
        this.cityList = [
            { name: 'Milano', id: '718345' },
            { name: 'Napoli', id: '719258' },
            { name: 'Roma', id: '721943' },
            { name: 'Torino', id: '725003' },
            { name: 'Venezia', id: '725746' },
        ];
    }
    //redirect to page tempo with id and name city
    getCity(id, name) {
        this.route.navigate(['tabs/tab1/tempo'], { state: { id, name } });
    }
    ngOnInit() {
        console.log('Getting City');
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab1',
        template: _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 123:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title\n      >City\n      <ion-icon name=\"business-outline\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class=\"list\">\n    <ion-item\n      class=\"list\"\n      button\n      (click)=\"getCity(city.id, city.name)\"\n      *ngFor=\"let city of cityList\"\n    >\n      <ion-label> {{city.name}} </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "::-webkit-scrollbar {\n  width: 0;\n}\n\nion-header ion-toolbar {\n  --background: #f5fffa;\n}\n\nion-header ion-toolbar ion-title {\n  font-size: x-large;\n  text-align: center;\n}\n\nion-content {\n  --ion-background-color: #f5fffa;\n}\n\nion-content ion-list {\n  --ion-background-color: #f5fffa;\n}\n\nion-content ion-item {\n  --background: #f5fffa;\n  font-size: 1rem;\n  padding: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksUUFBQTtBQUNKOztBQUdJO0VBQ0UscUJBQUE7QUFBTjs7QUFDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFJRTtFQUNFLCtCQUFBO0FBREo7O0FBRUk7RUFDRSwrQkFBQTtBQUFOOztBQUVJO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUFOIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgXG4gIGlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWZmZmE7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2Y1ZmZmYTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgcGFkZGluZzogMzJweDtcbiAgICB9XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map