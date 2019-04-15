import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvCreateComponent } from './adv-create.component';

describe('AdvCreateComponent', () => {
  let component: AdvCreateComponent;
  let fixture: ComponentFixture<AdvCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
