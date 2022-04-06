import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAmbienteComponent } from './configuracion-ambiente.component';

describe('ConfiguracionAmbienteComponent', () => {
  let component: ConfiguracionAmbienteComponent;
  let fixture: ComponentFixture<ConfiguracionAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
