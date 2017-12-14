import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/rx";

import "rxjs/add/operator/map";

@Injectable()
export class PeopleService {
    peopleOptions: Observable<Object[]>;
    constructor(private http: Http) {
        this.doPost();
    }

    doPost(){
        var data = {id:25, name:"Steve"};
        var body = JSON.stringify(data);
        let headers : Headers = new Headers();
        headers.append("Content-Type", "application/json");
        let requestOptions : RequestOptions = new RequestOptions({headers: headers});
        //Angular cannot write to the local file system so the following will not actually work.
        this.peopleOptions = this.http.post('./assets/data.json', body, requestOptions).map(response => response.json());
    }
}