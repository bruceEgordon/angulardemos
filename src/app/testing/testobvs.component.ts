import { Component, OnInit } from '@angular/core';
import {TestobsvService} from './testobsv.service';

@Component({
  selector: 'app-testobvs',
  template: `
    <p>
      testobvs Works!
    </p>
    <input type="button" value="subscribe" (click)="getNumbers();">
  `,
  styles: [],
  providers: [TestobsvService]
})
export class TestobvsComponent implements OnInit {

  constructor(private svc: TestobsvService) { }

  ngOnInit() {
  }

  getNumbers(){
    var obsv = this.svc.getStream();
    obsv.subscribe(value => console.log("observer received " + value));
  }

}
