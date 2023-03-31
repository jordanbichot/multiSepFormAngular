import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsControlComponent } from './buttons-control.component';

describe('ButtonsControlComponent', () => {
  let component: ButtonsControlComponent;
  let fixture: ComponentFixture<ButtonsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
