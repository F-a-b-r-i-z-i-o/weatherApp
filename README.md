# weatherApp
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

**The first:**

represents the home with the various cities of which it is possible to see the forecasts.

![home](https://user-images.githubusercontent.com/44865237/149035200-c3b612c8-bf77-4118-9a10-b90aea29d02a.png)
-

After clicking on one of the visible cities, you can see the relative weather.

**The second:**

in that a map is displayed.

**The third:**

instead allows you to view some users who use the app.


To run project on web types:

`npm start ` 


If you want to "run" the project natively (using a physical device)
First you need to add the platforms (android / ios)

`ionc cordova platform add (android/ios)` 

Only after

`ionc cordova run android` 

To run the app in debug mode with the web

`npm run run:live android`

Else if you want run the app with node

`npm run run:run android`



