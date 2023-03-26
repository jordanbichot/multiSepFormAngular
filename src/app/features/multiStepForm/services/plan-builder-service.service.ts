import { Injectable } from '@angular/core';
import { planDetails } from '../models/planDetails';
import { addOnDetails } from '../models/addOnDetails';
import { basicPlanDetails } from '../models/basicPlanDetails';

@Injectable({
  providedIn: 'root',
})
export class PlanBuilderServiceService {
  constructor() {
    this.availableAddOns.push(
      new addOnDetails('Online service', 'Access to multiplayer games', 1, 10)
    );
    this.availableAddOns.push(
      new addOnDetails('Larger storage', 'Extra 1TB of cloud save', 2, 20)
    );
    this.availableAddOns.push(
      new addOnDetails(
        'Customizable profile',
        'Custom theme on your profile',
        2,
        20
      )
    );

    this.availableMonthlyPlans.push(
      new basicPlanDetails(
        'Arcade',
        'Monthly',
        '../../../../../assets/images/icon-arcade.svg'
      )
    );
    this.availableMonthlyPlans.push(
      new basicPlanDetails(
        'Advanced',
        'Monthly',
        '../../../../../assets/images/icon-advanced.svg'
      )
    );
    this.availableMonthlyPlans.push(
      new basicPlanDetails(
        'Pro',
        'Monthly',
        '../../../../../assets/images/icon-pro.svg'
      )
    );

    this.availableYearlyPlans.push(
      new basicPlanDetails(
        'Arcade',
        'Yearly',
        '../../../../../assets/images/icon-arcade.svg'
      )
    );
    this.availableYearlyPlans.push(
      new basicPlanDetails(
        'Advanced',
        'Yearly',
        '../../../../../assets/images/icon-advanced.svg'
      )
    );
    this.availableYearlyPlans.push(
      new basicPlanDetails(
        'Pro',
        'Yearly',
        '../../../../../assets/images/icon-pro.svg'
      )
    );
  }

  public selectedPlan: planDetails = new planDetails();
  public availableAddOns: addOnDetails[] = [];
  public availableMonthlyPlans: basicPlanDetails[] = [];
  public availableYearlyPlans: basicPlanDetails[] = [];
}
