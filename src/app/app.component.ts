//import { firebaseConfig } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
  apiKey: "AIzaSyCpst7AX-bRy0ATHHYdScBsoK90Fd42G2E",
    authDomain: "sqn-981ba.firebaseapp.com",
    databaseURL: "https://sqn-981ba.firebaseio.com",
    projectId: "sqn-981ba",
    storageBucket: "sqn-981ba.appspot.com",
    messagingSenderId: "855092342498"
  };




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    AngularFireModule.initializeApp(firebaseConfig, 'Myapp')
   // firebase.initializeApp(firebaseConfig);
  }
}

