import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrolled]'
})
export class ScrolledDirective {

  private _rootElement !: HTMLElement

  @Input() classList : string[] = []
  @Input() scrollY : number = 0

  constructor(private el : ElementRef) {
    this._rootElement = el.nativeElement
  }

  @HostListener('window:scroll', ['$event.target']) onScroll(target: Document): void{
    let scrollY : number = Number(target.defaultView?.scrollY) || 0
    if(scrollY > this.scrollY){
      this._rootElement.classList.add(...this.classList)
      return
    }
    this._rootElement.classList.remove(...this.classList)
  }

}
