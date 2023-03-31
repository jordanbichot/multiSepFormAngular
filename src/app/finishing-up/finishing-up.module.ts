import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinishingUpComponent } from './finishing-up.component';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@NgModule({
  declarations: [FinishingUpComponent],
  imports: [CommonModule],
  exports: [FinishingUpComponent],
  providers: [PlanBuilderService, StepControlService],
})
export class FinishingUpModule {}
