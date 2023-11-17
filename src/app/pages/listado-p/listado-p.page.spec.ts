import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPPage } from './listado-p.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ListadoPPage', () => {
  let component: ListadoPPage;
  let fixture: ComponentFixture<ListadoPPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(ListadoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
