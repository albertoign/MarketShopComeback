import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarUPage } from './agregar-u.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarUPage', () => {
  let component: AgregarUPage;
  let fixture: ComponentFixture<AgregarUPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(AgregarUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
