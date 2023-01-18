import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './myComponents/observables/all/all.component';
import { FilterComponent } from './myComponents/observables/filter/filter.component';
import { IntervalComponent } from './myComponents/observables/interval/interval.component';
import { MapComponent } from './myComponents/observables/map/map.component';
import { ObservablesComponent } from './myComponents/observables/observables.component';
import { OfFromComponent } from './myComponents/observables/of-from/of-from.component';
import { PluckComponent } from './myComponents/observables/pluck/pluck.component';
import { SubjectComponent } from './myComponents/observables/subject/subject.component';
import { ToArrayComponent } from './myComponents/observables/to-array/to-array.component';

const routes: Routes = [
  {
    path: 'observables', component: ObservablesComponent, children: [
      { path: '', component: AllComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent},
      { path: 'to-array', component: ToArrayComponent},
      { path: 'map', component: MapComponent},
      { path: 'pluck', component: PluckComponent },
      { path: 'filter', component: FilterComponent},
      { path: 'subject', component: SubjectComponent}
      
  ]},
  {path: '**', redirectTo:'observables'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
