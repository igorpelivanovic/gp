import { Component, OnInit } from '@angular/core';
import { faStore, faChartSimple, faCalendarDays, faPaintRoller, faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  private _icons = {
    faStore: faStore,
    faChartSimple: faChartSimple,
    faCalendarDays: faCalendarDays,
    faPaintRoller: faPaintRoller,
    faCoins: faCoins
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
