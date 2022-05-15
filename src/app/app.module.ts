import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentDetailsComponent} from './components/comment-details/comment-details.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {
    path: 'users', component: UsersComponent, children: [
      {path: 'details/:id', component: UserDetailsComponent},
    ]
  },
  {
    path: 'posts', component: PostsComponent, children: [
      {path: 'details/:id', component: PostDetailsComponent}
    ]
  },
  {
    path: 'comments', component: CommentsComponent, children: [
      {path: 'details/:id', component: CommentDetailsComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
    NotFoundComponent
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
