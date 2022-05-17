import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  details: IPost

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let {state: {post}} = history;
      if (post) {
        this.details = post
      } else {
        this.postService.getById(id).subscribe(value => this.details = value)
      }
    })
  }

}
