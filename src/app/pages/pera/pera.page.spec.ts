import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeraPage } from './pera.page';

describe('PeraPage', () => {
  let component: PeraPage;
  let fixture: ComponentFixture<PeraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
