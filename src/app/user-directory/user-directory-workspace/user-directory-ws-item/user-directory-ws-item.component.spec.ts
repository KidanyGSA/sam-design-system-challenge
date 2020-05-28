import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDirectoryWsItemComponent } from './user-directory-ws-item.component';

describe('UserDirectoryWsItemComponent', () => {
  let component: UserDirectoryWsItemComponent;
  let fixture: ComponentFixture<UserDirectoryWsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDirectoryWsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDirectoryWsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
