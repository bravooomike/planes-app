import { FlightsService } from "./core/services/flights.service";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { CoreModule } from "./core/core.module";
import { MaterialModule } from "./material/material.module";
import { environment } from "./../environments/environment";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from "./app.component";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from "@angular/platform-browser/animations";
import { FlightsModule } from "./flights/flights.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MaterialModule,
    CoreModule,
    AppRoutingModule,
    AngularFireAuthModule,
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
