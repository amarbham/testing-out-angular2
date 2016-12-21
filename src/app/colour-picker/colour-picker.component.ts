import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ColourPickerService } from './colour-picker.service';

@Component({
  selector: 'colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css'],
  providers: [ColourPickerService]
})
export class ColourPickerComponent implements OnInit {

  @Output() change = new EventEmitter();

  colours
  setColour;

  constructor(private colourPickerService: ColourPickerService){ }

  choose(elem){
    const findColour = this.colours.find(colour => {
      return colour.name === elem.value;
    });

    if (findColour){
      this.setColour = findColour.hex;
    };
  }

  ngOnInit(){
    this.colourPickerService.getColours()
      .then(colours => {
        return this.colours = colours;
      })
  }
}
