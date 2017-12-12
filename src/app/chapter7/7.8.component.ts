import { Component } from '@angular/core';

@Component({
    selector: 'chapter7',
    template: `
        <div class=block>
            <h3>Pets - add remove</h3>
            <ul>
                <li *ngFor="let pet of pets; let i = index">
                    <input type="button" (click)="pets.splice(i,1)" value="del" >
                    {{pet}}
                </li>
            </ul>
            <input type="text" size="10" [(ngModel)]="petToAdd">
            <input type="button" (click)="pets.push(petToAdd);" value="Add" >
        </div>
        `
})
export class Chapter7 {
    pets: string[] = ["Cat", "Dog", "Hamster", "Rabbit"];
}