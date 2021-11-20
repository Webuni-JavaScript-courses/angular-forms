import { Component, OnInit } from '@angular/core';
import { countryList } from '../country-list';
import { Contact } from './contact';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList = countryList;
  contact = new Contact();

  constructor() { }

  ngOnInit(): void {
  }

  submitted() {
    console.log(this.contact);
  }

}
