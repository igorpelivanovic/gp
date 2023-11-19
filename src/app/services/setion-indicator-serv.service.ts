import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetionIndicatorServService {

  private _activeSection : string = "hero"

  constructor() { }

  set activeSection(idSection : string){
    this._activeSection = idSection
  }

  get activeSection(): string{
    return this._activeSection
  }

}
