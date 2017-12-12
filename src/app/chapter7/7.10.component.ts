import { Component } from '@angular/core';

@Component({
    selector: "chapter7",
    template: `
        <h3>ngSwitch Demo</h3>
        <div [ngSwitch]="types[index]" class="block">
            <p *ngSwitchCase="'one'">Page-1</p>
            <p *ngSwitchCase="'two'">Page-2</p>
            <p *ngSwitchCase="'three'">Page-3</p>
            <p *ngSwitchDefault>Default</p>
        </div>
        <input type="button" (click)="nextClick()" value="next">
        <a href="#" (click)="this.index=0">1</a>
        <a href="#" (click)="this.index=1">2</a>
        <a href="#" (click)="this.index=2">3</a>
    `
})
export class Chapter7 {
    types: string[] = ["one", "two", "three"];
    index: number = 0;
    
    public nextClick(){
        this.index += 1;
    }
}