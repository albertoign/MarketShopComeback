import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPPage } from './agregar-p.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarPPage', () => {
  let component: AgregarPPage;
  let fixture: ComponentFixture<AgregarPPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
