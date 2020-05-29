import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallTriangleComponent } from './ball-triangle.component';

describe('BallTriangleComponent', () => {
  let component: BallTriangleComponent;
  let fixture: ComponentFixture<BallTriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallTriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
