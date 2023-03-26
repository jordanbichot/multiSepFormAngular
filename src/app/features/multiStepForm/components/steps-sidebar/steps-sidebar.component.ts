import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { StepControlServiceService } from '../../services/step-control-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-steps-sidebar',
  templateUrl: './steps-sidebar.component.html',
  styleUrls: ['./steps-sidebar.component.scss'],
})
export class StepsSidebarComponent implements OnInit, OnDestroy {
  constructor(private stepControlService: StepControlServiceService) {}
  activeStep: number = 1;
  stepSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.stepSubscription = this.stepControlService
      .getCurrentStep$()
      .subscribe((currentStep) => {
        this.activeStep = currentStep;
      });
  }

  ngOnDestroy(): void {
    this.stepSubscription.unsubscribe();
  }
}
