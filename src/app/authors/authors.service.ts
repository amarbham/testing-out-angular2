import { Injectable } from '@angular/core';
import { Authors } from './authors.mock';

@Injectable()
export class AuthorsService {

  getAuthors(){
    return Promise.resolve(Authors)
  }

}
