import { Component } from "@angular/core";

@Component({
    selector: "chapter6",
    template: `
        <h3>[src] Example</h3>
        <img [src]="imageUrl"><br>
        <input type="button" value="Change" (click)="changeImage()">
    `,
    styles: [`
        host: {
            border: solid 1px black;
        }
        img {
            height: 100px;
            width: 100px;
        }
    `]
})
export class Chapter6 {
    imageUrl: string = "./images/badge0.png";
    badges: string[] = ["./images/badge0.png", "./images/badge1.png", "./images/badge2.png"];
    index: number = 0;

    changeImage() {
        this.index = this.index + 1;
        this.index = (this.index < 3)? this.index : this.index = 0;
        this.imageUrl = this.badges[this.index];
    }
}