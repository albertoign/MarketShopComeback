import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UvaPage } from './uva.page';

describe('UvaPage', () => {
  let component: UvaPage;
  let fixture: ComponentFixture<UvaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
