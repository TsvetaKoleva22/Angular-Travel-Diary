import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundAdvComponent } from './found-adv.component';

describe('FoundAdvComponent', () => {
  let component: FoundAdvComponent;
  let fixture: ComponentFixture<FoundAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
