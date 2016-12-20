import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  providers: [CoursesService],
})


export class CoursesComponent implements OnInit {

  title = "The title of the courses page";
  courses;

  constructor(private coursesService : CoursesService){ }

  ngOnInit(){
    this.coursesService.getCourses()
      .then(courses => {
        return this.courses = courses;
      }) 
  }
}
