import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  viewMode = 'dynamic-form';
  questions: any;

  post = {
    title: "Title",
    isFavourite: true,
    voteCount: 10,
    myVote: 0
  }

  onFavouriteChange($event) {
    console.log($event)
  }

  onViewChange($event) {
    this.viewMode = $event.view;
  }

  logEvent($event) {
    console.log('event', $event)
  }

  constructor(qs: QuestionService){
     this.questions = qs.getQuestions();
  }
}
