import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoUPage } from './listado-u.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ListadoUPage', () => {
  let component: ListadoUPage;
  let fixture: ComponentFixture<ListadoUPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();






    
    fixture = TestBed.createComponent(ListadoUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
