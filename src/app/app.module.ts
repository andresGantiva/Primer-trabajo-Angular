import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TablaComponent } from './tabla/tabla.component';
import { FormsModule } from '@angular/forms';
//Services
import { ProductoService } from './producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    UsuarioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
