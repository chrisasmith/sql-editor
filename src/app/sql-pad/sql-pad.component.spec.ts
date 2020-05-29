import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlPadComponent } from './sql-pad.component';

describe('SqlPadComponent', () => {
  let component: SqlPadComponent;
  let fixture: ComponentFixture<SqlPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
