import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsSidebarComponent } from './steper.component';

describe('StepsSidebarComponent', () => {
  let component: StepsSidebarComponent;
  let fixture: ComponentFixture<StepsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepsSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
