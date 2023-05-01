import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { HousesService } from '../services/houses.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    map: any | undefined;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 37.75;
    lng = -122.41;
    data: any;
    markerData: any = [];


    constructor (private house: HousesService) {}

    ngOnInit() {
        this.generateMap();
    }


    generateMap() {
      this.house.searchByLocation(this.lng, this.lat).subscribe(res => {
        (mapboxgl as any).accessToken = environment.mapbox.accessToken;
        this.data = res;
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
        this.markerData.push({
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [house.location.longitude, house.location.latitude]
          },
        properties: {
          title: 'random house',
          description: 'This is your very special data :)'
        }  
      })
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
            `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
          )
      )
      .addTo(this.map);
    
    }
      
      });

    }
}
