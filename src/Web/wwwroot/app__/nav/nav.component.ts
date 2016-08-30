import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'ipg-nav',
    template: `
            <h4> IPG - Navigation Component View</h4>
                <ng-content></ng-content>
            `
})
export class NavComponent {

    @Input() navElements: NavElement[];
    @Output() NavElementChange = new EventEmitter();

}


export class NavElement {
    constructor(public id: any, public name: string, public link: any) { }
}