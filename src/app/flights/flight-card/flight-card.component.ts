import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Flight } from "src/app/models/flight.model";

@Component({
  selector: "app-flight-card",
  templateUrl: "./flight-card.component.html",
  styleUrls: ["./flight-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightCardComponent implements OnInit {
  @Input() flight: Flight;

  constructor() {}

  ngOnInit() {}
}
