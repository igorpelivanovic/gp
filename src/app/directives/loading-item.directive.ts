import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoadingItem]'
})
export class LoadingItemDirective implements OnInit {

  private __observer !: IntersectionObserver 
  private __element !: HTMLElement


  @Input() rootMargin : number = 0
  @Input() threshold : number = 0

  @Input() animationsClass : string[] = [] 

  constructor(private el : ElementRef) {
    this.__element = el.nativeElement
   }

  ngOnInit(): void {
    this.createObserver()
  }

  private createObserver(): void{
    this.__observer = new IntersectionObserver(enteries=>{
      enteries.forEach(entry =>{
        if(entry.isIntersecting){
          this.__element.classList.add(...this.animationsClass)
          this.__observer.disconnect()
        }
      })
    }, {rootMargin: this.rootMargin+"px", threshold: this.threshold})
    this.__observer.observe(this.__element)
  }

}
