import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsSidebarComponent } from './steper.component';
import { StepControlService } from './data-access/step-control.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [StepsSidebarComponent],
  imports: [AppRoutingModule, CommonModule],
  exports: [StepsSidebarComponent],
})
export class StepsModule {}
