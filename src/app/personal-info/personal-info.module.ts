import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info.component';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PersonalInfoComponent],
  providers: [StepControlService, PlanBuilderService],
})
export class PersonalInfoModule {}
