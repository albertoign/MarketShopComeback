import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'pagina1',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pages/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'vista-admin',
    loadChildren: () => import('./pages/vista-admin/vista-admin.module').then( m => m.VistaAdminPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'apio',
    loadChildren: () => import('./pages/apio/apio.module').then( m => m.ApioPageModule)
  },
  {
    path: 'brocoli',
    loadChildren: () => import('./pages/brocoli/brocoli.module').then( m => m.BrocoliPageModule)
  },
  {
    path: 'buey',
    loadChildren: () => import('./pages/buey/buey.module').then( m => m.BueyPageModule)
  },
  {
    path: 'pollo',
    loadChildren: () => import('./pages/pollo/pollo.module').then( m => m.PolloPageModule)
  },
  {
    path: 'cebolla',
    loadChildren: () => import('./pages/cebolla/cebolla.module').then( m => m.CebollaPageModule)
  },
  {
    path: 'cerdo',
    loadChildren: () => import('./pages/cerdo/cerdo.module').then( m => m.CerdoPageModule)
  },
  {
    path: 'cordero',
    loadChildren: () => import('./pages/cordero/cordero.module').then( m => m.CorderoPageModule)
  },
  {
    path: 'kiwi',
    loadChildren: () => import('./pages/kiwi/kiwi.module').then( m => m.KiwiPageModule)
  },
  {
    path: 'naranja',
    loadChildren: () => import('./pages/naranja/naranja.module').then( m => m.NaranjaPageModule)
  },
  {
    path: 'palta',
    loadChildren: () => import('./pages/palta/palta.module').then( m => m.PaltaPageModule)
  },
  {
    path: 'pan',
    loadChildren: () => import('./pages/pan/pan.module').then( m => m.PanPageModule)
  },
  {
    path: 'pepino',
    loadChildren: () => import('./pages/pepino/pepino.module').then( m => m.PepinoPageModule)
  },
  {
    path: 'pera',
    loadChildren: () => import('./pages/pera/pera.module').then( m => m.PeraPageModule)
  },
  {
    path: 'pescado',
    loadChildren: () => import('./pages/pescado/pescado.module').then( m => m.PescadoPageModule)
  },
  {
    path: 'res',
    loadChildren: () => import('./pages/res/res.module').then( m => m.ResPageModule)
  },
  {
    path: 'salmon',
    loadChildren: () => import('./pages/salmon/salmon.module').then( m => m.SalmonPageModule)
  },
  {
    path: 'sandia',
    loadChildren: () => import('./pages/sandia/sandia.module').then( m => m.SandiaPageModule)
  },
  {
    path: 'tomate',
    loadChildren: () => import('./pages/tomate/tomate.module').then( m => m.TomatePageModule)
  },
  {
    path: 'vacuno',
    loadChildren: () => import('./pages/vacuno/vacuno.module').then( m => m.VacunoPageModule)
  },
  {
    path: 'uva',
    loadChildren: () => import('./pages/uva/uva.module').then( m => m.UvaPageModule)
  },
  {
    path: 'perfilusario',
    loadChildren: () => import('./pages/perfilusario/perfilusario.module').then( m => m.PerfilusarioPageModule)
  },
  {
    path: 'editar-datos',
    loadChildren: () => import('./pages/editar-datos/editar-datos.module').then( m => m.EditarDatosPageModule)
  },
  {
    path: 'listado-u',
    loadChildren: () => import('./pages/listado-u/listado-u.module').then( m => m.ListadoUPageModule)
  },
  {
    path: 'modificar-u',
    loadChildren: () => import('./pages/modificar-u/modificar-u.module').then( m => m.ModificarUPageModule)
  },
  {
    path: 'agregar-u',
    loadChildren: () => import('./pages/agregar-u/agregar-u.module').then( m => m.AgregarUPageModule)
  },
  {
    path: 'listado-r',
    loadChildren: () => import('./pages/listado-r/listado-r.module').then( m => m.ListadoRPageModule)
  },
  {
    path: 'modificar-r',
    loadChildren: () => import('./pages/modificar-r/modificar-r.module').then( m => m.ModificarRPageModule)
  },
  {
    path: 'agregar-r',
    loadChildren: () => import('./pages/agregar-r/agregar-r.module').then( m => m.AgregarRPageModule)
  },
  {
    path: 'tipo-p',
    loadChildren: () => import('./pages/tipo-p/tipo-p.module').then( m => m.TipoPPageModule)
  },
  {
    path: 'modificar-t',
    loadChildren: () => import('./pages/modificar-t/modificar-t.module').then( m => m.ModificarTPageModule)
  },
  {
    path: 'agregar-t',
    loadChildren: () => import('./pages/agregar-t/agregar-t.module').then( m => m.AgregarTPageModule)
  },
  {
    path: 'listado-p',
    loadChildren: () => import('./pages/listado-p/listado-p.module').then( m => m.ListadoPPageModule)
  },
  {
    path: 'modificar-p',
    loadChildren: () => import('./pages/modificar-p/modificar-p.module').then( m => m.ModificarPPageModule)
  },
  {
    path: 'agregar-p',
    loadChildren: () => import('./pages/agregar-p/agregar-p.module').then( m => m.AgregarPPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/producto/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
