import { Pipe } from "@angular/core";

@Pipe({ name: "charlength" })
export class CharacterLengthPipe {
    transform(value:string, length:number) {
        return value.substring(0, length);
    }
}