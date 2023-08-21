import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCharacterizationComponent } from './view-edit-characterization.component';

describe('ViewEditCharacterizationComponent', () => {
  let component: ViewEditCharacterizationComponent;
  let fixture: ComponentFixture<ViewEditCharacterizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEditCharacterizationComponent]
    });
    fixture = TestBed.createComponent(ViewEditCharacterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
