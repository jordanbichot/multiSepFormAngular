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
import { Step } from './models/step-details';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss'],
})
export class StepsSidebarComponent {
  activeStep$ = this.stepControlService.currentStep$;
  public steps: Step[] = [];

  constructor(private stepControlService: StepControlService) {
    this.steps = stepControlService.steps;
  }
}
