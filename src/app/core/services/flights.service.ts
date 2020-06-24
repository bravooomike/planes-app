import { AngularFireDatabase } from "@angular/fire/database";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Flight } from "src/app/models/flight.model";

@Injectable({
  providedIn: "root",
})
export class FlightsService {
  private url: string = "/flights";

  constructor(private db: AngularFireDatabase) {}

  // metoda zwraca tablicę obiektów bez dodatkowego klucza/pola
  // public getFlights(): Observable<Flight[]> {
  //   return this.db
  //     .list<Flight>(this.url)
  //     .snapshotChanges()
  //     .pipe(map((response) => response.map((flight) => flight.payload.val())));
  // }

  // metoda zwraca tablicę obiektów z dodatkowym kluczem/polem w obiekcie
  public getFlights(): Observable<Flight[]> {
    return this.db
      .list<Flight>(this.url)
      .snapshotChanges()
      .pipe(
        map((response) => response.map((flight) => this.assignKey(flight)))
      );
  }

  public addFlight(flight: Flight) {
    return this.db.list<Flight>(this.url).push(flight);
  }

  public editFlight(key: string, flight: Flight) {
    return this.db.object<Flight>(`${this.url}/${key}`).update(flight);
  }

  public getFlight(key: string): Observable<Flight> {
    return this.db
      .object<Flight>(`${this.url}/${key}`)
      .snapshotChanges()
      .pipe(map((flight) => this.assignKey(flight)));
  }

  public removeFlight(key: string) {
    return this.db.object<Flight>(`${this.url}/${key}`).remove();
  }

  private assignKey(flight) {
    return { ...flight.payload.val(), key: flight.key };
  }
}
