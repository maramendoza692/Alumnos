import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAluProfesorComponent } from './perfil-alu-profesor.component';

describe('PerfilAluProfesorComponent', () => {
  let component: PerfilAluProfesorComponent;
  let fixture: ComponentFixture<PerfilAluProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAluProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAluProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
