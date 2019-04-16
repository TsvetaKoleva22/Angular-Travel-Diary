import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAllComponent } from './cat-all.component';

describe('CatAllComponent', () => {
  let component: CatAllComponent;
  let fixture: ComponentFixture<CatAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
