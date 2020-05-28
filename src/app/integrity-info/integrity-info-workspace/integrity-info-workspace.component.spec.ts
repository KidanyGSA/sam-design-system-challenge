import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityInfoWorkspaceComponent } from './integrity-info-workspace.component';

describe('IntegrityInfoWorkspaceComponent', () => {
  let component: IntegrityInfoWorkspaceComponent;
  let fixture: ComponentFixture<IntegrityInfoWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityInfoWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityInfoWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
