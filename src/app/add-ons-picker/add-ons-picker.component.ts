import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { addOnDetails } from './models/addOnDetails';
import { AvailableResourcesProviderService } from '../plan-selector/data-access/available-resources-provider.service';

@Component({
  selector: 'app-add-ons-picker',
  templateUrl: './add-ons-picker.component.html',
  styleUrls: ['./add-ons-picker.component.scss'],
})
export class AddOnsPickerComponent implements OnInit, OnDestroy {
  constructor(
    private planBuilderService: PlanBuilderService,
    private availableResourcesProviderService: AvailableResourcesProviderService
  ) {}

  isFacturationCycleMonthly: boolean = true;
  availableAddOns: addOnDetails[] = [];
  selectedAddOnIds: number[] = [];

  ngOnInit(): void {
    this.isFacturationCycleMonthly =
      this.planBuilderService.isFacturationCycleMonthly;
    this.availableAddOns =
      this.availableResourcesProviderService.getAvailableAddOns();
    this.selectedAddOnIds = [];
    this.planBuilderService.selectedAddOns = [];
  }

  ngOnDestroy(): void {
    this.selectedAddOnIds.sort();
    this.selectedAddOnIds.map((addOnId) =>
      this.planBuilderService.selectedAddOns.push(
        this.availableAddOns.find((addOn) => addOn.id === addOnId)!
      )
    );
  }

  selectAddOn(selectedAddOnId: number) {
    if (this.selectedAddOnIds.includes(selectedAddOnId)) {
      this.selectedAddOnIds = this.selectedAddOnIds.filter(
        (item) => item !== selectedAddOnId
      );
    } else {
      this.selectedAddOnIds.push(selectedAddOnId);
    }
  }

  isAddOnSelected(selectedAddOnId: number) {
    return this.selectedAddOnIds.includes(selectedAddOnId);
  }
}
