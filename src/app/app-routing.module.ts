import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanSelectorComponent } from './features/multiStepForm/components/plan-selector/plan-selector.component';
import { AddOnsPickerComponent } from './features/multiStepForm/components/add-ons-picker/add-ons-picker.component';
import { FinishingUpComponent } from './features/multiStepForm/components/finishing-up/finishing-up.component';
import { ThankYouComponent } from './features/multiStepForm/components/thank-you/thank-you.component';
import { PersonalInfoComponent } from './features/multiStepForm/components/personal-info/personal-info.component';

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
