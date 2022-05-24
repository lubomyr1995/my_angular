import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostResolver, PostsResolver, PostsService} from "./services";
import {HttpClientModule} from "@angular/common/http";
import {PostDetailsComponent} from "./components/post-details/post-details.component";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService, PostsResolver, PostResolver]
})
export class PostsModule {
}
