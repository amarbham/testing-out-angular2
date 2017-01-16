import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Lesson } from './lesson.interface'

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {

  myForm: FormGroup;

  // lesson = {
  //   title: 'Title goes here',
  //   duration: 10,
  //   description: 'Description goes here',
  // }
  //

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      duration: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      description: ['', [Validators.required]]
    });

    // {{myForm.value}}
    // this.myForm.valueChanges
    //   .subscribe(formValue => console.log(formValue))

  }

  onSubmit({value, valid}: { value: Lesson, valid: boolean }): void {
      console.log(value, valid);
  }
}
