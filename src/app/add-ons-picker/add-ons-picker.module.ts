import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOnsPickerComponent } from './add-ons-picker.component';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';

@NgModule({
  declarations: [AddOnsPickerComponent],
  imports: [CommonModule],
  exports: [AddOnsPickerComponent],
  providers: [PlanBuilderService],
})
export class AddOnsPickerModule {}
