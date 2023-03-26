import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepControlServiceService {
  private currentStep: number;
  private currentStep$: Subject<number>;
  public isCurrentStepCompleted: boolean = false;

  constructor() {
    this.currentStep = 1;
    this.currentStep$ = new Subject();
  }

  public nextStep() {
    this.currentStep++;
    this.currentStep$.next(this.currentStep);
  }

  public previousStep() {
    this.currentStep--;
    this.currentStep$.next(this.currentStep);
  }

  public goToStep(stepToSet: number) {
    this.currentStep = stepToSet;
    this.currentStep$.next(this.currentStep);
  }

  public getCurrentStep$(): Observable<number> {
    return this.currentStep$.asObservable();
  }
}
