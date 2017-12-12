import { Component } from '@angular/core';

@Component({
    selector: "chapter7",
    template: `
        <h3>ngIf Else Example</h3>
        <div *ngIf= "isLoggedIn; else login">The user is logged in.</div>
        <ng-template #login>Please login to continue.</ng-template>
        <input type="button" (click)="this.isLoggedIn=!this.isLoggedIn;" value="Toggle Message">
    `
})
export class Chapter7 {
    isLoggedIn: boolean = true;
};