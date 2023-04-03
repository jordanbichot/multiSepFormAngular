import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishingUpComponent } from './finishing-up.component';
import { StepHeaderModule } from '../shared/step-header/step-header.module';
import { SelectedPlanComponent } from './features/selected-plan/selected-plan.component';
import { SelectedAddOnsComponent } from './features/selected-add-ons/selected-add-ons.component';
import { TotalCostComponent } from './features/total-cost/total-cost.component';
import { FacturationCycleTextPipe } from './pipes/facturation-cycle-text.pipe';
import { EndingFacturationTextPipe } from '../shared/pipes/ending-facturation-text.pipe';

@NgModule({
  declarations: [
    FinishingUpComponent,
    SelectedPlanComponent,
    SelectedAddOnsComponent,
    TotalCostComponent,
    FacturationCycleTextPipe,
    EndingFacturationTextPipe,
  ],
  imports: [CommonModule, StepHeaderModule],
  exports: [FinishingUpComponent],
})
export class FinishingUpModule {}
