# WeatherApp :cloud_with_snow:
This project is developed using **angular 12** and **ionic 5.9.2**.
To develop the project it is necessary to install nodejs, the installation of node is different in each operating system (see installation documentation).
After doing this you need to install angular.


`npm install -g @angular/cli`

after installing angular it is necessary to install ionic.

` npm install -g @ionic/cli`

After installing ionic I generated the project only with Cordova as Capacitor gives me some problems.

`ionic start tempo tabs --type=angular --cordova`


Within the tabs I have generated folders as you can see from the project.

`ionic g page /folder/nameFolder`

In this project a weather app with different sections is developed. 

**The first**   :cityscape:

Represents the home with the various cities of which it is possible to see the forecasts. 
After clicking on one of the visible cities, you can see the relative weather.

![home](https://user-images.githubusercontent.com/44865237/149035200-c3b612c8-bf77-4118-9a10-b90aea29d02a.png)
-


![tempo](https://user-images.githubusercontent.com/44865237/149035956-c20fb2fa-7223-4373-a436-e393433222fc.png)

**The second 	:parking:** 

In that a map is displayed. In the map you can see my position with the relative marker in addition it is possible to return to the time page by clicking on one of the relative markers positioned on the map to see the weather of the selected city

![mapMY](https://user-images.githubusercontent.com/44865237/149036082-5fdf126d-863a-4aaf-a550-25c0167c95d5.png)


**The third :sunglasses:**

In the third tab you can first see the users who have downloaded the app, after clicking them you can see their information in detail.

![user](https://user-images.githubusercontent.com/44865237/149036502-b573cdd6-4922-4eaf-b065-747374f928dc.png)

![user-detail](https://user-images.githubusercontent.com/44865237/149036570-f8c16f7c-387a-42b3-99b5-a4b903c4be72.png)

![user-detail2](https://user-images.githubusercontent.com/44865237/149036643-85a4625d-11b0-4b17-a37b-3745b4c23582.png)

If the loading of any page is slow or some query fails, error / laoding screens will be displayed.



To run project on web types:

`npm start` 

If you want to "run" the project natively (using a physical device)
First you need to add the platforms (android / ios)

`ionc cordova platform add (android/ios)` 

Only after

`ionc cordova run android` 

To run the app in debug mode with the web

`npm run run:live android`

Else if you want run the app with node

`npm run run:run android`



