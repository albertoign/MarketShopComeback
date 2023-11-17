import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoPPage } from './tipo-p.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('TipoPPage', () => {
  let component: TipoPPage;
  let fixture: ComponentFixture<TipoPPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite],
    }).compileComponents();
    fixture = TestBed.createComponent(TipoPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
