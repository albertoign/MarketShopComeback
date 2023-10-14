import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarRPage } from './modificar-r.page';

describe('ModificarRPage', () => {
  let component: ModificarRPage;
  let fixture: ComponentFixture<ModificarRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
