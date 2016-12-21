import { Injectable } from '@angular/core';
import { Colours } from './colours.mock'

@Injectable()
export class ColourPickerService {

  getColours(){
    return Promise.resolve(Colours)
  }
}
