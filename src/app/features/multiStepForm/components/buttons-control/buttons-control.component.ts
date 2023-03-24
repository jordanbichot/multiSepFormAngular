import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-control',
  templateUrl: './buttons-control.component.html',
  styleUrls: ['./buttons-control.component.scss'],
})
export class ButtonsControlComponent {
  @Input() isPersonalInfoValid: boolean = false;
  @Input() isPlanSelectorValid: boolean = false;
  @Output() outputStep = new EventEmitter<number>();

  step: number = 1;

  nextButtonText: string = 'Next Step';
  isBackButtonEnabled: boolean = false;
  isNextButtonEnabled: boolean = true;
  isLastStep: boolean = false;

  nextStep() {
    if (this.step === 1) {
      if (!this.isPersonalInfoValid) {
        return;
      } else {
        this.isBackButtonEnabled = true;
      }
    }
    if (this.step === 2) {
      if (!this.isPlanSelectorValid) {
        return;
      }
    }
    if (this.step === 3) {
      this.nextButtonText = 'Confirm';
      this.isLastStep = true;
    }
    if (this.step === 4) {
      this.isNextButtonEnabled = false;
      this.isBackButtonEnabled = false;
    }
    this.step++;
    this.outputStep.emit(this.step);
  }

  previousStep() {
    if (this.step === 2) {
      this.isBackButtonEnabled = false;
    }
    if (this.step === 4) {
      this.nextButtonText = 'Next Step';
      this.isLastStep = false;
    }
    this.step--;
    this.outputStep.emit(this.step);
  }
}
