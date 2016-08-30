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
var NavComponent = (function () {
    function NavComponent() {
        this.NavElementChange = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavComponent.prototype, "navElements", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "NavElementChange", void 0);
    NavComponent = __decorate([
        core_1.Component({
            selector: 'ipg-nav',
            template: "\n            <h4> IPG - Navigation Component View</h4>\n                <ng-content></ng-content>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
var NavElement = (function () {
    function NavElement(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    return NavElement;
}());
exports.NavElement = NavElement;
//# sourceMappingURL=nav.component.js.map