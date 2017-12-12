import { Component } from '@angular/core';

@Component({
    selector: 'starter',
    template: `<p>{{message}}</p>`,
    styles: [`p{color:blue}`]
})
export class StarterComponent {
    message: string = "Hello Component Starter!";
}