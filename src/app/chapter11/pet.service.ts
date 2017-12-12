import { Injectable } from "@angular/core";

@Injectable()
export class PetService {
    public getPets():Object[] {
        return ["Cat", "Dog", "Hamster", "Rabbit", "Fish", "Bird", "Turtle"]
    }
}