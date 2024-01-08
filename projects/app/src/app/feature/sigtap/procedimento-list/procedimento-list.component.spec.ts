import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcedimentoListComponent } from './procedimento-list.component';

describe('ProcedimentoListComponent', () => {
  let component: ProcedimentoListComponent;
  let fixture: ComponentFixture<ProcedimentoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ProcedimentoListComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimentoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
