import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];

  constructor(private PostsService: PostsService) {
  }

  ngOnInit(): void {
    this.PostsService.getAll().subscribe(value => this.posts = value)
  }

}
