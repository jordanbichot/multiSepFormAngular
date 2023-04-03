import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info.component';
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
import { StepHeaderModule } from '../shared/step-header/step-header.module';

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
    StepHeaderModule,
  ],
  exports: [PersonalInfoComponent],
})
export class PersonalInfoModule {}
