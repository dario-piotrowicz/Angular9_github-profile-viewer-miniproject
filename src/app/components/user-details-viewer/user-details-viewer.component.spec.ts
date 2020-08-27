import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsViewerComponent } from './user-details-viewer.component';

describe('UserDetailsViewerComponent', () => {
  let component: UserDetailsViewerComponent;
  let fixture: ComponentFixture<UserDetailsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
