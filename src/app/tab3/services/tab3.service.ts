import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class Tab3Service {
  constructor(
    private httpNative: HTTP,
    public platform: Platform,
    private http: HttpClient
  ) {}

  getUsersForcast() {
    //promise
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        this.httpNative
          .get('https://jsonplaceholder.typicode.com/users', {}, {})
          .then((data) => {
            let formattedResponse = JSON.parse(data.data);
            resolve(formattedResponse);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
}