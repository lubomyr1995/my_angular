import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  title = 'my_angular';
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthorization()) {
      this.router.navigate(['cars']).then()
    }
  }
}
