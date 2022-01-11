import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ViewrefExampleComponent} from "./comp/template-variables-example/viewref-example/viewref-example.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild( ViewrefExampleComponent) viewref: ViewrefExampleComponent;

  title = 'itprofit';

  constructor() {
    console.log()
  }

  ngAfterViewInit() {
    console.log (this.viewref);
  }

}


