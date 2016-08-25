import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component'; 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }


// Bootstrap module here!!!
// This way we can include the module on every page...
platformBrowserDynamic().bootstrapModule(HomeModule);