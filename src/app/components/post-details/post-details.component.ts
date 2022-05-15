import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  details: IPost

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      // console.log(history.state.data)
      let {state: {data}} = history
      // console.log(data)
      this.details = data as IPost
    })
  }

}
