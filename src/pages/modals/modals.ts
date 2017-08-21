
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class Modals {

   public form          : any;
   public movies        : FirebaseListObservable<any[]>;
   public movieName     : any     = '';
   public movieGenres   : any     = [];
   public movieDuration : any     = '';
   public movieSummary  : any     = '';
   public movieActors   : any     = [];
   public movieYear     : any     = '';
   public movieRating   : any     = '';
   public movieId       : string  = '';
   public isEditable    : boolean = false;


   constructor(
      public navCtrl        : NavController,
      public params         : NavParams,
      private _FB 	        : FormBuilder,
      private _FIRE         : AngularFireDatabase,
      public viewCtrl       : ViewController
   )
   {
      this.form 	    = _FB.group({
         'summary' 	    : ['', Validators.minLength(10)],
         'year' 	    : ['', Validators.maxLength(4)],
         'name'         : ['', Validators.required],
         'duration'	    : ['', Validators.required],
         'rating'	    : ['', Validators.required],
         'genres' 	    : ['', Validators.required],
         'actors' 	    : ['', Validators.required]
      });

      this.movies = this._FIRE.list('/films');


      if(params.get('isEdited'))
      {
          let movie 		= params.get('movie'),
              k;

          this.movieName        = movie.title;
          this.movieDuration	= movie.duration;
          this.movieSummary     = movie.summary;
          this.movieRating   	= movie.rating;
          this.movieYear    	= movie.year;
          this.movieId          = movie.$key;


          for(k in movie.genres)
          {
             this.movieGenres.push(movie.genres[k].name);
          }


          for(k in movie.actors)
          {
             this.movieActors.push(movie.actors[k].name);
          }

          this.isEditable      = true;
      }
   }



   saveMovie(val)
   {
      let title	    : string	= this.form.controls["name"].value,
          summary   : string 	= this.form.controls["summary"].value,
          rating    : number	= this.form.controls["rating"].value,
          genres    : any       = this.form.controls["genres"].value,
          actors    : any	    = this.form.controls["actors"].value,
          duration  : string	= this.form.controls["duration"].value,
          year      : string	= this.form.controls["year"].value,
          types     : any       = [],
  	      people    : any       = [],
  	      k         : any;


    for(k in genres)
    {
       types.push({
          "name" : genres[k]
       });
    }


    for(k in actors)
    {
       people.push({
          "name" : actors[k]
       });
    }


   if(this.isEditable)
   {
      this.movies.update(this.movieId, {
         title    : title,
         summary  : summary,
         rating   : rating,
         duration : duration,
         genres   : types,
         actors   : people,
         year     : year
      });
   }
   else
   {
      this.movies.push({
         title    : title,
         summary  : summary,
         rating   : rating,
         duration : duration,
         genres   : types,
         actors   : people,
         year     : year
      });
   }

   this.closeModal();
   }



   closeModal()
   {
      this.viewCtrl.dismiss();
   }


}