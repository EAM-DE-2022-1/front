import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionLucesComponent } from './configuracion-luces.component';

describe('ConfiguracionLucesComponent', () => {
  let component: ConfiguracionLucesComponent;
  let fixture: ComponentFixture<ConfiguracionLucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionLucesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionLucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
