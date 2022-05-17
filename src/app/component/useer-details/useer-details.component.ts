import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-useer-details',
  templateUrl: './useer-details.component.html',
  styleUrls: ['./useer-details.component.css']
})
export class UseerDetailsComponent implements OnInit {
  details: IUser

  constructor(private activatedRoute: ActivatedRoute, private usersService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const {state: {user}} = history
      if (user) {
        this.details = user
      } else {
        this.usersService.getById(id).subscribe(value => this.details = value)
      }
    })
  }

}
