import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() likeCount;
  @Input() isLike = false;

  @Output() change = new EventEmitter();

  toggleLike($event) {
    this.isLike = !this.isLike;
    this.isLike ? this.likeCount++ : this.likeCount--;
    this.change.emit( {like: this.isLike} )
    return this.likeCount;
  }



}