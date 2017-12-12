import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/rx';

@Injectable()
export class TestobsvService {

  constructor() { }

  getStream(){
    var obs = Observable.interval(500).take(5);
    return obs;
  }

}
