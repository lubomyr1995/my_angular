import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IPost} from "../interfaces";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost> {
  constructor(private router: Router, private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    let {id} = route.params;
    let post = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPost;
    if (post) {
      return post
    } else {
      return this.postsService.getById(id)
    }
  }
}
