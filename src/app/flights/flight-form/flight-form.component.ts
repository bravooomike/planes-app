import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Flight, Crew } from "src/app/models/flight.model";
import { flightCodeValidator } from "./code.validator";

@Component({
  selector: "app-flight-form",
  templateUrl: "./flight-form.component.html",
  styleUrls: ["./flight-form.component.scss"],
})
export class FlightFormComponent implements OnInit {
  public form: FormGroup;
  public jobs = [
    { label: "Stewardess", value: "stewardess" },
    { label: "Senior Cabin Crew", value: "senior_cabin_crew" },
    { label: "Pilot", value: "pilot" },
    { label: "Co-Pilot", value: "co_pilot" },
    { label: "Mechanic", value: "mechanic" },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ["", [Validators.required]],
      destination: ["", [Validators.required]],
      departureTime: ["", [Validators.required]],
      returnTime: ["", [Validators.required]],
      code: [
        "SK",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(7),
          flightCodeValidator,
        ],
      ],
      additionalInformation: "",
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([]),
    });
  }

  public setFlight(flight: Flight) {
    // console.log(flight);
    const { key, ...formData } = flight;
    this.form.patchValue(formData);
    // console.log(formData);
    if (formData.crew) {
      formData.crew.map((crewMember) => this.addCrewMember(crewMember));
    }
  }

  public addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  private buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || "",
      job: crewMember.job || "",
    });
  }

  get crew() {
    return this.form.get("crew") as FormArray;
  }

  public removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }
}
