import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {Observable, AsyncSubject} from 'rxjs';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  // canActivateVal: boolean = false;
  isLogged: AsyncSubject<any> = new AsyncSubject();

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // this.afAuth = afAuth.auth;
    this.authenticated();
  }

  authenticated() {
    if (this.afAuth) {
      this.afAuth.authState.subscribe(
        auth => {
          if (!!auth) {
            this.isLogged.next(true);
          } else {
            this.isLogged.next(false);
          }
          this.isLogged.complete();
        },
        error => {
          this.isLogged.next(false);
          this.isLogged.complete();
        }
      )
    } else {
      this.isLogged.next(false);
      this.isLogged.complete();
    }
  }

  canActivate(): Observable<boolean> {
    return this.isLogged.do(
      isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['']);
        }
      },
      error => console.error(error));
  }
}
