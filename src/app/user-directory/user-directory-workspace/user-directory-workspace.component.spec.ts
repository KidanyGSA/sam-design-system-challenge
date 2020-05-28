import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryWorkspaceComponent } from './user-directory-workspace.component';

describe('UserDirectoryWorkspaceComponent', () => {
  let component: UserDirectoryWorkspaceComponent;
  let fixture: ComponentFixture<UserDirectoryWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectoryWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectoryWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
