import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegEx} from "../../../../constants";
import {AuthService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loginNameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.pattern(RegEx.username)]),
      password: new FormControl(null, [Validators.pattern(RegEx.username)])
    })
  }

  login(): void {
    let user = this.form.getRawValue();
    this.authService.login(user).subscribe({
        next: (token) => {
          this.authService.setTokens(token)
          this.router.navigate(['cars']).then()
        },
        error: err => this.loginNameError = err.error.detail
      }
    )
  }
}
