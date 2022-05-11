import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[]

  constructor(private CommentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.CommentsService.getAll().subscribe(value => this.comments = value)
  }

}
