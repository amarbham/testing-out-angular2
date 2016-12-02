import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent  {

  @Output() change = new EventEmitter;

  frequency = ['Daily', 'Weekly', 'Monthly'];

  model = {
    name: '',
    email:'',
    frequency:''
  }
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }
  log(x){
    console.log(x)
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
}
