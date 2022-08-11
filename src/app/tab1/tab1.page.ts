import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit{
//static list of city name with woeid 
  cityList = [
    { name: 'Milano', id: '718345' },
    { name: 'Napoli', id: '719258' },
    { name: 'Roma', id: '721943' },
    { name: 'Torino', id: '725003' },
    { name: 'Venezia', id: '725746' },
  ];
  constructor (private route: Router){}
 //redirect to page tempo with id and name city
  getCity(id, name){
    this.route.navigate(['tabs/tab1/tempo'], {state: {id, name}});
  }

  ngOnInit() {
    console.log('Getting City');
  }
}