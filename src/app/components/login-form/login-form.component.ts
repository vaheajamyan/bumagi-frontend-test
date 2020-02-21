import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginError = '';
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      login: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
    this.form.valueChanges.subscribe((change) => {
      this.loginError = '';
    });
  }

  signIn() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.login(this.form.value)
      .subscribe((res: Response) => {
        const token = res.headers.get('authorization');
        localStorage.setItem('token', token);
        this.router.navigate(['/users']);
      }, (err) => {
        this.loginError = err.error.message;
      });
  }

  hidePassword(input: HTMLInputElement) {
    return input.type = input.type === 'text' ? 'password' : 'text';
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

}
