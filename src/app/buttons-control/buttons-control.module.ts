import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsControlComponent } from './buttons-control.component';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';

@NgModule({
  declarations: [ButtonsControlComponent],
  imports: [CommonModule],
  exports: [ButtonsControlComponent],
  providers: [StepControlService],
})
export class ButtonsControlModule {}
