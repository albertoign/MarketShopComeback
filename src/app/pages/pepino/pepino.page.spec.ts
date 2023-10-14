import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepinoPage } from './pepino.page';

describe('PepinoPage', () => {
  let component: PepinoPage;
  let fixture: ComponentFixture<PepinoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PepinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
