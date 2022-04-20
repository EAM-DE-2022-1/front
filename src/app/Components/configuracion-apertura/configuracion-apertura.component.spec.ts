import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAperturaComponent } from './configuracion-apertura.component';

describe('ConfiguracionAperturaComponent', () => {
  let component: ConfiguracionAperturaComponent;
  let fixture: ComponentFixture<ConfiguracionAperturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionAperturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
