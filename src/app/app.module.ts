import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InventarioComponent } from './inventario/inventario.component';
import {InventarioDetalleComponent} from './inventario/inventario-detalle.component';
import {InventarioListaComponent} from './inventario/inventario-lista.component';
import {InventarioService} from './inventario/inventario.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    ContactoComponent,
    InventarioComponent,
    InventarioDetalleComponent,
    InventarioListaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
