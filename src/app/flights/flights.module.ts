import { MaterialModule } from "./../material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlightsComponent } from "./flights.component";
import { FlightCardComponent } from "./flight-card/flight-card.component";
import { NewFlightComponent } from "./new-flight/new-flight.component";
import { FlightFormComponent } from "./flight-form/flight-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlightDetailsComponent } from "./flight-details/flight-details.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { FlightsRoutingModule } from "./flights-routing.module";

@NgModule({
  declarations: [
    FlightsComponent,
    FlightCardComponent,
    NewFlightComponent,
    FlightFormComponent,
    FlightDetailsComponent,
    FlightEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlightsRoutingModule,
  ],
  exports: [FlightsComponent, FlightEditComponent],
  entryComponents: [NewFlightComponent, FlightDetailsComponent],
})
export class FlightsModule {}
