import { Component } from '@angular/core';

@Component({
    selector: "chapter7",
    template: `
        <h3>ngIf Else Example</h3>
        <div *ngIf= "things.car; else noCar; let car">Nice {{car}}!.</div>
        <ng-template #noCar>Call an Uber..</ng-template>
    `
})
export class Chapter7 {
    things = {car: "Honda", shoes: "Nike", watch: "Timex"};
    
};