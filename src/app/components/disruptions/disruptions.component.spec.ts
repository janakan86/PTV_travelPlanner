import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptionsComponent } from './disruptions.component';

describe('DisruptionsComponent', () => {
  let component: DisruptionsComponent;
  let fixture: ComponentFixture<DisruptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisruptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisruptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
