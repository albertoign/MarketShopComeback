import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorderoPage } from './cordero.page';

describe('CorderoPage', () => {
  let component: CorderoPage;
  let fixture: ComponentFixture<CorderoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CorderoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
