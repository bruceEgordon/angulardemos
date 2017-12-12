import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `<div>
        <h2>Please Log In</h2>
        <table>
            <tr><td>Name</td>
            <td><input type="text" [(ngModel)]="name">
            </td></tr>
            <tr><td>Password</td>
            <td><input type="password" [(ngModel)]="password">
            </td></tr>
        </table>
        <p>{{message}}</p>
        <button (click)="submit()">Submit</button>
        </div>`,
    styles: [`
        div, h2 {margin: 0px; padding: 5px;}
        div {background-color: lightgrey; display: inline-block;}
        button {margin: 0 auto; display: block;}
        `]
})
export class LoginComponent {
    name:string;
    password:string;
    message:string = "Please Enter Your Login Credentials!";
    submit() {
        this.message = this.name + " is now logged in!";
    }
}