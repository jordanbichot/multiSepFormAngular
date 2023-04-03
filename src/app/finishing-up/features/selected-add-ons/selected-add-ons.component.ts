import { Component, OnInit } from '@angular/core';
import { AddOnDetails } from 'src/app/add-ons-picker/models/add-on-details';
import { PlanBuilderService } from 'src/app/plan-selector/data-access/plan-builder.service';

@Component({
  selector: 'app-selected-add-ons',
  templateUrl: './selected-add-ons.component.html',
  styleUrls: ['./selected-add-ons.component.scss'],
})
export class SelectedAddOnsComponent implements OnInit {
  public selectedAddOns: AddOnDetails[] = [];
  public isFacturationCycleMonthly$ =
    this.planBuilderService.isFacturationCycleMonthly$;
  constructor(private planBuilderService: PlanBuilderService) {}

  ngOnInit(): void {
    this.selectedAddOns = this.planBuilderService.selectedAddOns;
  }
}
