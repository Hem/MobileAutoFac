import { Component } from '@angular/core';
// import { TopNavComponent } from './common/nav/top-nav.component';
// import { LeftNavComponent } from './common/nav/left-nav.component';

@Component({
    selector: 'ipg-main-app',
    template: ` <div class='container'>
                    <ipg-top-nav></ipg-top-nav>
                    Welcome to my world3!
                    <ipg-left-nav></ipg-left-nav>
                </div> `
   //,  directives: [TopNavComponent, LeftNavComponent]
})
export class MainAppComponent {
}