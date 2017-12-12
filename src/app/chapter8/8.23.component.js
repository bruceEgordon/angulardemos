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
        this.choice = "two";
    }
    Chapter8.prototype.onSubmit = function (form) {
        alert(JSON.stringify(form.value, null, 2));
    };
    return Chapter8;
}());
Chapter8 = __decorate([
    core_1.Component({
        selector: "chapter8",
        template: "\n        <div class=\"block\">\n            <h3>Radio Button Form</h3>\n            <form #f=\"ngForm\">\n                <span class=\"label\">Choice:</span><br>\n                <input id=\"one\" type=\"radio\" name=\"choice\" [(ngModel)]=\"choice\" value=\"one\">\n                <label for=\"one\">One</label><br>\n                <input id=\"two\" type=\"radio\" name=\"choice\" [(ngModel)]=\"choice\" value=\"two\">\n                <label for=\"two\">Two</label><br>\n                <input id=\"three\" type=\"radio\" name=\"choice\" [(ngModel)]=\"choice\" value=\"three\">\n                <label for=\"three\">Three</label><br>\n                <input type=\"button\" value=\"Submit\" (click)=\"onSubmit(f)\"><br>\n            </form>Value: {{f.value.choice}}\n        </div>\n    "
    })
], Chapter8);
exports.Chapter8 = Chapter8;
//# sourceMappingURL=8.23.component.js.map