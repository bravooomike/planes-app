import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: "",
    password: "",
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar
  ) {}

  ngOnInit() {}

  public login() {
    this.authService
      .login(this.credentials)
      .then(() => this.router.navigateByUrl("/dashboard"))
      .catch((error) => this.toast.open(error.message));
  }

  public register() {
    this.authService
      .register(this.credentials)
      .then((newUser) =>
        this.toast.open(
          `User ${newUser.user.displayName} has been successfully created. Please log in`,
          "",
          { panelClass: "toast-success" }
        )
      )
      .catch(() =>
        this.toast.open(
          `The email is already in use. Please try with another one`,
          "",
          { panelClass: "toast-error" }
        )
      );
  }
}
