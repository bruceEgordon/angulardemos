import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class PeopleService {
    people: Observable<Object[]>;
    constructor(http: Http) {
        this.people = http.get('./assets/data.json').
            map(response => response.json()).catch(this.onError);
    }
    onError(res: any){
        let msg = res.status + ":" + res.statusText;
        console.log("we have a problem");
        return Observable.throw(msg);
    }
}