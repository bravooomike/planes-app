import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { AuthGuard } from "./core/services/auth.guard";
import { FlightEditComponent } from "./flights/flight-edit/flight-edit.component";
import { FlightDetailsComponent } from "./flights/flight-details/flight-details.component";
import { FlightsComponent } from "./flights/flights.component";
import { DashboardComponent } from "./core/dashboard/dashboard.component";
import { LoginComponent } from "./core/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const APP_ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "flights", pathMatch: "full" },
      {
        path: "flights",
        loadChildren: "./flights/flights.module#FlightsModule",
      },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
