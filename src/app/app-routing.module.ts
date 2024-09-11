import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProductosComponent } from './productos/productos.component';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  {path: 'inicio', component: AppComponent},
  { path: 'productos', component : ProductosComponent },
  { path: 'usuario', component : UsuarioComponent},
  { path: 'tabla', component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
