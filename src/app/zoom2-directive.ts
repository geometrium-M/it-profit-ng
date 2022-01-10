import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[Zoom2]'
})
export class Zoom2Directive {
  @Input('Zoom2') size: number

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseIn() {
    this.setFontSize(this.size)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setFontSize(14)
  }

  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}px`
  }
}
