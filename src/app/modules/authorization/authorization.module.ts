import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthService} from "../../services";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthorizationModule { }
