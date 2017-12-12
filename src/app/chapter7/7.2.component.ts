import { Component } from '@angular/core';

@Component({
    selector: "chapter7",
    template: `
        <h3>ngIf Example</h3>
        <div *ngIf="showMessage">Message Text</div>
        <input type="button" (click)="this.showMessage=!this.showMessage;" value="Toggle Message">
    `
})
export class Chapter7 {
    showMessage: boolean = true;
};