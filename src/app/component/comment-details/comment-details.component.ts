import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  details: IComment

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      let comment = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
      // console.log(comment)
      if (comment) {
        this.details = comment
      } else {
        this.commentService.getById(id).subscribe(value => this.details = value)
      }
    })
  }

}
