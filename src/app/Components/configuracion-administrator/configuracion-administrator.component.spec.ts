import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAdministratorComponent } from './configuracion-administrator.component';

describe('ConfiguracionAdministratorComponent', () => {
  let component: ConfiguracionAdministratorComponent;
  let fixture: ComponentFixture<ConfiguracionAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
