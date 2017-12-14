import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/rx";

import "rxjs/add/operator/map";

@Injectable()
export class PeopleService {
    people: Observable<Object[]>;
    constructor(http: Http) {
        let headers : Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let requestOptions : RequestOptions = new RequestOptions({headers: headers});
        this.people = http.get('./assets/data.json', requestOptions).map(response => response.json());
    }
}