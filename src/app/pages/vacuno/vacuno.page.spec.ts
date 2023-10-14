import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacunoPage } from './vacuno.page';

describe('VacunoPage', () => {
  let component: VacunoPage;
  let fixture: ComponentFixture<VacunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VacunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
