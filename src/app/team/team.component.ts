import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  private _icons = {
    faTwitter: faTwitter,
    faFacebook: faFacebook,
    faInstagram: faInstagram,
    faLinkedin: faLinkedin
  }

  constructor() { }

  ngOnInit(): void {
  }

  get icon(){
    return this._icons
  }

}
