import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CarsInterceptor} from "./cars.interceptor";
import {CarService} from "./services";
import {AuthService} from "../../services";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
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
      useClass: CarsInterceptor
    },
    CarService,
    AuthService
  ]
})
export class CarsModule {
}
