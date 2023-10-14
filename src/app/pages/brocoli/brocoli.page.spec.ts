import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrocoliPage } from './brocoli.page';

describe('BrocoliPage', () => {
  let component: BrocoliPage;
  let fixture: ComponentFixture<BrocoliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrocoliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
