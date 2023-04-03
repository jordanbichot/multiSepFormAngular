import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAddOnsComponent } from './selected-add-ons.component';

describe('SelectedAddOnsComponent', () => {
  let component: SelectedAddOnsComponent;
  let fixture: ComponentFixture<SelectedAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedAddOnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
