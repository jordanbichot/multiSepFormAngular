import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepControlService {
  private currentStep = new BehaviorSubject<number>(1);
  public currentStep$ = this.currentStep.asObservable();
  public isCurrentStepCompleted: boolean = false;

  constructor(private routerControl: Router) {}

  public nextStep() {
    if (this.isCurrentStepCompleted) {
      this.currentStep.next(this.currentStep.value + 1);
      this.updateRoutes();
    }
  }

  public previousStep() {
    this.currentStep.next(this.currentStep.value - 1);
    this.updateRoutes();
  }

  public goToStep(stepToSet: number) {
    this.currentStep.next(stepToSet);
    this.updateRoutes();
  }

  private updateRoutes() {
    if (this.currentStep.value === 1) {
      this.routerControl.navigate(['']);
    }
    if (this.currentStep.value === 2) {
      this.routerControl.navigate(['planSelection']);
    }
    if (this.currentStep.value === 3) {
      this.routerControl.navigate(['addOnsSelection']);
    }
    if (this.currentStep.value === 4) {
      this.routerControl.navigate(['finishingUp']);
    }
    if (this.currentStep.value === 5) {
      this.routerControl.navigate(['thankYou']);
    }
  }
}
