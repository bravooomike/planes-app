import { FlightsService } from "./../../core/services/flights.service";
import { Flight } from "./../../models/flight.model";
import { FlightFormComponent } from "./../flight-form/flight-form.component";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-flight-edit",
  templateUrl: "./flight-edit.component.html",
  styleUrls: ["./flight-edit.component.scss"],
})
export class FlightEditComponent implements OnInit, AfterViewInit {
  @ViewChild("flightForm", { static: true }) flightForm: FlightFormComponent;
  public flight: Flight;

  constructor(
    private flightsService: FlightsService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadFlight();
  }

  private loadFlight() {
    const key = this.activatedRoute.snapshot.params["key"];
    this.flightsService
      .getFlight(key)
      .pipe(tap((flight) => this.flightForm.setFlight(flight)))
      .subscribe((flight) => {
        this.flight = flight;
      });
  }

  public editFlight() {
    this.flightsService
      .editFlight(this.flight.key, this.flightForm.form.value)
      .then(
        this.onEditFlightSuccess.bind(this),
        this.onEditFlightFailure.bind(this)
      );
  }

  private onEditFlightSuccess() {
    this.router.navigate(["/dashboard"]);
    this.snackBarMessage(
      "The flight has been successfully edited!",
      "toast-success"
    );
  }

  private onEditFlightFailure(error) {
    this.snackBarMessage(
      `The flight has been edited: ${error.message}`,
      "toast-error"
    );
  }

  public removeFlight() {
    this.flightsService
      .removeFlight(this.flight.key)
      .then(
        this.onRemoveFlightSuccess.bind(this),
        this.onRemoveFlightFailure.bind(this)
      );
  }

  private onRemoveFlightSuccess() {
    this.router.navigate(["/dashboard"]);
    this.snackBarMessage(
      "The flight has been successfully removed!",
      "toast-success"
    );
  }

  private onRemoveFlightFailure(error) {
    this.snackBarMessage(
      `The flight has not been removed: ${error.message}`,
      "toast-error"
    );
  }

  private snackBarMessage(showText, showClass) {
    this.snackBar.open(showText, "", {
      panelClass: showClass,
    });
  }

  public back() {
    window.history.back();
  }
}
