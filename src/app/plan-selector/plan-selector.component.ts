import { Component } from '@angular/core';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
@Component({
  selector: 'app-plan-selector',
  templateUrl: './plan-selector.component.html',
  styleUrls: ['./plan-selector.component.scss'],
})
export class PlanSelectorComponent {
  public stepInfo = this.stepControlService.getStepInfo(2);

  constructor(private stepControlService: StepControlService) {}
}
