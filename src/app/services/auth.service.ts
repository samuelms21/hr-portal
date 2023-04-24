import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) {}

  login(email: string, password: string): Observable<Object> {
    const url = 'http://localhost:8000/api/login';
    const body = { email, password };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.http.post(url, body, options);
  }

  getUserRole(): string {
    const token = this.cookieService.get(environment.tokenName);
    return ''
  }

  isLoggedIn(): boolean {
    const token = this.cookieService.get(environment.tokenName);
    return false
  }
}
