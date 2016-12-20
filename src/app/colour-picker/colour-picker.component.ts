import { Component, Output, EventEmitter } from '@angular/core';
import { coloursData } from './colours.mock';

@Component({
  selector: 'colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent  {

  @Output() change = new EventEmitter();


  setColour;

  colours = coloursData;

  choose(elem){
    const findColour = this.colours.find(colour => {
      return colour.name === elem.value;
    });

    if (findColour){
      this.setColour = findColour.hex;
    };
  }
}
