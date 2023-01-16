import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './myComponents/observables/all/all.component';
import { IntervalComponent } from './myComponents/observables/interval/interval.component';
import { ObservablesComponent } from './myComponents/observables/observables.component';

const routes: Routes = [
  {
    path: 'observables', component: ObservablesComponent, children: [
      { path: '', component: AllComponent },
      { path: 'interval', component: IntervalComponent },
  ]},
  {path: '**', redirectTo:'observables'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
