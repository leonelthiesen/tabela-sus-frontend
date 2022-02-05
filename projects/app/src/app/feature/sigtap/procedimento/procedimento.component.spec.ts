import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcedimentoComponent } from './procedimento.component';

describe('ProcedimentoComponent', () => {
  let component: ProcedimentoComponent;
  let fixture: ComponentFixture<ProcedimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
