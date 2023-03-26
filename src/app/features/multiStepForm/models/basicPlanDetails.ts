import { facturationCycle } from './facturationCycleType';
import { planDetails } from './planDetails';

export class basicPlanDetails {
  constructor(
    selectedPlan: string = '',
    selectedFacturationCycle: facturationCycle = 'Monthly',
    selectedSrcURL?: string
  ) {
    this.plan = selectedPlan;
    this.facturationCycle = selectedFacturationCycle;
    this.generateCost();
    this.srcURL = selectedSrcURL;
  }

  public plan: string = '';
  public facturationCycle: facturationCycle = 'Monthly';
  public monthlyCost: number = 0;
  public yearlyCost: number = 0;
  public srcURL: string | undefined;

  private planCostMonthly: { [key: string]: number } = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  private generateCost() {
    this.monthlyCost = this.planCostMonthly[this.plan];
    this.yearlyCost = this.monthlyCost * 10;
  }

  public setPlanType(planToSet: string) {
    this.plan = planToSet;
    this.generateCost();
  }

  public setFacturationType(facturationCycleToSet: facturationCycle) {
    this.facturationCycle = facturationCycleToSet;
  }

  public getCost() {
    return this.facturationCycle === 'Monthly'
      ? this.monthlyCost
      : this.yearlyCost;
  }
}
