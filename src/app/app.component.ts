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

  onFavouriteChange($event) {
    console.log($event)
  }
}
