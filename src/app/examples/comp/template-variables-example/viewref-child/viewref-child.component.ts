import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-viewref-child',
  templateUrl: './viewref-child.component.html',
  styleUrls: ['./viewref-child.component.scss']
})
export class ViewrefChildComponent implements OnInit {

  @Input() templateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
