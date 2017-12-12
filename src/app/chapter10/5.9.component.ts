import { Component } from "@angular/core";

@Component({
    selector: "chapter5",
    template: `
        <h4>Set Styles</h4>
        <div [style.display]="inline-block" [style.width]="30" [style.height]="30" 
            [style.backgroundColor]="isRed?'red':'blue'"></div>
        <input type="checkbox" [(ngModel)]="isRed" />Is Red
        <h4>Disable Button</h4>
        <button id="btn1" [disabled]="isDisabled" (click)="text=text+'x'">Button</button>
        <br>{{text}}
        <input type="checkbox" [(ngModel)]="isDisabled">Is Disabled
        <h4>Set Property on Component</h4>
        <messagecmp [message]="localMessage"></messagecmp>
    `,
    styles: [`
        #div1 {
            width: 200px;
            height: 50px;
            border: 1px black solid;
        }
    `]
})
export class Chapter5 {
    text: string = "x";
    isDisabled: boolean = false;
    isRed: boolean = true;
    localMessage: string = "My Message Text";
}