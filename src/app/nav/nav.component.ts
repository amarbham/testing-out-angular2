import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  @Output() change = new EventEmitter;

  setView(view){
    this.change.emit({view: view})
  }
}
