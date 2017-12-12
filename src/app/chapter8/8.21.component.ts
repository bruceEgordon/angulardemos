import { Component } from '@angular/core';

@Component({
    selector: "chapter8",
    template: `
        Product:<br>
        <select name="product" [(ngModel)]="product">
            <option *ngFor="let item of products" [value]="item">{{item}}</option>
        </select>
    `
})
export class Chapter8 {
    products: string[] = ["Laptop", "Tablet", "Phone", "Watch", "Camera"];
}