import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAuthComponentTsComponent } from './google-auth.component.ts.component';

describe('GoogleAuthComponentTsComponent', () => {
  let component: GoogleAuthComponentTsComponent;
  let fixture: ComponentFixture<GoogleAuthComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleAuthComponentTsComponent]
    });
    fixture = TestBed.createComponent(GoogleAuthComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
