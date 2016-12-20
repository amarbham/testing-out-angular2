import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent  {

  @Output() change = new EventEmitter();


  setColour;

  colours:any = [
    {
      name: 'red',
      hex: '#ff0000'
    },
    {
      name: 'blue',
      hex: '#0000ff'
    }, 
    {
      name: 'yellow',
      hex: '#ffff00'
    }, 
    {
      name: 'green',
      hex: '#00ff00'
    }
  ]

  choose(elem){
    const findColour = this.colours.find(colour => {
      return colour.name === elem.value;
    });

    if (findColour){
      this.setColour = findColour.hex;
    };
  }
}
