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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var home_component_1 = require('./home/home.component');
var nav_component_1 = require('./nav/nav.component');
var IpgAppComponent = (function () {
    function IpgAppComponent() {
    }
    IpgAppComponent = __decorate([
        core_1.Component({
            selector: 'ipg-app',
            template: "\n                <div>\n                    <ipg-nav></ipg-nav>\n\n                    <ipg-home></ipg-home>\n                    \n                </div>\n            ",
            directives: [home_component_1.HomeComponent, nav_component_1.NavComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IpgAppComponent);
    return IpgAppComponent;
}());
exports.IpgAppComponent = IpgAppComponent;
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [IpgAppComponent],
            bootstrap: [IpgAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;
// Bootstrap module here!!!
// This way we can include the module on every page...
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(MainModule);
//# sourceMappingURL=main.module.js.map