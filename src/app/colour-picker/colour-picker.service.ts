import { Injectable } from '@angular/core';
import { Colours } from './colours.mock'
import { Http } from '@angular/http';
import { Colour } from './colours.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ColourPickerService {

  constructor(private http: Http) { }

  getColours(): Observable<Colour[]> {
    return this.http.get('http://localhost:3000/colours')
      .map(res => res.json())
  }
}