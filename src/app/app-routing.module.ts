import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';
import { AddOnsPickerComponent } from './add-ons-picker/add-ons-picker.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

const routes: Routes = [
  { path: 'planSelection', component: PlanSelectorComponent },
  { path: 'addOnsSelection', component: AddOnsPickerComponent },
  { path: 'finishingUp', component: FinishingUpComponent },
  { path: 'thankYou', component: ThankYouComponent },
  { path: '', component: PersonalInfoComponent },
  {
    path: '**',
    component: PersonalInfoComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
