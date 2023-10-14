import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolloPage } from './pollo.page';

describe('PolloPage', () => {
  let component: PolloPage;
  let fixture: ComponentFixture<PolloPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PolloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
