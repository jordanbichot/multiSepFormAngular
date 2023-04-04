import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
import { AddOnDetails } from '../add-ons-picker/models/add-on-details';
import { AvailableResourcesProviderService } from '../plan-selector/data-access/available-resources-provider.service';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss'],
})
export class FinishingUpComponent implements OnInit {
  public stepInfo = this.stepControlService.getStepInfo(4);

  public totalCost: number = 0;

  constructor(
    private planBuilderService: PlanBuilderService,
    private stepControlService: StepControlService
  ) {}

  ngOnInit(): void {
    this.totalCost = this.planBuilderService.getTotalCost();
  }
}
