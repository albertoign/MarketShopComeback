import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarTPage } from './modificar-t.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
;

describe('ModificarTPage', () => {
  let component: ModificarTPage;
  let fixture: ComponentFixture<ModificarTPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarTPage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: 'your_test_id' })),
            // Agrega esta línea para evitar el error
            snapshot: {
              paramMap: convertToParamMap({ id: 'your_test_id' }),
            },
          },
        },
        {
          provide: SQLite,
          useValue: {}, // Objeto de configuración mock
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});