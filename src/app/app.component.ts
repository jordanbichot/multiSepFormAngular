import { Component, Output, EventEmitter } from '@angular/core';
import personalDetails from './features/multiStepForm/models/personalDetails';

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
    if (this.planSelectorIsFacturationCycleYearly) {
      this.addOnsCost *= 10;
    }

    return this.addOnsCost;
  }

  generateBasicCost() {
    this.planSelectorPlanBasicCost = this.planSelectorIsFacturationCycleMonthly
      ? this.planCostMonthly[this.planSelectorPlanType]
      : this.planCostMonthly[this.planSelectorPlanType] * 10;

    return this.planSelectorPlanBasicCost;
  }

  generateTotalCost() {
    this.totalCost = this.generateBasicCost() + this.generateAddOnsCost();
    return this.totalCost;
  }

  recieveCurrentStep(currentStep: number) {
    this.step = currentStep;
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

  recievePersonalDetails(details: personalDetails) {
    console.log(details.name);
    console.log(details.email);
    console.log(details.phone);
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
