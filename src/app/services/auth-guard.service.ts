import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loggedIn!: boolean;
  constructor(private _authService: AuthenticationService, private _router: Router, public afAuth: AngularFireAuth) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   
    this.afAuth.user.subscribe(user => {
      console.log(user)
      if (user) {
        this.loggedIn = true;
        console.log('authenticated')
        return true;
      } else {
        console.log('failed to authenticate');
        // navigate to login page
        this._router.navigate(['/tabs/sign-in']);
        this.loggedIn = false;
        return false;
      }
    })
}
}
