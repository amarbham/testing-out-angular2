import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { VoterComponent } from './voter/voter.component';
import { CommentsComponent } from './comments/comments.component';
import { NavComponent } from './nav/nav.component';
import { SummaryPipe } from './summary.pipe';
import { CardComponent } from './card/card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { ObservablesComponent } from './observables/observables.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    FavouriteComponent,
    LikeComponent,
    VoterComponent,
    CommentsComponent,
    NavComponent,
    SummaryPipe,
    CardComponent,
    AccordionComponent,
    ContactFormComponent,
    SubscriptionFormComponent,
    ObservablesComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
