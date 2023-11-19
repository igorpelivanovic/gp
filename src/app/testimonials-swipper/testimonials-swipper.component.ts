import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider";

@Component({
  selector: 'app-testimonials-swipper',
  templateUrl: './testimonials-swipper.component.html',
  styleUrls: ['./testimonials-swipper.component.scss']
})
export class TestimonialsSwipperComponent implements AfterViewInit, OnDestroy {

  protected slider !: KeenSliderInstance
  protected dots : Number[] = []
  protected currentSlide : number = 1

  @ViewChild("slidersContainer") sliderContainer !: ElementRef<HTMLElement>

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.slider = new KeenSlider(this.sliderContainer.nativeElement, {
        loop: true,
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      },
      [
        (slider) => {
          let timeout : any
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 5000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ])
      this.dots = [...Array(this.slider.track.details.slides.length).keys()]
    })
  }

  ngOnDestroy(): void {
    if(this.slider) this.slider.destroy()
  }
}
