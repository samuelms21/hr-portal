import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('shake', [
      transition('* => *', [
        style({ marginLeft: '0px' }),
        animate(
          '1s ease-in-out',
          keyframes([
            style({ marginLeft: '25px' }),
            style({ marginLeft: '0px' }),
            style({ marginLeft: '25px' }),
            style({ marginLeft: '0px' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class LoginComponent {
  roles: string[] = ['Admin', 'Staff'];
  errorMessage: string = '';

  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.auth
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (value: any) => {
            this.auth.saveToken(value.token);
            this.router.navigateByUrl('/admin');
          },
          error: (err) => {
            this.errorMessage = '';
            setTimeout(() => {
              this.errorMessage = err.error.message;
            }, 1000);
          },
        });
    }
  }
}
