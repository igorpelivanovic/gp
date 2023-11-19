import { Component, HostListener, OnInit } from '@angular/core';
import { faTwitter, faFacebookF, faInstagram, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { opacityInOut } from '../animations/opacityInOut';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    opacityInOut
  ]
})
export class FooterComponent implements OnInit {

  private _renderUpBtn : boolean = false

  private _icons = {
    faTwitter: faTwitter,
    faFacebookF: faFacebookF,
    faInstagram: faInstagram,
    faSkype: faSkype,
    faLinkedinIn: faLinkedinIn,
    faArrowUp: faArrowUp
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

  get showUpBtn(): boolean{
    return this._renderUpBtn
  }

  @HostListener('window:scroll', ['$event.target']) onScroll(target: Document){
    let scrollY = target.defaultView?.scrollY || 0
    if(scrollY > 100) this._renderUpBtn = true
    else this._renderUpBtn = false
  }

}
function transiton(): import("@angular/animations").AnimationMetadata {
  throw new Error('Function not implemented.');
}

