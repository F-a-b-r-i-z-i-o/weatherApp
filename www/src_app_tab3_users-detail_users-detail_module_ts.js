"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_users-detail_users-detail_module_ts"],{

/***/ 2734:
/*!******************************************************************!*\
  !*** ./src/app/tab3/users-detail/users-detail-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersDetailPageRoutingModule": () => (/* binding */ UsersDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _users_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-detail.page */ 9359);




const routes = [
    {
        path: '',
        component: _users_detail_page__WEBPACK_IMPORTED_MODULE_0__.UsersDetailPage
    }
];
let UsersDetailPageRoutingModule = class UsersDetailPageRoutingModule {
};
UsersDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersDetailPageRoutingModule);



/***/ }),

/***/ 5104:
/*!**********************************************************!*\
  !*** ./src/app/tab3/users-detail/users-detail.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersDetailPageModule": () => (/* binding */ UsersDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _users_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-detail-routing.module */ 2734);
/* harmony import */ var _users_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-detail.page */ 9359);







let UsersDetailPageModule = class UsersDetailPageModule {
};
UsersDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _users_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersDetailPageRoutingModule
        ],
        declarations: [_users_detail_page__WEBPACK_IMPORTED_MODULE_1__.UsersDetailPage]
    })
], UsersDetailPageModule);



/***/ }),

/***/ 9359:
/*!********************************************************!*\
  !*** ./src/app/tab3/users-detail/users-detail.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersDetailPage": () => (/* binding */ UsersDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./users-detail.page.html */ 5845);
/* harmony import */ var _users_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-detail.page.scss */ 6252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let UsersDetailPage = class UsersDetailPage {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.userDetail = this.router.getCurrentNavigation().extras.state.item;
        //Guard to div
        this.showUserInfo = false;
        this.showUserAddress = false;
        this.showUserCompany = false;
    }
    //Function to visualize 1 div 
    showInfo() {
        this.showUserAddress = false;
        this.showUserCompany = false;
        this.showUserInfo = !this.showUserInfo;
    }
    //Function to visualize 2 div 
    showAddress() {
        this.showUserAddress = !this.showUserAddress;
        this.showUserCompany = false;
        this.showUserInfo = false;
    }
    //Function to visualize 3 div 
    showCompany() {
        this.showUserAddress = false;
        this.showUserCompany = !this.showUserCompany;
        this.showUserInfo = false;
    }
    //redirect user to home by the button
    navigate() {
        this.router.navigate(['tabs/tab3']);
    }
    ngOnInit() {
    }
};
UsersDetailPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UsersDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-users-detail',
        template: _home_fabrizio_Scrivania_tempo2_node_modules_ngtools_webpack_src_loaders_direct_resource_js_users_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_users_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersDetailPage);



/***/ }),

