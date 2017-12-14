import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
    selector: "chapter8",
    template: `
        Product:<br>
        <select name="product" [(ngModel)]="product">
            <option *ngFor="let item of products" [value]="item">{{item}}</option>
        </select>
        <br>
        The selected product: {{product}}
    `
})
export class Chapter8 {
    products: string[] = ["Laptop", "Tablet", "Phone", "Watch", "Camera"];

}