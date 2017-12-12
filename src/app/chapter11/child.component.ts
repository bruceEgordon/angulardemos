import { Component, OnInit } from "@angular/core";
import { PetService } from "./pet.service";

@Component({
    selector: "child",
    template: `
        <div class="block">
            <h3>Child-Component Pets</h3>
            <ul>
                <li *ngFor="let pet of pet_data">{{pet}}</li>
            </ul>
        </div>
    `,
    providers: []
})
export class Child implements OnInit {
    pet_data: Object[];

    constructor(private petSrv: PetService) {}

    ngOnInit() {
        this.pet_data = this.petSrv.getPets();
        this.pet_data.push("Frog");
    }
}