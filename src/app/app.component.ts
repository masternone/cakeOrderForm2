import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
export class AppComponent {
  views = [
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment ind'
    }
  ];

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(auth => {
      if (auth) {
        console.log('something good');
      } else {
        console.log('something bad');
      }
    }, error => console.error(error));

  }

  public doLogin(sidenav) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    sidenav.close();
  }

  public doLogout(sidenav) {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
    sidenav.close();
  }
}
