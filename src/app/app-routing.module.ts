import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'cars', loadChildren: () => import('./modules/cars/cars.module').then(m => m.CarsModule)},
      {
        path: 'auth',
        loadChildren: () => import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule)
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
