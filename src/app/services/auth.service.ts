import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  login(email: string, password: string): Observable<Object> {
    const url = 'http://localhost:8000/api/login';
    const body = { email, password };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(url, body, options);
  }

  getUserRole(): string {
    const token = this.cookieService.get(environment.tokenName);
    const decoded: {
      role: string;
    } = jwtDecode(token);
    return decoded.role;
  }

  isLoggedIn(): boolean {
    const token = this.cookieService.get(environment.tokenName);
    return !!token;
  }

  getToken(): string {
    return this.cookieService.get(environment.tokenName);
  }

  saveToken(newToken: string) {
    this.cookieService.set(environment.tokenName, newToken);
  }
}
