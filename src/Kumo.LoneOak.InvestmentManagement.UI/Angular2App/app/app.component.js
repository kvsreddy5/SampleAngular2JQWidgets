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
var angular_jqxgrid_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxgrid');
var angular_jqxbuttons_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons');
var angular_jqxwindow_1 = require('jqwidgets-framework/jqwidgets-ts/angular_jqxwindow');
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Angular Jqx";
        this.source = {
            datatype: "json",
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            id: 'id',
            localdata: '[{ "id": "1","name": "Hot Chocolate", "type": "Chocolate Beverage", "calories": "370", "totalfat": "16g", "protein": "14g" },' +
                '{"id": 2,"name": "Peppermint Hot Chocolate","type": "Chocolate Beverage","calories": "440","totalfat": "16g","protein": "13g"},' +
                '{"id": "3","name": "Salted Caramel Hot Chocolate","type": "Chocolate Beverage","calories": "450","totalfat": "16g","protein": "13g"}]',
        };
        this.dataAdapter = new $.jqx.dataAdapter(this.source);
        this.cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            if (value < 20) {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
            }
            else {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
            }
        };
        this.settings = {
            width: 850,
            source: this.dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
            selectionmode: 'multiplecellsadvanced',
            columns: [
                { text: 'Name', datafield: 'name', width: 250 },
                { text: 'Beverage Type', datafield: 'type', width: 250 },
                { text: 'Calories', datafield: 'calories', width: 180 },
                { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                { text: 'Protein', datafield: 'protein', minwidth: 120 }
            ]
        };
        this.windowSettings = {
            height: 300,
            width: 500,
            maxHeight: 400,
            maxWidth: 700,
            minHeight: 200,
            minWidth: 200,
            position: { x: 300, y: 100 },
            showCollapseButton: true,
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.myGrid.createComponent(this.settings);
        this.showWindowButton.createComponent({ width: '70px' });
        this.hideWindowButton.createComponent({ width: '70px' });
        this.window.createComponent(this.windowSettings);
    };
    AppComponent.prototype.onShowButton = function () {
        this.window.open();
    };
    AppComponent.prototype.onHideButton = function () {
        this.window.close();
    };
    __decorate([
        core_1.ViewChild('gridReference'), 
        __metadata('design:type', angular_jqxgrid_1.jqxGridComponent)
    ], AppComponent.prototype, "myGrid", void 0);
    __decorate([
        core_1.ViewChild('windowReference'), 
        __metadata('design:type', angular_jqxwindow_1.jqxWindowComponent)
    ], AppComponent.prototype, "window", void 0);
    __decorate([
        core_1.ViewChild('showWindowButton'), 
        __metadata('design:type', angular_jqxbuttons_1.jqxButtonComponent)
    ], AppComponent.prototype, "showWindowButton", void 0);
    __decorate([
        core_1.ViewChild('hideWindowButton'), 
        __metadata('design:type', angular_jqxbuttons_1.jqxButtonComponent)
    ], AppComponent.prototype, "hideWindowButton", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'fms-app',
            templateUrl: './app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map