import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvDeleteComponent } from './adv-delete.component';

describe('AdvDeleteComponent', () => {
  let component: AdvDeleteComponent;
  let fixture: ComponentFixture<AdvDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
