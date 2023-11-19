import { Component, OnInit } from '@angular/core';
import { faNewspaper, faImages, faShieldHalved, faCube  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  private _icons = {
    faNewspaper: faNewspaper,
    faImages: faImages,
    faShieldHalved: faShieldHalved,
    faCube: faCube
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
