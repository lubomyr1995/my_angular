import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentResolver, CommentsResolver} from "./services";
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";

const routes: Routes = [
  {
    path: '', resolve: {allComments: CommentsResolver}, component: CommentsComponent, children: [
      {path: 'details/:id', resolve: {details: CommentResolver}, component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
