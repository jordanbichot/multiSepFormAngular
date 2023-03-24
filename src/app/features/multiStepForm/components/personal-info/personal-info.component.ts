import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import personalDetails from '../../models/personalDetails';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  @Output() outputPersonalDetails = new EventEmitter<personalDetails>();
  @Output() outputName = new EventEmitter<string>();
  @Output() outputEmail = new EventEmitter<string>();
  @Output() outputPhone = new EventEmitter<string>();
  @Output() outputValidity = new EventEmitter<boolean>();

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

    this.outputValidity.emit(false);
  }

  ngOnDestroy() {
    this.FormStatusSubscription.unsubscribe();
    const details = new personalDetails(
      this.name.value!,
      this.email.value!,
      this.phone.value!
    );
    this.outputPersonalDetails.emit(details);
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

  validationChecked() {
    if (this.form.valid) {
      this.outputName.emit(this.name.value!);
      this.outputEmail.emit(this.email.value!);
      this.outputPhone.emit(this.phone.value!);
      this.outputValidity.emit(true);
    }
  }
}
