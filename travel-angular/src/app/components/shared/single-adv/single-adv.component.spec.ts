import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdvComponent } from './single-adv.component';

describe('SingleAdvComponent', () => {
  let component: SingleAdvComponent;
  let fixture: ComponentFixture<SingleAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
