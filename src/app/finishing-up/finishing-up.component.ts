import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss'],
})
export class FinishingUpComponent implements OnInit {
  @Input() selectedPlan = '';
  @Input() isFacturationCycleMonthly = true;
  @Input() isOnlineServiceSelected = false;
  @Input() isLargerStorageSelected = false;
  @Input() isCustomizableProfileSelected = false;
  selectedFacturationCycle: string = 'monthly';
  costTextEnding: string = '/mo';
  totalCostTextPer: string = 'month';
  @Input() planBasicCost = 0;
  @Input() totalCost = 0;
  @Output() outputChangePlan = new EventEmitter<void>();

  changePlan() {
    this.outputChangePlan.emit();
  }

  ngOnInit(): void {
    if (!this.isFacturationCycleMonthly) {
      this.costTextEnding = '/yr';
      this.totalCostTextPer = 'year';
      this.selectedFacturationCycle = 'yearly';
    }
  }
}
