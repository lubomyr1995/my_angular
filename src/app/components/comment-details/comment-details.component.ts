import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  details: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
    // console.log(this.router.getCurrentNavigation()?.extras.state as IComment); - в даному випадку відпрацьовує тільки один раз тому потрібно робити підписку
    this.activatedRoute.params.subscribe(({id}) => {
      // console.log(this.router.getCurrentNavigation()?.extras);
      let comment = this.router.getCurrentNavigation()?.extras?.state as IComment
      if (comment) {
        this.details = comment
      } else {
        this.commentService.getById(id).subscribe(value => this.details = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
