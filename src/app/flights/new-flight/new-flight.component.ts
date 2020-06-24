import { FlightsService } from "./../../core/services/flights.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialogRef, MatSnackBar } from "@angular/material";
import { FlightFormComponent } from "../flight-form/flight-form.component";

@Component({
  selector: "app-new-flight",
  templateUrl: "./new-flight.component.html",
  styleUrls: ["./new-flight.component.scss"],
})
export class NewFlightComponent implements OnInit {
  @ViewChild("flightForm", { static: true }) flightForm: FlightFormComponent;

  constructor(
    private flightsService: FlightsService,
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  public createFlight() {
    this.flightsService
      .addFlight(this.flightForm.form.value)
      .then(
        this.onCreateFlightSuccess.bind(this),
        this.onCreateFlightFuilure.bind(this)
      );
  }

  private onCreateFlightSuccess() {
    this.dialogRef.close();
    this.snackBar.open("The flight has been successfully created!", "", {
      panelClass: "toast-success",
    });
    // this.snackBar.open("The flight has been successfully created!");
  }

  private onCreateFlightFuilure(error) {
    this.snackBar.open(
      `The flight has not been created with error, ${error.message}`,
      "",
      { panelClass: "toast-error" }
    );
  }
}
