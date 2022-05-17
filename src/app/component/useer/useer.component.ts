import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces";

@Component({
  selector: 'app-useer',
  templateUrl: './useer.component.html',
  styleUrls: ['./useer.component.css']
})
export class UseerComponent implements OnInit {
  @Input()
  user: IUser
  constructor() { }

  ngOnInit(): void {
  }

}
