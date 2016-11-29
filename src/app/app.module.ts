import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
