import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryItemComponent } from './user-directory-item.component';

describe('UserDirectoryItemComponent', () => {
  let component: UserDirectoryItemComponent;
  let fixture: ComponentFixture<UserDirectoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
