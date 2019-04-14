import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAdvsComponent } from './my-advs.component';

describe('MyAdvsComponent', () => {
  let component: MyAdvsComponent;
  let fixture: ComponentFixture<MyAdvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAdvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
