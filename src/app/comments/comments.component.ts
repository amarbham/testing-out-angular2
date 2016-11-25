import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  comments
  
  constructor(private commentsService: CommentsService) { }

  onLikeUpdate($event){
    console.log($event)
    // TODO: make post with like update to server.
  }

  ngOnInit() {
    this.commentsService.getComments()
      .then(comments => {
        return this.comments = comments
      })
  }
}
