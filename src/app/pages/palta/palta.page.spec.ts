import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaltaPage } from './palta.page';

describe('PaltaPage', () => {
  let component: PaltaPage;
  let fixture: ComponentFixture<PaltaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
