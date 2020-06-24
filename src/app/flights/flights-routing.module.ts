import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlightsComponent } from "./flights.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";

const FLIGHTS_ROUTES: Routes = [
  { path: "", component: FlightsComponent },
  { path: ":key", component: FlightEditComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
  exports: [RouterModule],
})
export class FlightsRoutingModule {}
