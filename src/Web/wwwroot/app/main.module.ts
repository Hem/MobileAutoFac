import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { MainAppComponent } from './main.app.component';
import { NavModule } from './common/nav/nav.module';


@NgModule({
    imports: [BrowserModule, NavModule, CommonModule],
    declarations: [MainAppComponent],
    bootstrap: [MainAppComponent]
})
export class MainModule { }