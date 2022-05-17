import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './component/users/users.component';
import {UseerComponent} from './component/useer/useer.component';
import {UseerDetailsComponent} from './component/useer-details/useer-details.component';
import {PostsComponent} from './component/posts/posts.component';
import {PostComponent} from './component/post/post.component';
import {PostDetailsComponent} from './component/post-details/post-details.component';
import {CommentsComponent} from './component/comments/comments.component';
import {CommentComponent} from './component/comment/comment.component';
import {CommentDetailsComponent} from './component/comment-details/comment-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {CanNotReadComponent} from './component/can-not-read/can-not-read.component';
import {CommentsResolverService} from "./services";
import {PostCheckerService} from "./services";
import {DeactivateService} from "./services";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent, children: [
          {path: 'details/:id', component: UseerDetailsComponent, canDeactivate: [DeactivateService]}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: 'details/:id', component: PostDetailsComponent, canActivate: [PostCheckerService]}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, resolve: {allComments: CommentsResolverService}, children: [
          {path: 'details/:id', component: CommentDetailsComponent}
        ]
      }
    ]
  },
  {path: '**', component: CanNotReadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UseerComponent,
    UseerDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
    MainLayoutComponent,
    CanNotReadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
