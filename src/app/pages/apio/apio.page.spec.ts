import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApioPage } from './apio.page';

describe('ApioPage', () => {
  let component: ApioPage;
  let fixture: ComponentFixture<ApioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
