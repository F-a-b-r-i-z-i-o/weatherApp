import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab1Service } from '../services/tab1.service';

@Component({
  selector: 'app-tempo',
  templateUrl: './tempo.page.html',
  styleUrls: ['./tempo.page.scss'],
})
export class TempoPage implements OnInit {
  //list for visualize JSON
  listWeather: any;

  //error definition
  error: any;
  //guard
  Load = false;

  //id and name pass by tab1page
  id = this.router.getCurrentNavigation().extras.state.id;
  name = this.router.getCurrentNavigation().extras.state.name;

  constructor(
    private router: Router,
    private route: Router,
    private tab1Service: Tab1Service
  ) {}
  //get request in the api with woeid
  getData() {
    this.tab1Service
      .getForcastDetail(this.id)
      .then((data: any) => {
        if (data) {
          this.Load = true;
          console.log(data);
          this.listWeather = data.consolidated_weather;
          console.log(this.listWeather);
          console.log(this.id);
          console.log(this.name);
        }
      })
      .catch((error) => {
        this.Load = true;
        //error to load page
        this.error = error.message;
        console.log(this.error);
      });
  }

  goHome() {
    //redirect home
    let previousPage = this.route.url.substring(
      0,
      this.route.url.lastIndexOf('/')
    );
    this.route.navigate([previousPage]);
  }

  ngOnInit() {
    //execute function
    console.log('WEATHERRRRRRRRRRRRRRRRRRRRRRR');
    this.getData();
    console.log(this.route.url);
  }
}