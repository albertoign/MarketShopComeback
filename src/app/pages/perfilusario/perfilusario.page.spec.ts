import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilusarioPage } from './perfilusario.page';

describe('PerfilusarioPage', () => {
  let component: PerfilusarioPage;
  let fixture: ComponentFixture<PerfilusarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilusarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
