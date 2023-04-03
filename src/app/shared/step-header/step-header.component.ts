import { Component, Input } from '@angular/core';
import { Header } from '../models/header';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
})
export class StepHeaderComponent {
  @Input() stepText: Header = { mainText: '', descriptionText: '' };
}
