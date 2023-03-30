import { Injectable } from '@angular/core';
import { basicPlanDetails } from '../models/basic-plan-details';
import { addOnDetails } from 'src/app/add-ons-picker/models/addOnDetails';

@Injectable({
  providedIn: 'root',
})
export class AvailableResourcesProviderService {
  private availablePlans: basicPlanDetails[] = [];
  private availableAddOns: addOnDetails[] = [];

  constructor() {
    this.availableAddOns.push({
      id: 0,
      name: 'Online service',
      description: 'Access to multiplayer games',
      cost: 1,
    });
    this.availableAddOns.push({
      id: 1,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      cost: 2,
    });
    this.availableAddOns.push({
      id: 2,
      name: 'Customizable profile',
      description: 'Custom theme on your profile',
      cost: 2,
    });

    this.availablePlans.push({
      id: 0,
      planName: 'Arcade',
      price: 9,
      srcURL: '../../../../../assets/images/icon-arcade.svg',
      disccountText: '2 months free',
    });
    this.availablePlans.push({
      id: 1,
      planName: 'Advanced',
      price: 12,
      srcURL: '../../../../../assets/images/icon-advanced.svg',
      disccountText: '2 months free',
    });
    this.availablePlans.push({
      id: 2,
      planName: 'Pro',
      price: 15,
      srcURL: '../../../../../assets/images/icon-pro.svg',
      disccountText: '2 months free',
    });
  }

  public getAvailablePlans() {
    return this.availablePlans;
  }

  public getAvailableAddOns() {
    return this.availableAddOns;
  }

  public getPlanYearlyCost(plan: basicPlanDetails) {
    return plan.price * 10;
  }

  public getPlanById(planId: number) {
    return this.availablePlans.find((plan) => plan.id === planId);
  }
}
