import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit{
  comments
  post = {
    likeCount: 10,
    isLike: false
  }

  constructor(private commentsService: CommentsService) { }

  ngOnInit(){
    this.commentsService.getComments()
      .then(comments => {
        return this.comments = comments
      })
  }
}
