import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepControlService } from './steps-sidebar/data-access/step-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFormEnded$ = this.stepControlService.isFormEnded$;
  constructor(private stepControlService: StepControlService) {}
}
