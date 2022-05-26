import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CarService} from "./services";
import {MainInterceptor} from "./main.interceptor";
import {AuthService} from "../../services";
import { CarFormComponent } from './components/car-form/car-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
    CarService,
    AuthService
  ]
})
export class CarsModule {
}
