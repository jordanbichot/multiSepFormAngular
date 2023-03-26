import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PlanBuilderServiceService } from '../../services/plan-builder-service.service';
import { StepControlServiceService } from '../../services/step-control-service.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  constructor(
    private stepControlService: StepControlServiceService,
    private planBuilderService: PlanBuilderServiceService
  ) {}

  FormStatusSubscription: Subscription = new Subscription();
  EmailChangesSubscription: Subscription = new Subscription();
  PhoneChangesSubscription: Subscription = new Subscription();

  form = new FormGroup({});

  name = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{8}$'),
  ]);

  ngOnInit(): void {
    this.form.addControl('name', this.name);
    this.form.addControl('email', this.email);
    this.form.addControl('phone', this.phone);
    this.FormStatusSubscription = this.form.statusChanges.subscribe(() => {
      this.validationChecked();
    });

    this.stepControlService.isCurrentStepCompleted = false;
  }

  ngOnDestroy() {
    this.planBuilderService.selectedPlan.planClient = {
      name: this.name.value!,
      email: this.email.value!,
      phone: this.phone.value!,
    };
    this.FormStatusSubscription.unsubscribe();
  }

  validationChecked() {
    if (this.form.valid) {
      this.stepControlService.isCurrentStepCompleted = true;
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'This field is required';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'This field is required';
    }
    return this.phone.hasError('pattern')
      ? 'Not a valid 8 digit phone number'
      : '';
  }
}
