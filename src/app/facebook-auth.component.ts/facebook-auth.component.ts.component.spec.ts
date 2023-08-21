import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAuthComponentTsComponent } from './facebook-auth.component.ts.component';

describe('FacebookAuthComponentTsComponent', () => {
  let component: FacebookAuthComponentTsComponent;
  let fixture: ComponentFixture<FacebookAuthComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookAuthComponentTsComponent]
    });
    fixture = TestBed.createComponent(FacebookAuthComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
