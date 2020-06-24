import { Flight } from "./../../models/flight.model";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-flight-details",
  templateUrl: "./flight-details.component.html",
  styleUrls: ["./flight-details.component.scss"],
})
export class FlightDetailsComponent implements OnInit {
  public flight: Flight;

  constructor(
    private dialogRef: MatDialogRef<FlightDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight,
    private router: Router
  ) {
    this.flight = data;
  }

  ngOnInit() {}

  public closeFlightDetails() {
    this.dialogRef.close();
  }

  public goToFlightEdition() {
    this.dialogRef.close();
    this.router.navigate(["/dashboard/flights", this.flight.key]);
  }
}
