import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { HeartChangedEventArgs } from './like/like.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post={
      title: "Title",
      isFavorite: true
  }
  tweet={
      body:'Here is the body of a tweet...',
      isLiked:false,
      likesCount:0
  }
  task={
      title:'Review Application',
      assignee:{
          name:'John Smith'
      }
  }
  onHeartChanged(eventAr : HeartChangedEventArgs){
      console.log(eventAr);
  }
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
      console.log("Favorite Changed :",eventArgs);
  }

}
