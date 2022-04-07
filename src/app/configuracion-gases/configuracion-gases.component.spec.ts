import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionGasesComponent } from './configuracion-gases.component';

describe('ConfiguracionGasesComponent', () => {
  let component: ConfiguracionGasesComponent;
  let fixture: ComponentFixture<ConfiguracionGasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionGasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionGasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
