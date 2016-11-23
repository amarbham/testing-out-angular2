import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [CoursesService],
})


export class CoursesComponent {

  title = "The title of the courses page";
  courses;

  constructor(coursesService: CoursesService){
    this.courses = coursesService.getCourses(); 
  }
}
