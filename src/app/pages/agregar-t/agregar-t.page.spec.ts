import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTPage } from './agregar-t.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarTPage', () => {
  let component: AgregarTPage;
  let fixture: ComponentFixture<AgregarTPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
