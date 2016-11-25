import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true,
    voteCount: 10,
    myVote: 0
  }

  onFavouriteChange($event) {
    console.log($event)
  }

  logEvent($event) {
    console.log('event', $event)
  }
}
