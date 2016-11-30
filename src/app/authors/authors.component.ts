import { Component } from '@angular/core';
import { AuthorsService} from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  providers: [AuthorsService]
})
export class AuthorsComponent {
  authors;
  title = "A title by an author";

  constructor( authorsService :AuthorsService) { 
    authorsService.getAuthors()
      .then(authors => {
        return this.authors = authors
      })
  }

}
