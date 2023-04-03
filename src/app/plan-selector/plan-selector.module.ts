import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectorComponent } from './plan-selector.component';
import { StepHeaderComponent } from '../shared/step-header/step-header.component';
import { StepHeaderModule } from '../shared/step-header/step-header.module';
import { AvailablePlansComponent } from './features/available-plans/available-plans.component';
import { BillingSelectorComponent } from './features/billing-selector/billing-selector.component';

@NgModule({
  declarations: [PlanSelectorComponent, AvailablePlansComponent, BillingSelectorComponent],
  imports: [CommonModule, StepHeaderModule],
  exports: [PlanSelectorComponent],
})
export class PlanSelectorModule {}
