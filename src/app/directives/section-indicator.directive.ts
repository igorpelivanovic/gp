import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { SetionIndicatorServService } from '../services/setion-indicator-serv.service';

@Directive({
  selector: '[appSectionIndicator]'
})
export class SectionIndicatorDirective {

  private _domElement !: HTMLElement

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document : Document, private sectionIndicatorServ : SetionIndicatorServService) { 
    this._domElement = el.nativeElement
  }

  @HostListener("document: scroll") 
  onScroll(){
    let scrollY : number = Number(this.document.defaultView?.scrollY) + 100
    if( scrollY >= this._domElement.offsetTop && scrollY <= this._domElement.offsetTop + this._domElement.offsetHeight){
      this.sectionIndicatorServ.activeSection = this._domElement.id
    }
  }

}
