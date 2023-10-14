import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PescadoPage } from './pescado.page';

describe('PescadoPage', () => {
  let component: PescadoPage;
  let fixture: ComponentFixture<PescadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PescadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
