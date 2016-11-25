import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent {
  comments
  post = {
    likeCount: 10,
    isLike: false
  }

  constructor(commentsService: CommentsService) {
    this.comments = commentsService.getComments();
  }

}
