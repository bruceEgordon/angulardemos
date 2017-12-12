import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-comp',
  template: `
    <p>
      demo-comp Works!
    </p>
  `,
  styles: []
})
export class DemoCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
