import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOnsPickerComponent } from './add-ons-picker.component';
import { StepHeaderModule } from '../shared/step-header/step-header.module';

@NgModule({
  declarations: [AddOnsPickerComponent],
  imports: [CommonModule, StepHeaderModule],
  exports: [AddOnsPickerComponent],
})
export class AddOnsPickerModule {}
