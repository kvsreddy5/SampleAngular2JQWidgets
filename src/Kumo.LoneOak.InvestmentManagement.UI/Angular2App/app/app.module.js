"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var angular_jqxdataadapter_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxdataadapter');
var angular_jqxgrid_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxgrid');
var angular_jqxbuttons_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons');
var angular_jqxwindow_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxwindow');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, router_1.RouterModule],
            declarations: [app_component_1.AppComponent, angular_jqxdataadapter_1.jqxDataAdapterComponent, angular_jqxgrid_1.jqxGridComponent, angular_jqxbuttons_1.jqxButtonComponent, angular_jqxwindow_1.jqxWindowComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map