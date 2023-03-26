import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addOnDetails } from '../../models/addOnDetails';
import { PlanBuilderServiceService } from '../../services/plan-builder-service.service';
import { StepControlServiceService } from '../../services/step-control-service.service';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss'],
})
export class FinishingUpComponent implements OnInit {
  constructor(
    private planBuilderService: PlanBuilderServiceService,
    private stepControlService: StepControlServiceService
  ) {}

  selectedPlan: string = '';
  isFacturationCycleMonthly = true;
  planBasicCost: number = 0;
  selectedAddOns: addOnDetails[] = [];
  selectedFacturationCycle: string = 'monthly';
  costTextEnding: string = '/mo';
  totalCostTextPer: string = 'month';
  totalCost: number = 0;

  ngOnInit(): void {
    this.selectedPlan = this.planBuilderService.selectedPlan.basicPlan.plan;
    this.isFacturationCycleMonthly =
      this.planBuilderService.selectedPlan.basicPlan.facturationCycle ===
      'Monthly'
        ? true
        : false;
    this.planBasicCost =
      this.planBuilderService.selectedPlan.basicPlan.getCost();
    this.selectedAddOns = this.planBuilderService.selectedPlan.addOns;
    this.selectedFacturationCycle =
      this.planBuilderService.selectedPlan.basicPlan.facturationCycle.toLowerCase();
    this.costTextEnding = this.isFacturationCycleMonthly ? '/mo' : '/yr';
    this.totalCostTextPer = this.isFacturationCycleMonthly ? 'month' : 'year';
    this.totalCost = this.planBuilderService.selectedPlan.getTotalCost();
  }

  changePlan() {
    this.stepControlService.goToStep(2);
  }
}
