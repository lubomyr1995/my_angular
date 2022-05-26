import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  nameRegisterError: string

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
        username: new FormControl(null, [Validators.minLength(2), Validators.maxLength(20)]),
        password: new FormControl(null, [Validators.minLength(3), Validators.maxLength(15)]),
        confirmPassword: new FormControl(null, [Validators.minLength(3), Validators.maxLength(15)])
      },
      [this._checkerPassword]
    )
  }

  _checkerPassword(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password?.value === confirmPassword?.value ? null : {notSame: 'passwords not same'}
  }

  register(): void {
    const user = this.form.getRawValue();
    delete user.confirmPassword
    this.authService.register(user).subscribe({
      next: () => this.router.navigate(['login']),
      error: (e) => this.nameRegisterError = e.error.username[0]
    })
  }
}
