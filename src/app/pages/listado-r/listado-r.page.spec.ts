import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoRPage } from './listado-r.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ListadoRPage', () => {
  let component: ListadoRPage;
  let fixture: ComponentFixture<ListadoRPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(ListadoRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
