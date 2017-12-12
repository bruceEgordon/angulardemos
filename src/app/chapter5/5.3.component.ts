import { Component } from "@angular/core";

@Component({
    selector: 'chapter5',
    template: `
        <h4>String Value</h4>
        <p>Thre are {{days}} {{unit}} in a year!</p>

        <h4>Date Value</h4>
        <p>{{today | date:'MM/dd/yyyy'}}</p>

        <h4>Paragraph Text</h4>
        <p>{{text}}</p>
    `
})
export class Chapter5 {
    text: string = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
         purus lectus malesuada libero, sit amet commodo magna eros quis urna.`;

    days: number = 365;
    unit: string = "days";
    today: Date = new Date();

}