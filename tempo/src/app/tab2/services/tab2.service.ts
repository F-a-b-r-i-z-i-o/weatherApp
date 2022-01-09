import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

@Injectable({
  providedIn: 'root',
})
export class Tab2Service {
  lat;
  lng;

  constructor(
    private platform: Platform,
    private locationAccuracy: LocationAccuracy,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions
  ) {}

  getCurrentLocation() {
    return new Promise((resolve, rejects) => {
      if (this.platform.is('cordova')) {
        this.geolocation.getCurrentPosition().then((response) => {
          this.lat = response.coords.latitude;
          console.log(this.lat);
          this.lng = response.coords.longitude;
          console.log(this.lng);
        });
      } else {
        resolve({ coords: { latitude: 43.110717, longitude: 12.390828 } });
      }
    });
  }

  checkPermission() {
    this.androidPermissions
      .checkPermission(
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
      )
      .then(
        (result) => {
          if (result.hasPermission) {
            this.enableGPS();
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  enableGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          this.getCurrentLocation();
        },
        (error) => alert(JSON.stringify(error))
      );
  }
}
