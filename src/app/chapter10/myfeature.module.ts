import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Chapter5 } from "./5.9.component";
import { MessageComponent } from "./5.10.message.component";

@NgModule({
    imports: [FormsModule],
    declarations: [Chapter5, MessageComponent],
    exports: [Chapter5, MessageComponent]
})
export class MyFeatureModule {}