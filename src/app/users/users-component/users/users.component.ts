import {Component, OnInit} from '@angular/core';

import {UserService} from "../../users-services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UserService) {
  }

  ngOnInit(): void {
  }

}
