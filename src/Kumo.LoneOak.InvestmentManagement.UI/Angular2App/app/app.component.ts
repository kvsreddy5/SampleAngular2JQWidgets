/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
import { Component, OnInit ,ViewChild, AfterViewInit, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxWindowComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxwindow';

@Component({
    selector: 'fms-app',
    templateUrl: './app.component.html'
    })
export class AppComponent implements AfterViewInit {
    name: any = "Angular Jqx";
    @ViewChild('gridReference') myGrid: jqxGridComponent;


    @ViewChild('windowReference') window: jqxWindowComponent;
    @ViewChild('showWindowButton') showWindowButton: jqxButtonComponent;
    @ViewChild('hideWindowButton') hideWindowButton: jqxButtonComponent;

    ngAfterViewInit(): void {
        this.myGrid.createComponent(this.settings);

        this.showWindowButton.createComponent({ width: '70px' });
        this.hideWindowButton.createComponent({ width: '70px' });
        this.window.createComponent(this.windowSettings);
    }    

    source: any =
    {
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
   
    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    cellsrenderer: any = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    }; 

    settings: jqwidgets.GridOptions = {
        width: 850,
        source: this.dataAdapter,
        pageable: true,
        autoheight: true,
        sortable: true,
        altrows: true,
        enabletooltips: true,
        editable: true,
        selectionmode: 'multiplecellsadvanced',
        columns:
        [
            { text: 'Name', datafield: 'name', width: 250 },
            { text: 'Beverage Type', datafield: 'type', width: 250 },
            { text: 'Calories', datafield: 'calories', width: 180 },
            { text: 'Total Fat', datafield: 'totalfat', width: 120 },
            { text: 'Protein', datafield: 'protein', minwidth: 120 }
        ] 
    }; 

    windowSettings: jqwidgets.WindowOptions =
    {
        height: 300,
        width: 500,
        maxHeight: 400,
        maxWidth: 700,
        minHeight: 200,
        minWidth: 200,
        position: { x: 300, y: 100 },
        showCollapseButton: true,
    }

    onShowButton(): void {
        this.window.open();
    }

    onHideButton(): void {
        this.window.close();
    }
}

