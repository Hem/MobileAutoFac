import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NavComponent } from './nav.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [NavComponent],
    bootstrap: [NavComponent]
})
export class NavModule { }


// Bootstrap module here!!!
// This way we can include the module on every page...
platformBrowserDynamic().bootstrapModule(NavModule);