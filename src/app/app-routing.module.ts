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
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
