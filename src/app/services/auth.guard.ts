import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';

export function isLoggedInGuard(): Observable<boolean> {
  const router = inject(Router);
  const auth = inject(AuthService);

  return auth.isLoggedIn().pipe(
    map((res) => {
      if (!res) {
        router.navigateByUrl('/login');
      }
      return res;
    })
  );
}

export function noLoginIfAuthenticatedGuard(): Observable<boolean> {
  const router = inject(Router);
  const auth = inject(AuthService);

  return auth.isLoggedIn().pipe(
    map((res) => {
      if (res) {
        router.navigateByUrl('/admin');
      }
      return !res;
    })
  );
}
