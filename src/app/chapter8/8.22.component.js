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
        this.dateStr = new Date().toISOString().split("T")[0];
    }
    Chapter8.prototype.getDateType = function () {
        return new Date(this.dateStr + " 00:00.00");
    };
    Chapter8.prototype.onSubmit = function (form) {
        alert("Submitted: " + JSON.stringify(form.value, null, 2));
    };
    return Chapter8;
}());
Chapter8 = __decorate([
    core_1.Component({
        selector: "chapter8",
        template: "\n        <div class=\"block\">\n            <h3>Date Form</h3>\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f);\">\n                <input type=\"date\" [(ngModel)]=\"dateStr\" name=\"dateStr\"><br>\n                Date as String: {{dateStr}}<br>\n                Date as Date: {{getDateType()}}\n                <input id=\"submit\" type=\"submit\" value=\"Submit\"><br>\n            </form>\n        </div>\n    "
    })
], Chapter8);
exports.Chapter8 = Chapter8;
//# sourceMappingURL=8.22.component.js.map