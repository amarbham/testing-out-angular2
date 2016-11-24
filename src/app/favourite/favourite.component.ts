import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
})
export class FavouriteComponent {

  @Input() isFavourite = false;

  @Output() change = new EventEmitter();

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }
}
