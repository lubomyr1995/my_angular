import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null

  constructor(private carService: CarService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      year: new FormControl(null, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(0, [Validators.min(1), Validators.max(1000000)])
    })
  }

  createUpdate(): void {
    if (!this.carForUpdate) {
      let car = this.form.getRawValue();
      this.carService.create(car).subscribe(carAdded => {
        this.cars.push(carAdded)
        this.form.reset()
      })
    } else {
      let updateCar = this.form.getRawValue();
      this.carService.updateById(this.carForUpdate?.id, updateCar).subscribe(value => {
        let updatedCar = this.cars.find(c => c.id === this.carForUpdate?.id);
        Object.assign(updatedCar, value)
        this.carForUpdate = null
        this.form.reset()
      })
    }
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      let index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  update(car: ICar): void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }
}
