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
        this.products = ["Laptop", "Tablet", "Phone", "Watch", "Camera"];
    }
    return Chapter8;
}());
Chapter8 = __decorate([
    core_1.Component({
        selector: "chapter8",
        template: "\n        Product:<br>\n        <select name=\"product\" [(ngModel)]=\"product\">\n            <option *ngFor=\"let item of products\" [value]=\"item\">{{item}}</option>\n        </select>\n    "
    })
], Chapter8);
exports.Chapter8 = Chapter8;
//# sourceMappingURL=8.21.component.js.map