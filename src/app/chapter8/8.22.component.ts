import { Component } from '@angular/core';

@Component({
    selector: "chapter8",
    template: `
        <div class="block">
            <h3>Date Form</h3>
            <form #f="ngForm" (ngSubmit)="onSubmit(f);">
                <input type="date" [(ngModel)]="dateStr" name="dateStr"><br>
                Date as String: {{dateStr}}<br>
                Date as Date: {{getDateType()}}
                <input id="submit" type="submit" value="Submit"><br>
            </form>
        </div>
    `
})
export class Chapter8 {
    dateStr: string = new Date().toISOString().split("T")[0];

    getDateType() {
        return new Date(this.dateStr + " 00:00.00");
    }

    onSubmit(form) {
        alert("Submitted: " + JSON.stringify(form.value, null, 2));
    }
}