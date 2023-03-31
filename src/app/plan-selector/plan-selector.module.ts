import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectorComponent } from './plan-selector.component';
import { PlanBuilderService } from './data-access/plan-builder.service';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@NgModule({
  declarations: [PlanSelectorComponent],
  imports: [CommonModule],
  exports: [PlanSelectorComponent],
  providers: [PlanBuilderService, StepControlService],
})
export class PlanSelectorModule {}
