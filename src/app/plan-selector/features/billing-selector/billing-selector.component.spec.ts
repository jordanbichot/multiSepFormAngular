import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSelectorComponent } from './billing-selector.component';

describe('BillingSelectorComponent', () => {
  let component: BillingSelectorComponent;
  let fixture: ComponentFixture<BillingSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
