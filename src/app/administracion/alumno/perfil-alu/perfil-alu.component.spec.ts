import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAluComponent } from './perfil-alu.component';

describe('PerfilAluComponent', () => {
  let component: PerfilAluComponent;
  let fixture: ComponentFixture<PerfilAluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
