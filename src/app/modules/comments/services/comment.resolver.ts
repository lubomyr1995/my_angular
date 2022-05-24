import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IComment} from "../interfaces";
import {CommentsService} from "./comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentsService: CommentsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    let {id} = route.params;
    let comment = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IComment;
    if (comment) {
      return comment
    } else {
      return this.commentsService.getById(id)
    }
  }
}
