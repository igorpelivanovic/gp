import { Component, OnInit } from '@angular/core';
import { faFaceSmile, faReceipt, faClock, faAward} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {

  private _icons = {
    faFaceSmile: faFaceSmile,
    faReceipt: faReceipt,
    faClock: faClock,
    faAward: faAward
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
