webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!--<img src=\"img/NDoHbanner.png\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"100%\">-->\n    <div><a class=\"navbar-brand\" routerLink=\"/staging/api/apps/fwm/home\" routerLinkActive=\"active\" >Population Estimation Tool</a></div>\n    <br>\n    <br>\n    <div class=\"navbar-header\">\n\n      <button type=\"button\" class=\"pull-left navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n    </div>\n    <br>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li  class=\"active\"><a routerLink=\"/staging/api/apps/pe/pesetup\" routerLinkActive=\"active\">Configure</a></li>\n        <li ><a routerLink=\"/staging/api/apps/pe/pecalculation\" routerLinkActive=\"active\" >Calculation</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n\n\n<!--<div class=\"container\" >\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Population Estimation</div>\n    <div class=\"panel-body\">\n      <label>Name of the Dataset </label>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Population Dataelements</div>\n        <ul class=\"list-group\">\n          <li *ngFor=\"let dataelement of dateElements\">\n            {{dataelement.displayName }}\n          </li>\n\n        </ul>\n      </div>\n      <div>\n        <form  class=\"form-horizontal\" #population = \"ngForm\">\n          <label   >Org Unit Area</label>\n          <select class=\"form-control\" id=\"orgunitId\" >\n            <option value = \"\">Please select a facility</option>\n            <option *ngFor = \"let orgUnit of orgUnitLevel5Orgs\" name =\"orgUnit\"  ngModel >{{orgUnit.displayName}}</option>\n          </select>\n\n          <select class=\"form-control\" id=\"orglevelId\">\n            <option value = \"\">Please select a Org Unit Level</option>\n            <option *ngFor = \"let level of organisationUnitLevels\" name = \"orgLevel\" NgModel>{{level.displayName}}</option>\n          </select>\n\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Date Range</div>\n            <label   >From </label> <input type=\"Date\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n            <label   >To</label> <input type=\"Date\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n          </div>\n          <label   >Re-estimate Org Unit Level</label>\n\n          <input type=\"text\" class=\"form-control\" name= \"adkMaBHuDha\" ngModel  required=\"required\"/>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Org-Unit Levels for</div>\n            <label   >Population Factors (Routine Data)</label> <input type=\"text\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n            <label   >Source Populations Statistics </label> <input type=\"text\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n          </div>\n          <br/>\n          <input class=\"btn btn-primary\"  type=\"submit\" value=\"Calculate Estimations\">\n        </form>\n        <pre>{{population.value | json}}</pre>\n      </div>\n    </div>\n  </div>\n\n-->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__ = __webpack_require__("../../../../../src/app/providers/orgUnit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__ = __webpack_require__("../../../../../src/app/providers/dataelement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__ = __webpack_require__("../../../../../src/app/providers/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(orgUnitService, dataElementService, datasetService) {
        this.orgUnitService = orgUnitService;
        this.dataElementService = dataElementService;
        this.datasetService = datasetService;
        this.OrgUnitArea = "";
        this.OrgUnitLevel = "";
        this.DateRangeStart = "";
        this.DateRangeEnd = "";
        this.populationEstimateDataElements = [];
        this.organisationUnitLevels = [];
        this.datasets = [];
        this.orgUnitLevel5Orgs = [];
        this.dateElements = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Boki Boki");
        var dataelementUrl = '../../../training/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';
        var dataSetsUrl = '../../../training/api/dataSets.json?paging=false&fields=id, name&filter=id:eq:L2hwAPHJyTd&paging=false';
        //const orgUnitLevelUrl = '../../training/api/organisationUnitLevels.json';
        var orgUnitLevel5Orgsurl = '../../../training/api/organisationUnits.json?paging=false&filter=level:eq:4';
        var orgUnitLevelUrl = '../../../training/api/organisationUnitLevels.json?paging=false';
        this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(function (result) { return console.log(result); }).catch(function (error) { return console.log(error); });
        this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(function (result) {
            _this.orgUnitLevel5Orgs = result.organisationUnits;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.dataElementService.getDataelementsService(dataelementUrl).then(function (result) {
            _this.dateElements = result.dataElements;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.datasetService.getDataSet(dataSetsUrl).then(function (result) {
            _this.datasets = result.dataSets;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.orgUnitService.getOrgUnitsService(orgUnitLevelUrl).then(function (result) {
            _this.organisationUnitLevels = result.organisationUnitLevels;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_population_estimate_form_population_estimate_component__ = __webpack_require__("../../../../../src/app/form-population-estimate/form-population-estimate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dataelement_service__ = __webpack_require__("../../../../../src/app/providers/dataelement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_Option_sets_service__ = __webpack_require__("../../../../../src/app/providers/Option-sets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dataset_service__ = __webpack_require__("../../../../../src/app/providers/dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_orgUnit_service__ = __webpack_require__("../../../../../src/app/providers/orgUnit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__population_setup_form_population_setup_form_component__ = __webpack_require__("../../../../../src/app/population-setup-form/population-setup-form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'staging/api/apps/pe/pesetup', component: __WEBPACK_IMPORTED_MODULE_11__population_setup_form_population_setup_form_component__["a" /* PopulationSetupFormComponent */] },
    { path: 'staging/api/apps/pe/pecalculation', component: __WEBPACK_IMPORTED_MODULE_6__form_population_estimate_form_population_estimate_component__["a" /* FormPopulationEstimateComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__form_population_estimate_form_population_estimate_component__["a" /* FormPopulationEstimateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__population_setup_form_population_setup_form_component__["a" /* PopulationSetupFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            )
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_dataelement_service__["a" /* DataElementService */], __WEBPACK_IMPORTED_MODULE_9__providers_dataset_service__["a" /* DatasetService */], __WEBPACK_IMPORTED_MODULE_8__providers_Option_sets_service__["a" /* OptionSetsService */], __WEBPACK_IMPORTED_MODULE_10__providers_orgUnit_service__["a" /* OrgUnitService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/form-population-estimate/form-population-estimate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-population-estimate/form-population-estimate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Population Estimation</div>\n    <div class=\"panel-body\">\n      <label>Name of the Dataset </label>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Population Dataelements</div>\n       <!--\n\n        <ul class=\"list-group\">\n          <li *ngFor=\"let dataelement of dateElements\">\n            {{dataelement.displayName }}\n          </li>\n\n        </ul>\n        -->\n      </div>\n      <div>\n        <form  class=\"form-horizontal\" #population = \"ngForm\">\n          <label   >Org Unit Area</label>\n          <select class=\"form-control\" id=\"orgunitId\" >\n            <option value = \"\">Please select a facility</option>\n            <option *ngFor = \"let orgUnit of orgUnitLevel5Orgs\" name =\"orgUnit\"  ngModel >{{orgUnit.displayName}}</option>\n          </select>\n          <label   >Re-estimate Org Unit Level</label>\n          <select class=\"form-control\" id=\"orglevelId\">\n            <option value = \"\">Please select a Org Unit Level</option>\n            <option *ngFor = \"let level of organisationUnitLevels\" name = \"orgLevel\" NgModel>{{level.displayName}}</option>\n          </select>\n\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Date Range</div>\n            <label   >From </label> <input type=\"Date\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n            <label   >To</label> <input type=\"Date\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n          </div>\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Org-Unit Levels for</div>\n            <label   >Population Factors (Routine Data)</label> <input type=\"text\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n            <label   >Source Populations Statistics </label> <input type=\"text\" class=\"form-control\"  name= \"adkMaBHuDha\" ngModel required=\"required\"/>\n          </div>\n          <br/>\n          <input class=\"btn btn-primary\"  type=\"submit\" value=\"Calculate Estimations\">\n        </form>\n        <pre>{{population.value | json}}</pre>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/form-population-estimate/form-population-estimate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__ = __webpack_require__("../../../../../src/app/providers/orgUnit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__ = __webpack_require__("../../../../../src/app/providers/dataelement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__ = __webpack_require__("../../../../../src/app/providers/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopulationEstimateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormPopulationEstimateComponent = (function () {
    function FormPopulationEstimateComponent(orgUnitService, dataElementService, datasetService) {
        this.orgUnitService = orgUnitService;
        this.dataElementService = dataElementService;
        this.datasetService = datasetService;
        this.OrgUnitArea = "";
        this.OrgUnitLevel = "";
        this.DateRangeStart = "";
        this.DateRangeEnd = "";
        this.populationEstimateDataElements = [];
        this.organisationUnitLevels = [];
        this.datasets = [];
        this.orgUnitLevel5Orgs = [];
        this.dateElements = [];
    }
    FormPopulationEstimateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Boki Boki");
        var dataelementUrl = '../../../training/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';
        var dataSetsUrl = '../../../training/api/dataSets.json?paging=false&fields=id, name&filter=id:eq:L2hwAPHJyTd&paging=false';
        //const orgUnitLevelUrl = '../../training/api/organisationUnitLevels.json';
        var orgUnitLevel5Orgsurl = '../../../training/api/organisationUnits.json?paging=false&filter=level:eq:4';
        var orgUnitLevelUrl = '../../../training/api/organisationUnitLevels.json?paging=false';
        this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(function (result) { return console.log(result); }).catch(function (error) { return console.log(error); });
        this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(function (result) {
            _this.orgUnitLevel5Orgs = result.organisationUnits;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.dataElementService.getDataelementsService(dataelementUrl).then(function (result) {
            _this.dateElements = result.dataElements;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.datasetService.getDataSet(dataSetsUrl).then(function (result) {
            _this.datasets = result.dataSets;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
        this.orgUnitService.getOrgUnitsService(orgUnitLevelUrl).then(function (result) {
            _this.organisationUnitLevels = result.organisationUnitLevels;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
    };
    return FormPopulationEstimateComponent;
}());
FormPopulationEstimateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-form-population-estimate',
        template: __webpack_require__("../../../../../src/app/form-population-estimate/form-population-estimate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form-population-estimate/form-population-estimate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */]) === "function" && _c || Object])
], FormPopulationEstimateComponent);

var _a, _b, _c;
//# sourceMappingURL=form-population-estimate.component.js.map

/***/ }),

/***/ "../../../../../src/app/population-setup-form/population-setup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/population-setup-form/population-setup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Data Elements</div>\n    <div class=\"panel-body\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">Population Dataelements</div>\n\n\n\n        <div>\n          <table class=\"table\">\n            <tr>\n              <th>Dataelement</th>\n\n              <th>Population Factor</th>\n            </tr>\n            <tr *ngFor=\"let dataelement of dateElements;let i = index\">\n              <td>\n                {{dataelement.displayName }}\n              </td>\n\n              <td>  </td>\n            </tr> </table>\n        </div>\n\n    <!--    <ul class=\"list-group\">\n          <li *ngFor=\"let dataelement of dateElements\">\n            {{dataelement.displayName }}\n          </li>\n\n        </ul> -->\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/population-setup-form/population-setup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__ = __webpack_require__("../../../../../src/app/providers/orgUnit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__ = __webpack_require__("../../../../../src/app/providers/dataelement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__ = __webpack_require__("../../../../../src/app/providers/dataset.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationSetupFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopulationSetupFormComponent = (function () {
    function PopulationSetupFormComponent(orgunitservice, dataelemnetService, dataservice) {
        this.orgunitservice = orgunitservice;
        this.dataelemnetService = dataelemnetService;
        this.dataservice = dataservice;
        this.dateElements = [];
    }
    PopulationSetupFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dataelementUrl = '../../../training/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';
        this.dataelemnetService.getDataelementsService(dataelementUrl).then(function (result) {
            _this.dateElements = result.dataElements;
            console.log(result);
        }).catch(function (error) { return console.log(error); });
    };
    return PopulationSetupFormComponent;
}());
PopulationSetupFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-population-setup-form',
        template: __webpack_require__("../../../../../src/app/population-setup-form/population-setup-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/population-setup-form/population-setup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_orgUnit_service__["a" /* OrgUnitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dataelement_service__["a" /* DataElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_dataset_service__["a" /* DatasetService */]) === "function" && _c || Object])
], PopulationSetupFormComponent);

var _a, _b, _c;
//# sourceMappingURL=population-setup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/Option-sets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionSetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the DataSets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var OptionSetsService = (function () {
    function OptionSetsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
            'Authorization': 'Basic ' + btoa('Elmarie_Claasen_Sup:F@1ryfeet201707')
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    OptionSetsService.prototype.getOptionSetsService = function (url) {
        return this.http
            .get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    OptionSetsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    OptionSetsService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return OptionSetsService;
}());
OptionSetsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], OptionSetsService);

var _a;
//# sourceMappingURL=Option-sets.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/dataelement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataElementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataSets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DataElementService = (function () {
    function DataElementService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'Authorization': 'Basic ' + btoa('Elmarie_Claasen_Sup:F@1ryfeet201707') });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DataElementService.prototype.getDataelementsService = function (url) {
        return this.http
            .get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DataElementService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataElementService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DataElementService;
}());
DataElementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataElementService);

var _a;
//# sourceMappingURL=dataelement.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/dataset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataSets provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DatasetService = (function () {
    function DatasetService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'Authorization': 'Basic ' + btoa('Elmarie_Claasen_Sup:F@1ryfeet201707') });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DatasetService.prototype.getDataSet = function (url) {
        return this.http
            .get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DatasetService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DatasetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return DatasetService;
}());
DatasetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DatasetService);

var _a;
//# sourceMappingURL=dataset.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/orgUnit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrgUnitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Comfort Mawkga on 2017/09/20.
 */




/*
 Generated class for the DataSets provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var OrgUnitService = (function () {
    function OrgUnitService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'Authorization': 'Basic ' + btoa('Elmarie_Claasen_Sup:F@1ryfeet201707') });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    OrgUnitService.prototype.getOrgUnitsService = function (url) {
        return this.http
            .get(url, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    OrgUnitService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    OrgUnitService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return OrgUnitService;
}());
OrgUnitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], OrgUnitService);

var _a;
//# sourceMappingURL=orgUnit.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map