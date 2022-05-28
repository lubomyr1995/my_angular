import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegEx} from "../../../../constants";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      year: new FormControl(null, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(null, [Validators.min(0), Validators.max(1000000)])
    })
  }

  save(): void {
    if (!this.carForUpdate) {
      let car = this.form.getRawValue();
      this.carService.create(car).subscribe((carUpdated) => {
        // console.log(carUpdated)
        this.cars.push(carUpdated)
        this.form.reset()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.getRawValue()).subscribe(value => {
        let updatedCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updatedCar, value);
        this.carForUpdate = null
        this.form.reset()
      })
    }
  }

  delete(id: number) {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id)
      this.cars.splice(index, 1)
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
