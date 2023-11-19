import { Component, OnInit } from '@angular/core';
import { faLocationDot, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private _icons = {
    faLocationDot: faLocationDot,
    faEnvelope: faEnvelope,
    faMobileScreenButton: faMobileScreenButton
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
