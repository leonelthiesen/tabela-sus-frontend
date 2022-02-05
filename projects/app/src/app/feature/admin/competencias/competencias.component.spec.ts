import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompetenciasComponent } from './competencias.component';

describe('AdminComponent', () => {
  let component: CompetenciasComponent;
  let fixture: ComponentFixture<CompetenciasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
