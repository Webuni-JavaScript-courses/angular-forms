import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countryList } from '../country-list';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  countryList = countryList;
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(),
      isMarried: new FormControl(),
      country: new FormControl(),
      address:new FormGroup({
        city: new FormControl(),
        street: new FormControl(),
        postcode: new FormControl()
      })
    })
  }

  ngOnInit(): void {
  }

  submitted() {
    console.log(this.contactForm.value);
  }

}
