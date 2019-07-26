import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishDetaileComponent } from './dish-detaile.component';

describe('DishDetaileComponent', () => {
  let component: DishDetaileComponent;
  let fixture: ComponentFixture<DishDetaileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishDetaileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
