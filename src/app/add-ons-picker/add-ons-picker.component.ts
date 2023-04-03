import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { AddOnDetails } from './models/add-on-details';
import { AvailableResourcesProviderService } from '../plan-selector/data-access/available-resources-provider.service';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@Component({
  selector: 'app-add-ons-picker',
  templateUrl: './add-ons-picker.component.html',
  styleUrls: ['./add-ons-picker.component.scss'],
})
export class AddOnsPickerComponent implements OnInit, OnDestroy {
  public stepInfo = this.stepControlService.getStepInfo(3);
  public isFacturationCycleMonthly$ =
    this.planBuilderService.isFacturationCycleMonthly$;
  public availableAddOns: AddOnDetails[] = [];
  public selectedAddOnIds: number[] = [];

  constructor(
    private planBuilderService: PlanBuilderService,
    private availableResourcesProviderService: AvailableResourcesProviderService,
    private stepControlService: StepControlService
  ) {}

  ngOnInit(): void {
    this.availableAddOns =
      this.availableResourcesProviderService.getAvailableAddOns();
    this.selectedAddOnIds = [];
    this.planBuilderService.selectedAddOns = [];
  }

  ngOnDestroy(): void {
    this.planBuilderService.sortAddOns();
  }

  selectAddOn(selectedAddOnId: number) {
    if (this.planBuilderService.isAddOnSelected(selectedAddOnId)) {
      this.planBuilderService.removeAddOnById(selectedAddOnId);
      this.selectedAddOnIds = this.selectedAddOnIds.filter(
        (addOnId) => addOnId !== selectedAddOnId
      );
    } else {
      this.planBuilderService.addAddOnById(selectedAddOnId);
      this.selectedAddOnIds = [...this.selectedAddOnIds, selectedAddOnId];
    }
  }

  isAddOnSelected(selectedAddOnId: number) {
    return this.selectedAddOnIds.includes(selectedAddOnId);
  }
}
