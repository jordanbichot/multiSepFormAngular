import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  step: number = 1;

  NextButtonText: string = 'Next Step';
  isBackButtonEnabled: boolean = false;
  isNextButtonEnabled: boolean = true;
  isLastStep: boolean = false;

  personalInfoName: string = '';
  personalInfoEmail: string = '';
  personalInfoPhone: string = '';
  personalInfoValid: boolean = false;

  planSelectorPlanType: string = '';
  planSelectorIsFacturationCycleMonthly: boolean = true;
  planSelectorIsFacturationCycleYearly: boolean = true;
  planSelectorPlanBasicCost: number = 0;
  planSelectorIsAnyPlanSelected: boolean = false;

  addOnSelectorOnlineServiceSelected: boolean = false;
  addOnSelectorLargerStorageSelected: boolean = false;
  addOnSelectorCustomizableProfileSelected: boolean = false;

  addOnsCost: number = 0;
  planBasicCost: number = 0;
  totalCost: number = 0;

  planCostMonthly: { [key: string]: number } = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  generateAddOnsCost() {
    this.addOnsCost = 0;
    if (this.addOnSelectorOnlineServiceSelected) {
      this.addOnsCost += 1;
    }
    if (this.addOnSelectorLargerStorageSelected) {
      this.addOnsCost += 2;
    }
    if (this.addOnSelectorCustomizableProfileSelected) {
      this.addOnsCost += 2;
    }
    if (this.planSelectorIsFacturationCycleMonthly) {
      return this.addOnsCost;
    } else {
      return this.addOnsCost * 10;
    }
  }

  generateBasicCost() {
    if (this.planSelectorIsFacturationCycleMonthly) {
      this.planSelectorPlanBasicCost =
        this.planCostMonthly[this.planSelectorPlanType];
      return this.planSelectorPlanBasicCost;
    } else {
      this.planSelectorPlanBasicCost =
        this.planCostMonthly[this.planSelectorPlanType] * 10;
      return this.planSelectorPlanBasicCost;
    }
  }

  generateTotalCost() {
    return this.generateBasicCost() + this.generateAddOnsCost();
  }

  nextStep() {
    if (this.step == 1) {
      if (!this.personalInfoValid) {
        return;
      } else {
        this.isBackButtonEnabled = true;
      }
    }
    if (this.step == 2) {
      if (!this.planSelectorIsAnyPlanSelected) {
        return;
      }
    }
    if (this.step == 3) {
      this.planBasicCost = this.generateBasicCost();
      this.addOnsCost = this.generateAddOnsCost();
      this.totalCost = this.generateTotalCost();
      this.NextButtonText = 'Confirm';
      this.isLastStep = true;
    }
    if (this.step == 4) {
      this.isNextButtonEnabled = false;
      this.isBackButtonEnabled = false;
    }
    this.step++;
  }

  previousStep() {
    if (this.step == 2) {
      this.isBackButtonEnabled = false;
      this.personalInfoValid = false;
      this.planSelectorIsAnyPlanSelected = false;
    }
    if (this.step == 3) {
      this.planSelectorIsAnyPlanSelected = false;
    }
    if (this.step == 4) {
      this.addOnSelectorOnlineServiceSelected = false;
      this.addOnSelectorLargerStorageSelected = false;
      this.addOnSelectorCustomizableProfileSelected = false;
      this.NextButtonText = 'Next Step';
      this.isLastStep = false;
    }
    this.step--;
  }

  recieveName(childName: string) {
    this.personalInfoName = childName;
  }
  recieveEmail(childEmail: string) {
    this.personalInfoEmail = childEmail;
  }
  recievePhone(childPhone: string) {
    this.personalInfoPhone = childPhone;
  }

  recieveValidity(childValidity: boolean) {
    this.personalInfoValid = childValidity;
  }

  recievePlanType(planType: string) {
    this.planSelectorPlanType = planType;
  }

  recieveIsFacturationCycleMonthly(IsFacturationCycleMonthly: boolean) {
    this.planSelectorIsFacturationCycleMonthly = IsFacturationCycleMonthly;
  }

  recieveIsFacturationCycleYearly(IsFacturationCycleYearly: boolean) {
    this.planSelectorIsFacturationCycleYearly = IsFacturationCycleYearly;
  }

  recievePlanSelectorValidity(isValid: boolean) {
    this.planSelectorIsAnyPlanSelected = isValid;
  }

  recieveAddOnOnlineService(isOnlineServiceSelected: boolean) {
    this.addOnSelectorOnlineServiceSelected = isOnlineServiceSelected;
  }

  recieveAddOnLargerStorage(isLargerStorageSelected: boolean) {
    this.addOnSelectorLargerStorageSelected = isLargerStorageSelected;
  }

  recieveAddOnCustomizableProfile(isCustomizableProfileSelected: boolean) {
    this.addOnSelectorCustomizableProfileSelected =
      isCustomizableProfileSelected;
  }

  recieveFinishingUpChangePlan() {
    this.addOnSelectorOnlineServiceSelected = false;
    this.addOnSelectorLargerStorageSelected = false;
    this.addOnSelectorCustomizableProfileSelected = false;
    this.NextButtonText = 'Next Step';
    this.planSelectorIsAnyPlanSelected = false;
    this.isLastStep = false;
    this.step = 2;
  }
}
