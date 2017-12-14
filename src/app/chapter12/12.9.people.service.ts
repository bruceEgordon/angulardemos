import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/rx";
import "rxjs/add/operator/catch";  //had to add this to the 5.x version of Angular to avoid browser error

@Injectable()
export class PeopleService {
    people: Observable<Response>;
    constructor(http: Http) {
        this.people = http.get('./assets/data.json').catch(this.onError);
    }
    onError(res: any){
        let msg = res.status + ":" + res.statusText;
        console.log("we have a problem");
        return Observable.throw(msg);
    }
}