import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
import { addOnDetails } from '../add-ons-picker/models/addOnDetails';
import { AvailableResourcesProviderService } from '../plan-selector/data-access/available-resources-provider.service';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss'],
})
export class FinishingUpComponent implements OnInit {
  public selectedPlan: string = '';
  public isFacturationCycleMonthly = true;
  public planBasicCost: number = 0;
  public selectedAddOns: addOnDetails[] = [];
  public selectedFacturationCycle: string = 'monthly';
  public costTextEnding: string = '/mo';
  public totalCostTextPer: string = 'month';
  public totalCost: number = 0;

  constructor(
    private planBuilderService: PlanBuilderService,
    private stepControlService: StepControlService,
    private availableResourcesProviderService: AvailableResourcesProviderService
  ) {}

  ngOnInit(): void {
    this.selectedPlan = this.planBuilderService.selectedPlan.planName;
    this.isFacturationCycleMonthly =
      this.planBuilderService.isFacturationCycleMonthly;
    this.planBasicCost = this.planBuilderService.getBasicCost();
    this.selectedAddOns = this.planBuilderService.selectedAddOns;
    this.selectedFacturationCycle = this.isFacturationCycleMonthly
      ? 'monthly'
      : 'yearly';
    this.costTextEnding = this.isFacturationCycleMonthly ? '/mo' : '/yr';
    this.totalCostTextPer = this.isFacturationCycleMonthly ? 'month' : 'year';
    this.totalCost = this.planBuilderService.getTotalCost();
  }

  changePlan() {
    this.stepControlService.goToStep(2);
  }
}
