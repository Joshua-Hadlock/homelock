import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { HousesService } from '../services/houses.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  animations: [
    trigger('popOut', [
      state('void', style({ width: '0px', height: '89px'})),
      transition('* => void', [
        animate(1000)
      ])
    ])
  ]
})
export class Tab2Page {
  
    map: any | undefined;
    style = 'mapbox://styles/mapbox/streets-v11';
    
    lat = 40.4;
    lng = -111.8;
    postalcode: number = 84003;
    data: any;
    markerData: any = [];
    showMap = false;
    invalidPostalCode = false;


    constructor (private house: HousesService) {}

    ngOnInit() {

    }


    generateMap() {
      this.house.searchByLocation(this.postalcode).subscribe(res => {
        (mapboxgl as any).accessToken = environment.mapbox.accessToken;
        this.data = res;
        console.log(this.data)
        if (this.data === 'E') {
          this.invalidPostalCode = true;

        } else if (this.showMap === true) {
          //leave this blank so people don't double click the button
        }else {

        this.lat = this.data.property[0].location.latitude;
        this.lng = this.data.property[0].location.longitude;
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: 13,
          center: [this.lng, this.lat]
        })

        this.map.on('load', () => {
          this.map.resize();
      });

      this.data.property.forEach((house: any) => {
        if (house.location.longitude && house.location.latitude) {
          this.markerData.push({
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [house.location.longitude, house.location.latitude]
          },
        properties: {
          title: 'random house',
          description: '',
          id: house.identifier.Id
        }  
      })
        }
        
      })

      const geojson = {
        type: 'FeatureCollection',
        features: this.markerData
    }
    
    for (const feature of geojson.features) {
        const el = document.createElement('div');
        el.className = 'marker';
        el.addEventListener('click', () => {
            this.map.flyTo({
                center: feature.geometry.coordinates,
                zoom: 11,
                duration: 2000,
                curve: 1,
            })
        })
        new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(this.map);
        new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<ion-item href="/tabs/browse/details/${feature.properties.id}">${feature.properties.title}</h3><p>${feature.properties.description}</p></ion-item>`
          )
      )
      .addTo(this.map);
    
    }
    this.showMap = true;
  }
      });
      
      
    }
    
}


