import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewref-example',
  templateUrl: './viewref-example.component.html',
  styleUrls: ['./viewref-example.component.scss']
})
export class ViewrefExampleComponent implements OnInit {

@ViewChild('greetingTemplate') greetingTemplateRef: TemplateRef<any>;
  @ViewChild('title') titleRef: ElementRef<any>;




  constructor(
    private elementRef: ElementRef
  ) {
   console.log(this.elementRef);
   }
    ngOnInit(): void {
    }
}
