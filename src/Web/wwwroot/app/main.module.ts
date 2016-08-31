import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { MainAppComponent } from './main.app.component';
import { IPG_ROUTE_PROVIDERS, MAIN_ROUTES} from './main.routing';


import { NavModule } from './common/nav/nav.module';

@NgModule({
    imports: [BrowserModule, NavModule, CommonModule, MAIN_ROUTES],
    declarations: [MainAppComponent],
    bootstrap: [MainAppComponent],
    providers: [IPG_ROUTE_PROVIDERS]
})
export class MainModule { }