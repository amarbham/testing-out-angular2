import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true
  }

  tweet = {
    likeCount:10,
    isLike:false
  }

  onFavouriteChange($event) {
    console.log($event)
  }

  logEvent($event){
    console.log('event', $event)
  }
}
