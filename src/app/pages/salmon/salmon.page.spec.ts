import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalmonPage } from './salmon.page';

describe('SalmonPage', () => {
  let component: SalmonPage;
  let fixture: ComponentFixture<SalmonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalmonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
