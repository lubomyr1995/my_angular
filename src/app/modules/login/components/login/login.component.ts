import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)])
    })
  }

  login(): void {
    // console.log(this.form.getRawValue());
    const user = this.form.getRawValue()
    this.authService.login(user).subscribe(value => {
      this.authService.setToken(value)
      this.router.navigate(['cars']).then()
    })
  }

}
