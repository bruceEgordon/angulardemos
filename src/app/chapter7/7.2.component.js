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
        this.showMessage = true;
    }
    return Chapter7;
}());
Chapter7 = __decorate([
    core_1.Component({
        selector: "chapter7",
        template: "\n        <h3>ngIf Example</h3>\n        <div *ngIf=\"showMessage\">Message Text</div>\n        <input type=\"button\" (click)=\"this.showMessage=!this.showMessage;\" value=\"Toggle Message\">\n    "
    })
], Chapter7);
exports.Chapter7 = Chapter7;
;
//# sourceMappingURL=7.2.component.js.map