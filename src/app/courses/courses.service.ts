import { Injectable } from '@angular/core';
import { Courses } from './courses.mock';

@Injectable()
export class CoursesService {

  getCourses() {
    return Promise.resolve(Courses);
  }
}
