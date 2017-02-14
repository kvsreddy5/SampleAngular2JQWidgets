/// <reference path="../../node_modules/jqwidgets-framework/jqwidgets-ts/jqwidgets.d.ts" />
import { NgModule, Directive, CUSTOM_ELEMENTS_SCHEMA, HostListener, Input  } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';

import { jqxDataAdapterComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdataadapter'
import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxWindowComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxwindow';



@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule],   
    declarations: [AppComponent, jqxDataAdapterComponent, jqxGridComponent, jqxButtonComponent, jqxWindowComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }