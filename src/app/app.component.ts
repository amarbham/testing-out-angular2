import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  viewMode = 'courses';
  post = {
    title: "Title",
    isFavourite: true,
    voteCount: 10,
    myVote: 0
  }

  onFavouriteChange($event) {
    console.log($event)
  }

  onViewChange($event){
    this.viewMode = $event.view;
  }

  logEvent($event) {
    console.log('event', $event)
  }
}
