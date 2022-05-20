import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersResolver} from "./services/users.resolver";
import {UserResolver} from "./services/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {allUsers: UsersResolver}, children: [
      {path: 'details/:id', resolve: {dataUser: UserResolver}, component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
