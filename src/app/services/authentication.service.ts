import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable, map, of } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
providedIn: 'root'

})
export class AuthenticationService {
userData: Observable<any>;

constructor(private angularFireAuth: AngularFireAuth, public afAuth: AngularFireAuth ) {
this.userData = angularFireAuth.authState;
}

GoogleAuth() {
  return this.AuthLogin(new GoogleAuthProvider());
}

AuthLogin(provider: any) {
  return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
      console.log('You have been successfully logged in!');
    })
    .catch((error) => {
      console.log(error);
    });
}


/* Sign up */
SignUp(email: string, password: string) {
this.angularFireAuth
.createUserWithEmailAndPassword(email, password)
.then(res => {
console.log('You are Successfully signed up!', res);
})
.catch(error => {
console.log('Something is wrong:', error.message);
});
}

/* Sign in */
SignIn(email: string, password: string) {
this.angularFireAuth
.signInWithEmailAndPassword(email, password)
.then(res => {
console.log(`You're in!`);
})
.catch(err => {
console.log('Something went wrong:',err.message);
});
}

/* Sign out */
SignOut() {
this.angularFireAuth
.signOut();
}

 isAuthenticated(){
  if(!(this.angularFireAuth.user == null)) {
  return true;
  }
  else {
    return false
  };    
}
}