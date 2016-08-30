import { NgModule, Component } from '@angular/core';
import { COMMON_DIRECTIVES, COMMON_PIPES } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomeComponent } from './home/home.component'; 
import { NavComponent } from './nav/nav.component';


@Component({
    selector: 'ipg-app',
    
    template: `
                <div>
                    <ipg-home></ipg-home>
                    <ipg-nav>Nav Content:</ipg-nav>
                </div>
            `,

    directives: [HomeComponent, NavComponent]
})
export class IpgAppComponent { }

@NgModule({
    imports: [BrowserModule],
    declarations: [IpgAppComponent],
    bootstrap: [IpgAppComponent]
})
export class MainModule { }

// Bootstrap module here!!!
// This way we can include the module on every page...
platformBrowserDynamic().bootstrapModule(MainModule);