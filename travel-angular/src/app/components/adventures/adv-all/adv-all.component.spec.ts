import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvAllComponent } from './adv-all.component';

describe('AdvAllComponent', () => {
  let component: AdvAllComponent;
  let fixture: ComponentFixture<AdvAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
