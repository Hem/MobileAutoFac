import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftNavComponent } from './left-nav.component';
import { TopNavComponent } from './top-nav.component';
import { NavElement } from './nav-element';


@NgModule({
    imports: [CommonModule],
    declarations: [LeftNavComponent, TopNavComponent],
    exports: [LeftNavComponent, TopNavComponent]
})
export class NavModule { }