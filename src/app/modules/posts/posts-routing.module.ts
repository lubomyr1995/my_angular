import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostResolver, PostsResolver} from "./services";
import {PostDetailsComponent} from "./components/post-details/post-details.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {allPosts: PostsResolver}, children: [
      {path: 'details/:id', component: PostDetailsComponent, resolve: {details: PostResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
