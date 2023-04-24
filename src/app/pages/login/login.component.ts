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
})
export class LoginComponent {
  roles: string[] = ['Admin', 'Staff'];

  constructor(
    private auth: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    selectedRole: new FormControl('', Validators.required),
  });

  login(): void {
    console.log(this.loginForm);
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.auth
        .login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: (value) => {
            console.log(this.cookieService.get('jwt'));
            this.router.navigateByUrl('/admin');
          },
          error: (err) => {
            console.error(err);
          },
        });
    }
  }
}
