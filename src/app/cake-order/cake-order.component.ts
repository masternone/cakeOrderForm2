import {Component, OnInit} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup} from '@angular2-material/radio';

@Component({
             moduleId: module.id,
             selector: 'app-cake-order',
             inputs: ['showForm'],
             templateUrl: 'cake-order.component.html',
             styleUrls: ['cake-order.component.css'],
             directives: [MdButton, MD_CARD_DIRECTIVES, MdInput, MdCheckbox, MdRadioButton, MdRadioGroup]
           })
export class CakeOrderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
