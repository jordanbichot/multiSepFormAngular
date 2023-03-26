import { addOnDetails } from './addOnDetails';
import { basicPlanDetails } from './basicPlanDetails';
import { client } from './clientType';

export class planDetails extends basicPlanDetails {
  constructor() {
    super();
  }

  public planClient: client = { name: '', email: '', phone: '' };
  public basicPlan: basicPlanDetails = new basicPlanDetails();
  public addOns: addOnDetails[] = [];
  public getTotalCost() {
    let basicCost = this.basicPlan.getCost();

    let addOnsCost = 0;
    if (this.basicPlan.facturationCycle === 'Monthly') {
      this.addOns.map((addOn) => (addOnsCost += addOn.addOnMonthlyCost));
    } else {
      this.addOns.map((addOn) => (addOnsCost += addOn.addOnYearlyCost));
    }
    return basicCost + addOnsCost;
  }
}
