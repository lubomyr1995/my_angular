import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)]),
      year: new FormControl(null, [Validators.min(1960), Validators.max(2022)]),
      price: new FormControl(null, [Validators.min(1), Validators.max(1000000)])
    })
  }

  create() {
    // console.log(this.form.getRawValue())
    this.carService.create(this.form.getRawValue()).subscribe(value => {

    })
  }
}
