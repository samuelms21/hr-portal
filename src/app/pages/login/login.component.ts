import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginResponse } from 'src/app/models/login-response.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  auth = inject(AuthService);
  cookieService = inject(CookieService);
  router = inject(Router);

  @ViewChild('smallMessage') smallMessageRef: ElementRef;

  errorMessage: string = '';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(): void {
    const { email, password } = this.loginForm.value;
    if (!email) {
      this.errorMessage = 'Please supply email!';
      return;
    }
    if (!password) {
      this.errorMessage = 'Please supply password!';
      return;
    }

    this.auth.login(email, password).subscribe({
      next: (value: LoginResponse) => {
        // In case token is expired, user logged-out automatically
        // the token needs to be removed in order to be replaced
        this.auth.logout();
        this.auth.saveToken(value.accesstoken);
        this.router.navigateByUrl('/admin');
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.error.detail;
      },
    });
  }
}
