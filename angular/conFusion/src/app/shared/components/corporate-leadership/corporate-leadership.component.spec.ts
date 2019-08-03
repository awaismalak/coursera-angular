import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLeadershipComponent } from './corporate-leadership.component';

describe('CorporateLeadershipComponent', () => {
  let component: CorporateLeadershipComponent;
  let fixture: ComponentFixture<CorporateLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
