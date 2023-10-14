import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CebollaPage } from './cebolla.page';

describe('CebollaPage', () => {
  let component: CebollaPage;
  let fixture: ComponentFixture<CebollaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CebollaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
