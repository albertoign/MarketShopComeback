import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarUPage } from './agregar-u.page';

describe('AgregarUPage', () => {
  let component: AgregarUPage;
  let fixture: ComponentFixture<AgregarUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
