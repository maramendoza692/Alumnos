import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalificacionesComponent } from './editar-calificaciones.component';

describe('EditarCalificacionesComponent', () => {
  let component: EditarCalificacionesComponent;
  let fixture: ComponentFixture<EditarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
