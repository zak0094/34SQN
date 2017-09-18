import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
//import { name } from 'ionic/dist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  
   gaming = {
    name: 'flight',
    date: 'Select date',
    duration: 'hours'
  };

  logbook={
    Placeholder: "  ",
  };
  goBack():void{
    this.navCtrl.setRoot(HomePage);
  }
}
