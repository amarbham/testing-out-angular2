import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ColourPickerService } from './colour-picker.service';
import { Colour } from './colours.model';

@Component({
  selector: 'colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css'],
  providers: [ColourPickerService]
})
export class ColourPickerComponent implements OnInit {

  @Output() change = new EventEmitter();

  colours: Colour[];
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
      .subscribe(
        colours => this.colours = colours)
  }
}
