import { Injectable } from '@angular/core';
import { Comments } from './comments.mock';


@Injectable()
export class CommentsService {

  getComments() {
    return Promise.resolve(Comments)
  }
}