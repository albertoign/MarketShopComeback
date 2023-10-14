import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoRPage } from './listado-r.page';

describe('ListadoRPage', () => {
  let component: ListadoRPage;
  let fixture: ComponentFixture<ListadoRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
