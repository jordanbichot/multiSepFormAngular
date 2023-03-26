import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StepsSidebarComponent } from './features/multiStepForm/components/steps-sidebar/steps-sidebar.component';
import { PersonalInfoComponent } from './features/multiStepForm/components/personal-info/personal-info.component';
import { PlanSelectorComponent } from './features/multiStepForm/components/plan-selector/plan-selector.component';
import { AddOnsPickerComponent } from './features/multiStepForm/components/add-ons-picker/add-ons-picker.component';
import { FinishingUpComponent } from './features/multiStepForm/components/finishing-up/finishing-up.component';
import { ThankYouComponent } from './features/multiStepForm/components/thank-you/thank-you.component';

import {
  FormsModule,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonsControlComponent } from './features/multiStepForm/components/buttons-control/buttons-control.component';
import { PlanBuilderServiceService } from './features/multiStepForm/services/plan-builder-service.service';
import { StepControlServiceService } from './features/multiStepForm/services/step-control-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StepsSidebarComponent,
    PersonalInfoComponent,
    PlanSelectorComponent,
    AddOnsPickerComponent,
    FinishingUpComponent,
    ThankYouComponent,
    ButtonsControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [PlanBuilderServiceService, StepControlServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
