import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

import {RegEx} from "../../../../constants";
import {AuthService} from "../../../../services";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  regNameError: string

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
        username: new FormControl(null, [Validators.pattern(RegEx.username)]),
        password: new FormControl(null, [Validators.pattern(RegEx.username)]),
        confirmPassword: new FormControl(null, [Validators.pattern(RegEx.username)])
      },
      [this._checkerPassword]
    )
  }

  _checkerPassword(form: AbstractControl): ValidationErrors | null {
    let password = form.get('password');
    let confirmPassword = form.get('confirmPassword');
    // console.log(password?.value)
    return password?.value === confirmPassword?.value ? null : {notSame: 'passwords not same'}
  }

  register() {
    console.log(this.form);
    let user = this.form.getRawValue();
    delete user.confirmPassword
    this.authService.register(user).subscribe({
      next: () => this.router.navigate(['auth/login']),
      error: err => this.regNameError = err.error.username[0]
    })
  }
}
