import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute)
    this.activatedRoute.data.subscribe(value => this.comments = value['allComments'])
  }

}
