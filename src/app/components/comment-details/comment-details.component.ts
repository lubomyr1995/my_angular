import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  details: IComment;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    // console.log(this.router.getCurrentNavigation()?.extras.state as IComment); - в даному випадку відпрацьовує тільки один раз тому потрібно робити підписку
    this.activatedRoute.params.subscribe(value => {
      // console.log(this.router.getCurrentNavigation()?.extras);
      this.details = this.router.getCurrentNavigation()?.extras.state as IComment
    })
  }

  ngOnInit(): void {
  }

}
