import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KiwiPage } from './kiwi.page';

describe('KiwiPage', () => {
  let component: KiwiPage;
  let fixture: ComponentFixture<KiwiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KiwiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
