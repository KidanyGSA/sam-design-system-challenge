import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityInfoWsItemComponent } from './integrity-info-ws-item.component';

describe('IntegrityInfoWsItemComponent', () => {
  let component: IntegrityInfoWsItemComponent;
  let fixture: ComponentFixture<IntegrityInfoWsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrityInfoWsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrityInfoWsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
