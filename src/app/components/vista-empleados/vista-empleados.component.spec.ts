import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpleadosComponent } from './vista-empleados.component';

describe('VistaEmpleadosComponent', () => {
  let component: VistaEmpleadosComponent;
  let fixture: ComponentFixture<VistaEmpleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEmpleadosComponent]
    });
    fixture = TestBed.createComponent(VistaEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
