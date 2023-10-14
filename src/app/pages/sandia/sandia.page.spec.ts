import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SandiaPage } from './sandia.page';

describe('SandiaPage', () => {
  let component: SandiaPage;
  let fixture: ComponentFixture<SandiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SandiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
