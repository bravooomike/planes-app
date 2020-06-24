import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserInfo } from "firebase";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: UserInfo;

  constructor(private fireAuth: AngularFireAuth) {}

  public login(credentials: { email: string; password: string }) {
    return this.fireAuth.auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredential) => (this.user = userCredential.user));
  }

  public register(credentials: { email: string; password: string }) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(
      credentials.email,
      credentials.password
    );
  }

  public logout() {
    return this.fireAuth.auth.signOut();
  }

  public isLoggedIn() {
    return !!this.user;
  }

  public get userData() {
    return this.user;
  }
}
