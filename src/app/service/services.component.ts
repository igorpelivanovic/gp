import { Component, OnInit } from '@angular/core';
import { faBasketball, faFileLines, faGaugeSimpleHigh, faEarthAmericas, faDesktop, faArchway } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  private _icons = {
    faBasketball: faBasketball,
    faFileLines: faFileLines,
    faGaugeSimpleHigh: faGaugeSimpleHigh,
    faEarthAmericas: faEarthAmericas,
    faDesktop: faDesktop,
    faArchway: faArchway
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
