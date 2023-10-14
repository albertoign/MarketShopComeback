import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { VistaAdminPage } from './vista-admin.page';
import { async } from 'rxjs';

describe('VistaAdminPage', () => {
  let component: VistaAdminPage;
  let fixture: ComponentFixture<VistaAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
