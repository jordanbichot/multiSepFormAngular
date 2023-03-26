import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import { StepControlServiceService } from '../../services/step-control-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buttons-control',
  templateUrl: './buttons-control.component.html',
  styleUrls: ['./buttons-control.component.scss'],
})
export class ButtonsControlComponent implements OnInit, OnDestroy {
  constructor(
    private stepControlService: StepControlServiceService,
    private routerControl: Router
  ) {}

  nextButtonText: 'Next Step' | 'Confirm' = 'Next Step';
  step: number = 1;
  isBackButtonEnabled: boolean = false;
  isNextButtonEnabled: boolean = true;
  isLastStep: boolean = false;

  stepSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.stepSubscription = this.stepControlService
      .getCurrentStep$()
      .subscribe((currentStep) => {
        this.step = currentStep;
        this.nextButtonText = this.step === 4 ? 'Confirm' : 'Next Step';
        this.isLastStep = this.step === 4;

        if (this.step === 1) {
          this.routerControl.navigate(['']);
        }
        if (this.step === 2) {
          this.routerControl.navigate(['planSelection']);
        }
        if (this.step === 3) {
          this.routerControl.navigate(['addOnsSelection']);
        }
        if (this.step === 4) {
          this.routerControl.navigate(['finishingUp']);
        }
        if (this.step === 5) {
          this.routerControl.navigate(['thankYou']);
        }
      });
  }

  ngOnDestroy(): void {
    this.stepSubscription.unsubscribe();
  }

  nextStep() {
    if (this.step === 1) {
      if (!this.stepControlService.isCurrentStepCompleted) {
        return;
      } else {
        this.isBackButtonEnabled = true;
      }
    }
    if (this.step === 2) {
      if (!this.stepControlService.isCurrentStepCompleted) {
        return;
      }
    }
    this.stepControlService.nextStep();
  }

  previousStep() {
    if (this.step === 2) {
      this.isBackButtonEnabled = false;
    }
    this.stepControlService.previousStep();
  }
}
