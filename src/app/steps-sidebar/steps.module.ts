import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsSidebarComponent } from './steps-sidebar.component';
import { StepControlService } from './data-access/step-control.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [StepsSidebarComponent],
  imports: [AppRoutingModule, CommonModule, BrowserModule],
  exports: [StepsSidebarComponent],
  providers: [StepControlService],
})
export class StepsModule {}
