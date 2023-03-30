import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormsModule,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlanBuilderService } from './plan-selector/data-access/plan-builder.service';
import { StepControlService } from './steps-sidebar/data-access/step-control.service';
import { AddOnsPickerModule } from './add-ons-picker/add-ons-picker.module';
import { ButtonsControlModule } from './buttons-control/buttons-control.module';
import { FinishingUpModule } from './finishing-up/finishing-up.module';
import { PersonalInfoModule } from './personal-info/personal-info.module';
import { PlanSelectorModule } from './plan-selector/plan-selector.module';
import { StepsModule } from './steps-sidebar/steps.module';
import { ThankYouModule } from './thank-you/thank-you.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StepsModule,
    ButtonsControlModule,
    PersonalInfoModule,
    PlanSelectorModule,
    AddOnsPickerModule,
    FinishingUpModule,
    ThankYouModule,
  ],
  providers: [PlanBuilderService, StepControlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
