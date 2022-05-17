import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]

  constructor(private usersService: UserService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users = value)
  }

}
