import { Component, OnInit } from '@angular/core';
import { PlanBuilderService } from 'src/app/plan-selector/data-access/plan-builder.service';
import { StepControlService } from 'src/app/steps-sidebar/data-access/step-control.service';

@Component({
  selector: 'app-selected-plan',
  templateUrl: './selected-plan.component.html',
  styleUrls: ['./selected-plan.component.scss'],
})
export class SelectedPlanComponent implements OnInit {
  public selectedPlan: string = '';
  public isFacturationCycleMonthly$ =
    this.planBuilderService.isFacturationCycleMonthly$;
  public planBasicCost: number = 0;

  constructor(
    private planBuilderService: PlanBuilderService,
    private stepControlService: StepControlService
  ) {}

  ngOnInit(): void {
    this.selectedPlan = this.planBuilderService.selectedPlan.planName;
    this.planBasicCost = this.planBuilderService.getBasicCost();
  }

  changePlan() {
    this.stepControlService.goToStep(2);
  }
}
