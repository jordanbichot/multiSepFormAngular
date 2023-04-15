import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Step } from '../models/step-details';

@Injectable({
  providedIn: 'root',
})
export class StepControlService {
  private currentStep = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStep.asObservable();
  private isLastStep = new BehaviorSubject<boolean>(false);
  public isLastStep$ = this.isLastStep.asObservable();
  private isFormEnded = new BehaviorSubject<boolean>(false);
  public isFormEnded$ = this.isFormEnded.asObservable();

  private isNextTouched = new BehaviorSubject<boolean>(false);
  public isNextTouched$ = this.isNextTouched.asObservable();

  public isCurrentStepCompleted: boolean = false;
  public steps: Step[] = [
    {
      stepName: 'Step 1',
      stepCount: 1,
      stepDescription: 'Your info',
      header: {
        mainText: 'Personal info',
        descriptionText:
          'Please provide your name, email address, and phone number.',
      },
    },
    {
      stepName: 'Step 2',
      stepCount: 2,
      stepDescription: 'Select plan',
      header: {
        mainText: 'Select your plan',
        descriptionText: 'You have the option of monthly or yearly billing.',
      },
    },
    {
      stepName: 'Step 3',
      stepCount: 3,
      stepDescription: 'Add-ons',
      header: {
        mainText: 'Pick add-ons',
        descriptionText: 'Add-ons help enhance your gaming experience.',
      },
    },
    {
      stepName: 'Step 4',
      stepCount: 4,
      stepDescription: 'Summary',
      header: {
        mainText: 'Finishing up',
        descriptionText: 'Double-check everything looks OK before confirming.',
      },
    },
  ];

  constructor(private routerControl: Router) {}

  public getStepInfo(stepNumber: number) {
    return this.steps[stepNumber - 1];
  }

  public nextStep() {
    if (this.isCurrentStepCompleted) {
      this.currentStep.next(this.currentStep.value + 1);
      this.updateRoutes();

      if (this.currentStep.value === 4) {
        this.isLastStep.next(true);
      }
      if (this.currentStep.value === 5) {
        this.isFormEnded.next(true);
      }
    }
    if (this.currentStep.value === 1) {
      this.isNextTouched.next(true);
    }
  }

  public previousStep() {
    this.currentStep.next(this.currentStep.value - 1);
    this.updateRoutes();

    if (this.currentStep.value === 3) {
      this.isLastStep.next(false);
    }

    if (this.currentStep.value === 1) {
      this.isNextTouched.next(false);
    }
  }

  public goToStep(stepToSet: number) {
    this.currentStep.next(stepToSet);
    this.updateRoutes();
    this.isLastStep.next(false);
  }

  private updateRoutes() {
    if (this.currentStep.value === 1) {
      this.routerControl.navigate(['']);
    }
    if (this.currentStep.value === 2) {
      this.routerControl.navigate(['plan-selection']);
    }
    if (this.currentStep.value === 3) {
      this.routerControl.navigate(['add-ons-selection']);
    }
    if (this.currentStep.value === 4) {
      this.routerControl.navigate(['finishing-up']);
    }
    if (this.currentStep.value === 5) {
      this.routerControl.navigate(['thank-you']);
    }
  }
}
