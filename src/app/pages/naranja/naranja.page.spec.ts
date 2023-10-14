import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NaranjaPage } from './naranja.page';

describe('NaranjaPage', () => {
  let component: NaranjaPage;
  let fixture: ComponentFixture<NaranjaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NaranjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
