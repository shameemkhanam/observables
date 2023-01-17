import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObservablesComponent } from './myComponents/observables/observables.component';
import { AllComponent } from './myComponents/observables/all/all.component';
import { OfFromComponent } from './myComponents/observables/of-from/of-from.component';
import { ToArrayComponent } from './myComponents/observables/to-array/to-array.component';
import { MapComponent } from './myComponents/observables/map/map.component';
import { PluckComponent } from './myComponents/observables/pluck/pluck.component';
import { FilterComponent } from './myComponents/observables/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    AllComponent,
    OfFromComponent,
    ToArrayComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
