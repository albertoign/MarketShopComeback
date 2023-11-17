import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleProductoPage } from './detalle-producto.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ActivatedRoute } from '@angular/router';

describe('DetalleProductoPage', () => {
  let component: DetalleProductoPage;
  let fixture: ComponentFixture<DetalleProductoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute],
    }).compileComponents();
    fixture = TestBed.createComponent(DetalleProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
