import { MaterialModule } from "./../material/material.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [DashboardComponent, LoginComponent],
  providers: [AngularFirestore],
})
export class CoreModule {}
