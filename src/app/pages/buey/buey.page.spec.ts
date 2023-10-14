import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BueyPage } from './buey.page';

describe('BueyPage', () => {
  let component: BueyPage;
  let fixture: ComponentFixture<BueyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BueyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
