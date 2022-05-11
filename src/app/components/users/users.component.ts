import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UsersService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private UsersService: UsersService) {
  }

  ngOnInit(): void {
    this.UsersService.getAll().subscribe(value => this.users = value)
  }

}
