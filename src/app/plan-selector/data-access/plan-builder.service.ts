import { Injectable } from '@angular/core';
import { BasicPlanDetails } from '../models/basic-plan-details';
import { AddOnDetails } from 'src/app/add-ons-picker/models/add-on-details';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from 'src/app/personal-info/models/client';
import { AvailableResourcesProviderService } from './available-resources-provider.service';

@Injectable({
  providedIn: 'root',
})
export class PlanBuilderService {
  public client: Client = { name: null, phone: null, email: null };
  public selectedPlan: BasicPlanDetails = {
    id: -1,
    planName: '',
    price: 0,
    srcUrl: '',
  };
  private isFacturationCycleMonthly = new BehaviorSubject<boolean>(true);
  public isFacturationCycleMonthly$ =
    this.isFacturationCycleMonthly.asObservable();

  public selectedAddOns: AddOnDetails[] = [];

  constructor(
    private availableResourcesProviderService: AvailableResourcesProviderService
  ) {}

  public toggleFacturationCycle() {
    this.isFacturationCycleMonthly.next(!this.isFacturationCycleMonthly.value);
  }

  public setFacturationCycleToMonthly() {
    this.isFacturationCycleMonthly.next(true);
  }

  public getBasicCost() {
    return this.isFacturationCycleMonthly.value
      ? this.selectedPlan.price
      : this.selectedPlan.price * 10;
  }

  public getTotalCost() {
    let addOnsCost = 0;
    this.selectedAddOns.map((addOn) => {
      addOnsCost += addOn.cost;
    });
    let totalCost =
      this.getBasicCost() +
      (this.isFacturationCycleMonthly.value ? addOnsCost : addOnsCost * 10);
    return totalCost;
  }

  public isAddOnSelected(IdOfAddOnToCheck: number) {
    const found = this.selectedAddOns.find(
      (addOn) => addOn.id === IdOfAddOnToCheck
    );
    return found !== undefined;
  }

  public removeAddOnById(IdOfAddOnToRemove: number) {
    this.selectedAddOns = this.selectedAddOns.filter(
      (addOn) => addOn.id !== IdOfAddOnToRemove
    );
  }

  public addAddOnById(IdOfAddOnToAdd: number) {
    let addOnToAdd = this.availableResourcesProviderService
      .getAvailableAddOns()
      .find((addOn) => addOn.id === IdOfAddOnToAdd);
    this.selectedAddOns = [...this.selectedAddOns, addOnToAdd!];
  }

  public sortAddOns() {
    this.selectedAddOns = this.selectedAddOns.sort((AddOn1, AddOn2) =>
      AddOn1.id > AddOn2.id ? 1 : AddOn1.id < AddOn2.id ? -1 : 0
    );
  }
}
