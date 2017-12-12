import { Component } from "@angular/core";
import { ArrayFilterPipe } from "./array.filter.pipe";

@Component({
    selector: "chapter13",
    providers: [ArrayFilterPipe],
    template: `
        <h3>Array Filter Pipe: Example</h3>
        <input type="text" [(ngModel)]="searchTerm">
        <h4>Cars</h4>
        <ul>
            <li *ngFor="let x of cars | arrayfilter: searchTerm">{{x}}</li>
        </ul><br>
        <h4>Pets</h4>
        <ul>
            <li *ngFor="let x of petsFiltered">{{x}}</li>
        </ul>
    `
})
export class Chapter13 {
    constructor(private filterPipe: ArrayFilterPipe) {}

    searchTerm: string = "";

    cars: string[] = ["BMW", "Chevy", "Honda", "Subaru", "Ford", "Porsche", "Mazda", "Hyundai"];

    pets: string[] = ["Cat", "Dog", "Hamster", "Rabbit", "Fish", "Bird", "Turtle"]

    petsFiltered: string[]= this.filterPipe.transform(this.pets, this.searchTerm);
}