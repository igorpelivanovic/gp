import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCounterLoader]'
})
export class CounterLoaderDirective implements OnInit {

  @Input() defValue !: number
  @Input() endValue !: number
  @Input() loadDuration !: number

  private _el !: HTMLElement
  private _setInterval !: any
  private _observer !: IntersectionObserver

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this._el = el.nativeElement
  }
  ngOnInit(): void {
    this.renderer.setProperty(this._el, 'innerText', this.defValue)
    this.createObserver()
  }
  private createObserver():void{
    this._observer = new IntersectionObserver((entires)=>{
      entires.forEach(entry=>{
        if(entry.isIntersecting){
          this.initInterval()
          this._observer.disconnect()
        }
      })
    })
    this._observer.observe(this._el)
  }
  private initInterval():void{
    this._setInterval = setInterval(()=>{
      this.renderer.setProperty(this._el, 'innerText', this.defValue)
      this.defValue++
      if(this.defValue == this.endValue){
        clearInterval(this._setInterval)
      }
    }, this.loadDuration / (this.endValue - this.defValue))
  }



}
