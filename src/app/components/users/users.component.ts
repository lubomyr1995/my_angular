import {Component, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    this.activatedRoute.data.subscribe(value => this.users = value['allUsers'])
  }

}
