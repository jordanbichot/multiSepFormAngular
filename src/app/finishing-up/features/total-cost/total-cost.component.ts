import { Component, OnInit } from '@angular/core';
import { PlanBuilderService } from 'src/app/plan-selector/data-access/plan-builder.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss'],
})
export class TotalCostComponent implements OnInit {
  public totalCost: number = 0;
  public isFacturationCycleMonthly$ =
    this.planBuilderService.isFacturationCycleMonthly$;

  constructor(private planBuilderService: PlanBuilderService) {}

  ngOnInit(): void {
    this.totalCost = this.planBuilderService.getTotalCost();
  }
}
