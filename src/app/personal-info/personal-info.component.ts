import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StepControlService } from '../steps-sidebar/data-access/step-control.service';
import { PlanBuilderService } from '../plan-selector/data-access/plan-builder.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  private FormStatusSubscription: Subscription = new Subscription();
  public form = new FormGroup({
    name: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{8}$'),
    ]),
  });

  constructor(
    private stepControlService: StepControlService,
    private planBuilderService: PlanBuilderService
  ) {}

  ngOnInit(): void {
    this.FormStatusSubscription = this.form.statusChanges.subscribe(() => {
      this.validationChecked();
    });
    this.stepControlService.isCurrentStepCompleted = false;
  }

  ngOnDestroy() {
    this.planBuilderService.client = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      phone: this.form.value.phone!,
    };
    this.FormStatusSubscription.unsubscribe();
  }

  validationChecked() {
    if (this.form.valid) {
      this.stepControlService.isCurrentStepCompleted = true;
    } else {
      this.stepControlService.isCurrentStepCompleted = false;
    }
  }

  getEmailErrorMessage() {
    if (this.form.controls.email.hasError('required')) {
      return 'This field is required';
    }
    return this.form.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPhoneErrorMessage() {
    if (this.form.controls.phone.hasError('required')) {
      return 'This field is required';
    }
    return this.form.controls.phone.hasError('pattern')
      ? 'Not a valid 8 digit phone number'
      : '';
  }
}
