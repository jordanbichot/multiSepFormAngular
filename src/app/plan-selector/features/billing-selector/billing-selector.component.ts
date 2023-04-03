import { Component, OnInit } from '@angular/core';
import { PlanBuilderService } from '../../data-access/plan-builder.service';

@Component({
  selector: 'app-billing-selector',
  templateUrl: './billing-selector.component.html',
  styleUrls: ['./billing-selector.component.scss'],
})
export class BillingSelectorComponent implements OnInit {
  public isFacturationStatusMonthly: boolean = true;

  constructor(private planBuilderService: PlanBuilderService) {}

  ngOnInit(): void {
    this.planBuilderService.setFacturationCycleToMonthly();
  }

  toggleFacturationCycle() {
    this.planBuilderService.toggleFacturationCycle();
    this.isFacturationStatusMonthly = !this.isFacturationStatusMonthly;
  }
}
