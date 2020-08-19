import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersButtonsContainerComponent } from './users-buttons-container.component';

describe('UsersButtonsContainerComponent', () => {
  let component: UsersButtonsContainerComponent;
  let fixture: ComponentFixture<UsersButtonsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersButtonsContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersButtonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
