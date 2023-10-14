import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRPage } from './agregar-r.page';

describe('AgregarRPage', () => {
  let component: AgregarRPage;
  let fixture: ComponentFixture<AgregarRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
