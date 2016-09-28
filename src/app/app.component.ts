import {Component} from '@angular/core';

// import {Router} from '@angular/router';
import {AngularFire} from 'angularfire2';

@Component(
{
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private af: AngularFire/*, private router: Router*/) {
    console.log('af',af);
    af.auth.subscribe(auth => {
      console.log('auth',auth);
      if(auth) {
        console.log('something good');
      } else {
        console.log('something bad');
      }
    }, error => console.error(error));
  }

  public doLogin(sidenav) {
    this.af.auth.login();
    sidenav.close();
  }

  public doLogout(sidenav) {
    this.af.auth.logout();
    // this.router.navigate(['']);
    sidenav.close();
  }

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];
}
