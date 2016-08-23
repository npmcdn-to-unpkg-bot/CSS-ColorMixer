import { Component } from '@angular/core';

@
Component({
    selector: 'app',
    template: '<h2>My App Component</h2><h3>{{ test }}<h3>'
})
export class AppComponent {
    test = 'This is a test string';
}
