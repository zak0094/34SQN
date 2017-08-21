import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireModule } from 'angularfire2';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public movies    : FirebaseListObservable<any[]>;


   constructor(public navCtrl    : NavController,
               private angFire   : AngularFireDatabase,
               private modalCtrl : ModalController,
               private platform  : Platform)
   {

   }



   ionViewDidLoad()
   {
      this.platform.ready()
      .then(() =>
      {
         this.movies = this.angFire.list('/films');
      });
   }



   addRecord()
   {
      let modal = this.modalCtrl.create('Modals');
      modal.present();
   }



   editMovie(movie)
   {
      let params = { movie: movie, isEdited: true },
          modal  = this.modalCtrl.create('Modals', params);

      modal.present();
   }



   deleteMovie(movie : any)
   {
      this.movies.remove(movie);
   }

}