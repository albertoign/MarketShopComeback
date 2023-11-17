import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarUPage } from './modificar-u.page';
import { ActivatedRoute } from '@angular/router';

describe('ModificarUPage', () => {
  let component: ModificarUPage;
  let fixture: ComponentFixture<ModificarUPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute],
    }).compileComponents();
    fixture = TestBed.createComponent(ModificarUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