/***/ 5845:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/users-detail/users-detail.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"navigate()\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>{{userDetail.name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <div id=\"photo\" style=\"background-color: #f5fffa\">\n      <ion-avatar class=\"avatar\">\n        <img [src]=\"userDetail.avatar\" style=\"background-color: #f5fffa\" />\n      </ion-avatar>\n    </div>\n    <ion-card button id=\"item1\" (click)=\"showInfo()\">\n      <h1>\n        Information\n        <ion-icon class=\"arrow\" name=\"chevron-down-outline\"></ion-icon>\n      </h1>\n      <ion-card-content>\n        <div class=\"content\" *ngIf=\"showUserInfo\">\n          <h6 class=\"title-card\">Username:</h6>\n          <h6 class=\"cont-card\">{{userDetail.username}}</h6>\n          <h6 class=\"title-card\">Phone:</h6>\n          <h6 class=\"cont-card\">{{userDetail.phone}}</h6>\n          <h6 class=\"title-card\">Email:</h6>\n          <h6 class=\"cont-card\">{{userDetail.email}}</h6>\n          <h6 class=\"title-card\">Website:</h6>\n          <h6 class=\"cont-card\">{{userDetail.website}}</h6>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card id=\"item2\" button (click)=\"showAddress()\">\n      <div>\n        <h1>\n          Address <ion-icon class=\"arrow\" name=\"chevron-down-outline\"></ion-icon>\n        </h1>\n      </div>\n      <ion-card-content>\n        <div class=\"content\" *ngIf=\"showUserAddress\">\n          <h6 class=\"title-card\">Street:</h6>\n          <h6 class=\"cont-card\">{{userDetail.address.street}}</h6>\n          <h6 class=\"title-card\">Suite:</h6>\n          <h6 class=\"cont-card\">{{userDetail.address.suite}}</h6>\n          <h6 class=\"title-card\">City:</h6>\n          <h6 class=\"cont-card\">{{userDetail.address.city}}</h6>\n          <h6 class=\"title-card\">Zip Code:</h6>\n          <h6 class=\"cont-card\">{{userDetail.address.zipcode}}</h6>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card button (click)=\"showCompany()\">\n      <h1>\n        Company <ion-icon class=\"arrow\" name=\"chevron-down-outline\"></ion-icon>\n      </h1>\n      <ion-card-content>\n        <div class=\"content\" *ngIf=\"showUserCompany\">\n          <h6 class=\"title-card\">Company:</h6>\n          <h6 class=\"cont-card\">{{userDetail.company.name}}</h6>\n          <h6 class=\"title-card\">Phrase:</h6>\n          <h6 class=\"cont-card\">{{userDetail.company.catchPhrase}}</h6>\n          <h6 class=\"title-card\">Bs:</h6>\n          <h6 class=\"cont-card\">{{userDetail.company.bs}}</h6>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>");

/***/ }),

/***/ 6252:
/*!**********************************************************!*\
  !*** ./src/app/tab3/users-detail/users-detail.page.scss ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  --background: #f5fffa;\n}\nion-header ion-toolbar {\n  --background: #f5fffa;\n}\nion-header ion-toolbar ion-buttons {\n  --background: #f5fffa;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  color: black;\n}\nion-header ion-toolbar ion-title {\n  text-align: center;\n  font-size: medium;\n  --background: #f5fffa;\n}\nion-header ion-avatar {\n  --background: #f5fffa;\n}\n.avatar {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n  --background: #f5fffa;\n}\n#photo {\n  display: flex;\n  margin-top: 20px;\n  height: 150;\n  width: 100%;\n  background-color: #f5fffa;\n}\nion-content {\n  --background: #f5fffa;\n}\nion-content ion-card {\n  background-color: #e4f0fc;\n  color: black;\n  font-size: medium;\n  font-weight: bold;\n}\nion-content ion-card h1 {\n  text-align: center;\n  font-weight: bold;\n  font-size: large;\n  background-color: #e4f0fc;\n}\n.title-card {\n  justify-content: flex-start;\n  font-weight: bold;\n  font-size: medium;\n  color: black;\n}\n.content {\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  background-color: #e4f0fc;\n  height: 100%;\n}\n#spinner {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -20px;\n  margin-left: -20px;\n  color: black;\n}\nh6 {\n  color: black;\n  padding-top: 4px;\n  padding-left: 4px;\n}\n.arrow {\n  margin-right: 10px;\n  float: right;\n  width: 20px;\n  height: 20px;\n}\n.cont-card {\n  text-align: end;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtBQUVOO0FBRE07RUFDRSxxQkFBQTtBQUdSO0FBRlE7RUFDRSxZQUFBO0FBSVY7QUFETTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUdSO0FBQUk7RUFDRSxxQkFBQTtBQUVOO0FBRUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7QUFBSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQURNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFHUjtBQUVFO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidXNlcnMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmNWZmZmE7XG4gICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICAgICAgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y1ZmZmYTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmNWZmZmE7XG4gICAgfVxuICB9XG4gIFxuICAuYXZhdGFyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICB9XG4gIFxuICAjcGhvdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDE1MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmZmZhO1xuICB9XG4gIFxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmZmZhO1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGYwZmM7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRmMGZjO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnRpdGxlLWNhcmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGYwZmM7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAjc3Bpbm5lciB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgaDYge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICB9XG4gIFxuICAuYXJyb3cge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY29udC1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_users-detail_users-detail_module_ts.js.map