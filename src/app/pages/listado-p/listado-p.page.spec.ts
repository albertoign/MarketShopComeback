import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPPage } from './listado-p.page';

describe('ListadoPPage', () => {
  let component: ListadoPPage;
  let fixture: ComponentFixture<ListadoPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
