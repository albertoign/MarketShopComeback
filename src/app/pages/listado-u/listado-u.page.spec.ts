import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoUPage } from './listado-u.page';

describe('ListadoUPage', () => {
  let component: ListadoUPage;
  let fixture: ComponentFixture<ListadoUPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
