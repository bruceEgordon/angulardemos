import { Component } from '@angular/core';

@Component({
    selector: "chapter8",
    template: `
        <div class="block">
            <h3>Radio Button Form</h3>
            <form #f="ngForm">
                <span class="label">Choice:</span><br>
                <input id="one" type="radio" name="choice" [(ngModel)]="choice" value="one">
                <label for="one">One</label><br>
                <input id="two" type="radio" name="choice" [(ngModel)]="choice" value="two">
                <label for="two">Two</label><br>
                <input id="three" type="radio" name="choice" [(ngModel)]="choice" value="three">
                <label for="three">Three</label><br>
                <input type="button" value="Submit" (click)="onSubmit(f)"><br>
            </form>Value: {{f.value.choice}}
        </div>
    `
})
export class Chapter8 {
    choice: string = "two";
    
    onSubmit(form) {
        alert(JSON.stringify(form.value, null, 2));
    }
}