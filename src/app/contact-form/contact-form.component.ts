import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {

  powers = ['Lightning Speed', 'Really Smart', 'Super Flexible', 
            'Super Hot', 'Weather Changer']

  submitted = false;

  model = new User('Amar', '123 London Road', 'London', 'W5 1AA','', '');

  onSubmit() {
    this.submitted = true;
  }

  newUser(){
    this.model = new User('','','','','','');
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }

}
