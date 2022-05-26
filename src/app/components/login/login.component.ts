import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  nameLoginError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.minLength(2), Validators.maxLength(15)])
    })
  }

  login() {
    let user = this.form.getRawValue();
    this.authService.login(user).subscribe({
      next: (value) => {
        this.authService.setToken(value)
        this.router.navigate(['cars']).then()
      },
      error: err => {
        this.nameLoginError = err.error.detail
      }
    })
  }
}
