import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ons-picker',
  templateUrl: './add-ons-picker.component.html',
  styleUrls: ['./add-ons-picker.component.scss'],
})
export class AddOnsPickerComponent {
  @Input() isFacturationCycleMonthly = true;
  @Input() isFacturationCycleYearly = false;
  @Output() outputIsOnlineServiceSelected = new EventEmitter<boolean>();
  @Output() outputIsLargerStorageSelected = new EventEmitter<boolean>();
  @Output() outputIsCustomizableProfileSelected = new EventEmitter<boolean>();

  isOnlineServiceSelected: boolean = false;
  isLargerStorageSelected: boolean = false;
  isCustomizableProfileSelected: boolean = false;

  selectOnlineService() {
    this.isOnlineServiceSelected = !this.isOnlineServiceSelected;
    this.outputIsOnlineServiceSelected.emit(this.isOnlineServiceSelected);
  }

  selectLargerStorage() {
    this.isLargerStorageSelected = !this.isLargerStorageSelected;
    this.outputIsLargerStorageSelected.emit(this.isLargerStorageSelected);
  }

  selectCustomizableProfile() {
    this.isCustomizableProfileSelected = !this.isCustomizableProfileSelected;
    this.outputIsCustomizableProfileSelected.emit(
      this.isCustomizableProfileSelected
    );
  }
}
