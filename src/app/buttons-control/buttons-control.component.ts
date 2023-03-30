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
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@Component({
  selector: 'app-buttons-control',
  templateUrl: './buttons-control.component.html',
  styleUrls: ['./buttons-control.component.scss'],
})
export class ButtonsControlComponent {
  public activeStep$ = this.stepControlService.currentStep$;
  public nextButtonText: 'Next Step' | 'Confirm' =
    Number(this.activeStep$) !== 4 ? 'Next Step' : 'Confirm';
  public isBackButtonEnabled: boolean = Number(this.activeStep$) >= 2;
  public isLastStep: boolean = Number(this.activeStep$) !== 4;

  constructor(
    private stepControlService: StepControlService,
    private routerControl: Router
  ) {}

  public nextStep() {
    this.stepControlService.nextStep();
  }

  public previousStep() {
    this.stepControlService.previousStep();
  }
}
