import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { CanActivateFn } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const url = environment.usersApi + '/login';
    const body = new FormData();
    body.append('email', email);
    body.append('password', password);

    return this.http.post<LoginResponse>(url, body);
  }

  isLoggedIn(): Observable<boolean> {
    const url = environment.usersApi + '/token-check';
    return this.http.get<{ detail: string; message: string }>(url).pipe(
      map((res) => res.message === 'valid'),
      catchError((err) => of(false))
    );
  }

  logout() {
    this.removeToken();
  }

  getUserRole(): string {
    const token = this.cookieService.get(environment.tokenName);
    const decoded: {
      role: string;
    } = jwtDecode(token);
    return decoded.role;
  }

  getToken(): string {
    return this.cookieService.get(environment.tokenName);
  }

  saveToken(newToken: string) {
    this.cookieService.set(environment.tokenName, newToken);
  }

  removeToken() {
    this.cookieService.delete(environment.tokenName);
  }

  currentUserId(): number {
    const token = this.getToken();
    const jwt: { id: number; exp: number; iat: number } = jwtDecode(token);
    console.log('id', jwt.id);
    return jwt.id;
  }

  getUserInfo(): Observable<User> {
    const id = this.currentUserId();
    const url = environment.usersApi + '/' + id;
    return this.http.get<User>(url);
  }
}
