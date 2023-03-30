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
    if (Number(this.currentStep) === 1) {
      this.routerControl.navigate(['']);
    }
    if (Number(this.currentStep) === 2) {
      this.routerControl.navigate(['planSelection']);
    }
    if (Number(this.currentStep) === 3) {
      this.routerControl.navigate(['addOnsSelection']);
    }
    if (Number(this.currentStep) === 4) {
      this.routerControl.navigate(['finishingUp']);
    }
    if (Number(this.currentStep) === 5) {
      this.routerControl.navigate(['thankYou']);
    }
  }
}
