import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemCharacterizationFormComponent } from './system-characterization-form.component';

describe('SystemCharacterizationFormComponent', () => {
  let component: SystemCharacterizationFormComponent;
  let fixture: ComponentFixture<SystemCharacterizationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemCharacterizationFormComponent]
    });
    fixture = TestBed.createComponent(SystemCharacterizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
