import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CerdoPage } from './cerdo.page';

describe('CerdoPage', () => {
  let component: CerdoPage;
  let fixture: ComponentFixture<CerdoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
