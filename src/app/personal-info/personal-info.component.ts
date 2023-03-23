import { Component, OnInit, OnDestroy } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  @Output() outputName = new EventEmitter<string>();
  @Output() outputEmail = new EventEmitter<string>();
  @Output() outputPhone = new EventEmitter<string>();
  @Output() outputValidity = new EventEmitter<boolean>();

  EmailChanges: Subscription = new Subscription();
  PhoneChanges: Subscription = new Subscription();

  name = new FormControl('', []);
  email = new FormControl('', [Validators.required, Validators.email]); //^((\\+91-?)|0)?[0-9]{10}$
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{8}$'),
  ]);

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
    if (this.phone.valid && this.email.valid) {
      this.outputName.emit(this.name.value!);
      this.outputEmail.emit(this.email.value!);
      this.outputPhone.emit(this.phone.value!);
      this.outputValidity.emit(true);
    }
  }

  ngOnInit(): void {
    this.EmailChanges = this.email.statusChanges.subscribe(() => {
      this.validationChecked();
    });
    this.PhoneChanges = this.phone.statusChanges.subscribe(() => {
      this.validationChecked();
    });
  }

  ngOnDestroy() {
    this.EmailChanges.unsubscribe();
    this.PhoneChanges.unsubscribe();
  }
}
