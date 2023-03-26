import { Component, Output, EventEmitter } from '@angular/core';
import { client } from './features/multiStepForm/models/clientType';
import { StepControlServiceService } from './features/multiStepForm/services/step-control-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inSelectionProcess: boolean = true;
  stepSubscription: Subscription;
  constructor(private stepControlService: StepControlServiceService) {
    this.stepSubscription = stepControlService
      .getCurrentStep$()
      .subscribe((step) => {
        if (step === 5) {
          this.inSelectionProcess = false;
          this.stepSubscription.unsubscribe();
        }
      });
  }
}
