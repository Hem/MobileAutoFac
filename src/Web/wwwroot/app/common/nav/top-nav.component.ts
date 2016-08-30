import { Component } from '@angular/core';

import { NavElement } from './nav-element';


@Component({
    selector: 'ipg-top-nav',
    template: ` <div> 
                    <h3> {{ title }} </h3> 
                    {{ navRecords | json }}
                </div> `
})
export class TopNavComponent {
    public navRecords: NavElement[];
    public title: string = "Top Navigation Here!";

    constructor() {
        this.navRecords = [
            new NavElement(1, 'Home', 'Home'),
            new NavElement(2, 'Pets', 'Pets'),
        ];
    }

}

