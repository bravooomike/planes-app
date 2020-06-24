import { UserInfo } from "firebase";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  user = this.authService.userData;

  constructor(
    private authService: AuthService,
    private toast: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  public logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/login");
      this.toast.open("You have been properly logged out", "", {
        panelClass: "toast-success",
      });
    });
  }
}
