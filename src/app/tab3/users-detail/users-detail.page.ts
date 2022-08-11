import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.page.html',
  styleUrls: ['./users-detail.page.scss'],
})
export class UsersDetailPage implements OnInit {
  userPhoto:any;
  //List of user detail
  userListDetail:any;
  

  //Variables to extract id 
  myParm:any;
  pageId:any;

  userDetail = this.router.getCurrentNavigation().extras.state.item;

  nameUser:any;
 

  //Guard to div
  showUserInfo: boolean = false 
  showUserAddress: boolean = false;
  showUserCompany: boolean = false;




  constructor(private http: HttpClient, private route : ActivatedRoute, private router: Router) { }

  

  //Function to visualize 1 div 
  showInfo(){
    this.showUserAddress = false;
    this.showUserCompany = false;
    this.showUserInfo = !this.showUserInfo;
  }

  //Function to visualize 2 div 
  showAddress(){
    this.showUserAddress = !this.showUserAddress;
    this.showUserCompany = false;
    this.showUserInfo = false;
  }

  //Function to visualize 3 div 
  showCompany(){
    this.showUserAddress = false;
    this.showUserCompany = !this.showUserCompany;
    this.showUserInfo = false;
    }

  //redirect user to home by the button
  navigate(){
    this.router.navigate(['tabs/tab3']);
  }

  ngOnInit() {
  }

}