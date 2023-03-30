import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsPickerComponent } from './add-ons-picker.component';

describe('AddOnsPickerComponent', () => {
  let component: AddOnsPickerComponent;
  let fixture: ComponentFixture<AddOnsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnsPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
