import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarTPage } from './modificar-t.page';

describe('ModificarTPage', () => {
  let component: ModificarTPage;
  let fixture: ComponentFixture<ModificarTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
