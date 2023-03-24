import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-steps-sidebar',
  templateUrl: './steps-sidebar.component.html',
  styleUrls: ['./steps-sidebar.component.scss'],
})
export class StepsSidebarComponent {
  @Input() activeStep = 0;
}
