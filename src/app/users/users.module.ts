import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-component/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./users-services/user.service";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UsersModule {
}
