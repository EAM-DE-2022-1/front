import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionMovimientoComponent } from './configuracion-movimiento.component';

describe('ConfiguracionMovimientoComponent', () => {
  let component: ConfiguracionMovimientoComponent;
  let fixture: ComponentFixture<ConfiguracionMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
