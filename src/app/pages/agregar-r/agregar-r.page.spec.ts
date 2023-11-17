import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRPage } from './agregar-r.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarRPage', () => {
  let component: AgregarRPage;
  let fixture: ComponentFixture<AgregarRPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
