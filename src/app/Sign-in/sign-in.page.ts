import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { resolveSoa } from 'dns';

@Component({
  selector: 'app-tab1',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss']
})
export class signin {
  email: any;
  password: any;
  signingup = false;
  failed: boolean = false;
  constructor(public authenticationService: AuthenticationService, public afAuth: AngularFireAuth) { }

  changeToSigningUp() {
    this.signingup = true;
  }
  changeToSigningIn() {
    this.signingup = false;
  }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password)
    this.email = '';
    this.password = '';
    }
    
    signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    }
    
    signOut() {
    this.authenticationService.SignOut();
    }
    
}
