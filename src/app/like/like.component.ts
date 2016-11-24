import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() likeCount;
  @Input() isLike = false;

  toggleLike($event) {
    this.isLike = !this.isLike;
    this.isLike ? this.likeCount++ : this.likeCount--;
    return this.likeCount;
  }
}