import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { PlanBuilderServiceService } from '../../services/plan-builder-service.service';
import { addOnDetails } from '../../models/addOnDetails';

@Component({
  selector: 'app-add-ons-picker',
  templateUrl: './add-ons-picker.component.html',
  styleUrls: ['./add-ons-picker.component.scss'],
})
export class AddOnsPickerComponent implements OnInit, OnDestroy {
  constructor(private planBuilderService: PlanBuilderServiceService) {}

  isFacturationCycleMonthly: boolean = true;
  isFacturationCycleYearly: boolean = false;
  availableAddOns: addOnDetails[] = [];
  selectedAddOnIndexes: number[] = [];

  ngOnInit(): void {
    this.isFacturationCycleMonthly =
      this.planBuilderService.selectedPlan.basicPlan.facturationCycle ===
      'Monthly'
        ? true
        : false;
    this.isFacturationCycleYearly = !this.isFacturationCycleMonthly;
    this.availableAddOns = this.planBuilderService.availableAddOns;

    this.planBuilderService.selectedPlan.addOns = [];
  }

  ngOnDestroy(): void {
    this.selectedAddOnIndexes.sort();
    this.selectedAddOnIndexes.map((index) =>
      this.planBuilderService.selectedPlan.addOns.push(
        this.availableAddOns[index]
      )
    );
  }

  selectAddOn(index: number) {
    if (this.selectedAddOnIndexes.includes(index)) {
      this.selectedAddOnIndexes = this.selectedAddOnIndexes.filter(
        (item) => item !== index
      );
    } else {
      this.selectedAddOnIndexes.push(index);
    }
  }

  isAddOnSelected(index: number) {
    return this.selectedAddOnIndexes.includes(index);
  }
}
