import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IUser} from "../interfaces";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor(private usersService: UsersService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    let user = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IUser;
    // console.log(history.state['data'])
    if (user) {
      return user
    } else {
      let {id} = route.params;
      return this.usersService.getById(id)
    }
  }
}
