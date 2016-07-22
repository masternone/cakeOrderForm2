import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AngularFire} from 'angularfire2';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  canActivateVal: boolean = false;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe((auth) => this.canActivateVal = !!auth);
  }

  canActivate() {
    return this.canActivateVal;
  }
}