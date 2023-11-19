import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  private _elementRoot !: HTMLElement

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this._elementRoot = el.nativeElement
  }

  @HostListener("click") onClick(){
    this.document.defaultView?.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


}
