import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcedimentoDetalheComponent } from './procedimento-detalhe.component';

describe('ProcedimentoDetalheComponent', () => {
  let component: ProcedimentoDetalheComponent;
  let fixture: ComponentFixture<ProcedimentoDetalheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ProcedimentoDetalheComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
