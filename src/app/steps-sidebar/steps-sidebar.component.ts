import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StepControlService } from './data-access/step-control.service';
import { step } from './models/step-details';

@Component({
  selector: 'app-steps-sidebar',
  templateUrl: './steps-sidebar.component.html',
  styleUrls: ['./steps-sidebar.component.scss'],
})
export class StepsSidebarComponent {
  activeStep$ = this.stepControlService.currentStep$;
  public steps: step[];

  constructor(private stepControlService: StepControlService) {
    this.steps = [
      {
        stepName: 'Step 1',
        stepCount: 1,
        stepDescription: 'Your info',
      },
      {
        stepName: 'Step 2',
        stepCount: 2,
        stepDescription: 'Select plan',
      },
      {
        stepName: 'Step 3',
        stepCount: 3,
        stepDescription: 'Add-ons',
      },
      {
        stepName: 'Step 4',
        stepCount: 4,
        stepDescription: 'Summary',
      },
    ];
  }
}
