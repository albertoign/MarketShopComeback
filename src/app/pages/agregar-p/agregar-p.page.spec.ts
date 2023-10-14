import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPPage } from './agregar-p.page';

describe('AgregarPPage', () => {
  let component: AgregarPPage;
  let fixture: ComponentFixture<AgregarPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
