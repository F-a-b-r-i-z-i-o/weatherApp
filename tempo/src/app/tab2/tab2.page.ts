import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';
import { Tab2Service } from './services/tab2.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  //guard
  isMapReady = false;
  //initialize map
  private Mappa: Mapboxgl.Map;

  //marker
  marker: any;
  marker2: any;

  //geojson to fitbound
  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          properties: {},
          coordinates: [
            //points geoJson city
            [4.74609375, 36.31512514748051],
            [19.5556640625, 36.31512514748051],
            [19.5556640625, 47.517200697839414],
            [4.74609375, 47.517200697839414],
            [4.74609375, 36.31512514748051],
          ],
        },
      },
    ],
  };

  //array list with city name, id, lat, lng
  cityList = [
    {
      name: 'Milano',
      id: '718345',
      lat: '9.2010498046875',
      lng: ' 45.4986468234261',
    },
    {
      name: 'Napoli',
      id: '719258',
      lat: '14.2437744140625',
      lng: '40.863679665481676',
    },
    {
      name: 'Roma',
      id: '721943',
      lat: '12.4859619140625',
      lng: '41.91045347666418',
    },
    {
      name: 'Torino',
      id: '725003',
      lat: '7.701416015625001',
      lng: '45.089035564831036',
    },
    {
      name: 'Venezia',
      id: '725746',
      lat: '12.3321533203125',
      lng: '45.44086267178177',
    },
  ];

  constructor(private route: Router, public tab2Service: Tab2Service) {
    this.tab2Service.getCurrentLocation();
  }

  //write map on the div with navigator
  buildMap() {
    this.isMapReady = false;
    console.log(this.tab2Service.lat);
    console.log(this.tab2Service.lng);
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.Mappa = new Mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      //add my position to center
      //android permission plug in
      center: [this.tab2Service.lng, this.tab2Service.lat], // starting position [lng, lat]
      zoom: 7, // starting zoom
      scrollZoom: false,
    });
    this.Mappa.on('load', () => {
      this.isMapReady = true;
      //this.Mappa.resize();
      this.Mappa.addControl(new Mapboxgl.NavigationControl());
      //recall function to fitboubd
      this.bound(this.geojson);
      //recall function to write maker
      this.markerNav(this.cityList);
    });
  }

  //function to write marker on the map
  markerNav(cityList) {
    const popup = new Mapboxgl.Popup({ offset: 10 }).setText('My Position');
    //for of to scroll the citylist
    for (const item of cityList) {
      let id = item.id;
      let name = item.name;
      //console.log(id);
      //console.log(name);
      this.marker = new Mapboxgl.Marker({
        color: '#000000',
        draggable: false,
      })
        .setLngLat([item.lat, item.lng])
        .addTo(this.Mappa)
        .getElement()
        //listener to make maker cliccable
        .addEventListener('click', () => {
          console.log('Clicked');
          //redicrect to page tempo with id and name
          this.route.navigate(['tabs/tab2/tempo'], { state: { id, name } });
        });
    }

    this.marker2 = new Mapboxgl.Marker({
      color: '#FF0000',
      draggable: false,
    })
      .setLngLat([this.tab2Service.lng, this.tab2Service.lat])
      .setPopup(popup)
      .addTo(this.Mappa);
    console.log(this.tab2Service.lng);
    console.log(this.tab2Service.lat);
  }

  //function to do fitbound on the geoJson
  bound(geojson) {
    const coordinates = geojson.features[0].geometry.coordinates;
    // Create a 'LngLatBounds' with both corners at the first coordinate.
    const bounds = new Mapboxgl.LngLatBounds(coordinates[0], coordinates[0]);

    // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
    for (const coord of coordinates) {
      bounds.extend(coord);
    }
    this.Mappa.fitBounds(bounds, {
      padding: 5,
    });
  }

  ngOnInit() {
    this.tab2Service.checkPermission();
    //call function after 2 second
    setTimeout(() => this.buildMap(), 2000);
  }
}

