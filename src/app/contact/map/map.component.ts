import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('map') private mapContainer !: ElementRef<HTMLElement>  

  @Input() lat !: number
  @Input() long !: number
  @Input() zoom : number = 10

  private map : Map | undefined
  private API_KEY : string = environment.MAP_API_KEY

  constructor(){

  }
  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${this.API_KEY}`,
      center: [this.long, this.lat],
      zoom: this.zoom
    })
    this.map.addControl(new NavigationControl(), 'bottom-right');
    new Marker({color: "#ffc451"}).setLngLat([this.long, this.lat]).addTo(this.map)
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.map?.remove()
  }

}
