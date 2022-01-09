import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tab3Service } from './services/tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  //List of user (Json reponse data)
  usersList: any;
  //Alert of error
  error: any;
  //List of user detail
  usersDetail: any;
  //Guard
  Load = false;

  constructor(private route: Router, private tab3Service: Tab3Service) {}

  getUsers() {
    //Get request to the API
    this.tab3Service.getUsersForcast().then(
      (data: any) => {
        this.Load = true;
        //Controll if data is load
        console.log(data);
        if (data) {
          this.usersList = data;
          console.log(this.usersList);
          //console.log(this.usersList[0].address.city);

          for (let [index, user] of this.usersList.entries()) {
            user.avatar = 'https://picsum.photos/200/300?random=' + index;
          }
        }
      },
      (error) => {
        //guard
        this.Load = true;
        //error to load page
        this.error = error.message;
        console.log(this.error);
      }
    );
  }

  buttonClick(item) {
    console.log(item);
    this.route.navigate(['users-detail'], { state: { item } });
  }

  ngOnInit() {
    //execute function
    console.log('USEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
    this.getUsers();
  }
}