import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarPPage } from './modificar-p.page';

describe('ModificarPPage', () => {
  let component: ModificarPPage;
  let fixture: ComponentFixture<ModificarPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
