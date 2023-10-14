import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTPage } from './agregar-t.page';

describe('AgregarTPage', () => {
  let component: AgregarTPage;
  let fixture: ComponentFixture<AgregarTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
