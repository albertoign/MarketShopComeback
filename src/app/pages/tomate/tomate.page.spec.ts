import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomatePage } from './tomate.page';

describe('TomatePage', () => {
  let component: TomatePage;
  let fixture: ComponentFixture<TomatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TomatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
