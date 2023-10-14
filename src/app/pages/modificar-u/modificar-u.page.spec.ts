import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarUPage } from './modificar-u.page';

describe('ModificarUPage', () => {
  let component: ModificarUPage;
  let fixture: ComponentFixture<ModificarUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
