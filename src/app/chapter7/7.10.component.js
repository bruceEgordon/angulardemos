"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chapter7 = (function () {
    function Chapter7() {
        this.types = ["one", "two", "three"];
        this.index = 0;
    }
    Chapter7.prototype.nextClick = function () {
        this.index += 1;
    };
    return Chapter7;
}());
Chapter7 = __decorate([
    core_1.Component({
        selector: "chapter7",
        template: "\n        <h3>ngSwitch Demo</h3>\n        <div [ngSwitch]=\"types[index]\" class=\"block\">\n            <p *ngSwitchCase=\"'one'\">Page-1</p>\n            <p *ngSwitchCase=\"'two'\">Page-2</p>\n            <p *ngSwitchCase=\"'three'\">Page-3</p>\n            <p *ngSwitchDefault>Default</p>\n        </div>\n        <input type=\"button\" (click)=\"nextClick()\" value=\"next\">\n        <a href=\"#\" (click)=\"this.index=0\">1</a>\n        <a href=\"#\" (click)=\"this.index=1\">2</a>\n        <a href=\"#\" (click)=\"this.index=2\">3</a>\n    "
    })
], Chapter7);
exports.Chapter7 = Chapter7;
//# sourceMappingURL=7.10.component.js.map