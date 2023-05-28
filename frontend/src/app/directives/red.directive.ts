import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.syle.color = "#e35e6b"
  }

}
