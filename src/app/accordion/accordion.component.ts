import { Component,  Input,  OnInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent{

  isExpanded = false;
  @Input() title: string;

  constructor(){}

  toggle(){
    this.isExpanded = !this.isExpanded;
  }
}