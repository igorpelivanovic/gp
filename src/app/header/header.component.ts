import { Component, OnInit, Inject } from '@angular/core';
import { faBars, faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SetionIndicatorServService } from '../services/setion-indicator-serv.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _icons = {
    faBars: faBars,
    faAngleDown: faAngleDown,
    faXmark: faXmark
  }

  private _renderMobileMenu : boolean = false
  private _renderDropDown : boolean = false

  constructor(private sectionIndicatorServ : SetionIndicatorServService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  get activeSection(){
    return this.sectionIndicatorServ.activeSection
  }

  get icon(){
    return this._icons
  }

  get showMobileMenu(): boolean{
    return this._renderMobileMenu
  }

  set showMobileMenu(val: boolean){
    this._renderMobileMenu = val
  }

  mobileNavStyle(sectionName: string):string {
    if(sectionName == this.activeSection) return "text-color-primary-black hover-bg-color-primary-yellow bg-color-primary-yellow"
    return "text-color-primary-black hover-bg-color-primary-yellow"
  }

  desktopNavStyle(sectionName: string):string {
    if(sectionName == this.activeSection) return "text-color-primary-yellow hover-text-color-primary-yellow" 
    return "text-color-primary-white hover-text-color-primary-yellow"
  }

  isActiveSectionDesktopSection(sectionName: string): boolean{
    return this.showMobileMenu && this.activeSection == sectionName
  }

  activeMobileNav(): void{
    this.showMobileMenu = true
  }

  deActiveMobileNav(): void{
    this.showMobileMenu = false
  }
  toggleDropDown(): void{
    this._renderDropDown = !this._renderDropDown
  }
  get drowDownShow(): boolean{
    return this._renderDropDown
  }
  goToSection(sectionName: string): void{
    this.document.getElementById(sectionName)?.scrollIntoView()
    this._renderMobileMenu = false
  }

}
