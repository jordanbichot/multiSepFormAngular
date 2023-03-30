import { Injectable } from '@angular/core';
import { basicPlanDetails } from '../models/basic-plan-details';
import { addOnDetails } from 'src/app/add-ons-picker/models/addOnDetails';
import { client } from 'src/app/personal-info/models/clientType';

@Injectable({
  providedIn: 'root',
})
export class PlanBuilderService {
  public client: client = { name: null, phone: null, email: null };
  public selectedPlan: basicPlanDetails = {
    id: -1,
    planName: '',
    price: 0,
    srcURL: '',
  };
  public isFacturationCycleMonthly: boolean = true;
  public selectedAddOns: addOnDetails[] = [];

  public getBasicCost() {
    return this.isFacturationCycleMonthly
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
      (this.isFacturationCycleMonthly ? addOnsCost : addOnsCost * 10);
    return totalCost;
  }
}
