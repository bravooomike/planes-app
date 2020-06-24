import { FlightDetailsComponent } from "./flight-details/flight-details.component";
import { NewFlightComponent } from "./new-flight/new-flight.component";
import { FlightsService } from "./../core/services/flights.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Flight } from "../models/flight.model";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.scss"],
})
export class FlightsComponent implements OnInit {
  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private flightsService: FlightsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {}

  public openNewFlight() {
    this.matDialog.open(NewFlightComponent);
  }

  public openFlightDetails(flight: Flight) {
    this.matDialog.open(FlightDetailsComponent, { data: flight });
  }
}
