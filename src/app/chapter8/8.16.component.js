"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chapter8 = (function () {
    function Chapter8() {
        this.person = { name: "Cindy", email: "cindy@gmail.com" };
    }
    Chapter8.prototype.onSubmit = function (form) {
        console.log("person: " + JSON.stringify(this.person, null, 2));
        console.log("form.value: " + JSON.stringify(form.value, null, 2));
    };
    return Chapter8;
}());
Chapter8 = __decorate([
    core_1.Component({
        selector: "chapter8",
        templateUrl: "./app/chapter8/8.16.component.html",
        styleUrls: ["./app/chapter8/8.16.component.css"]
    })
], Chapter8);
exports.Chapter8 = Chapter8;
//# sourceMappingURL=8.16.component.js.map