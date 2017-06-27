import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ContactoComponent} from './contacto/contacto.component';
import {InventarioComponent} from './inventario/inventario.component';
import {InventarioListaComponent} from './inventario/inventario-lista.component';
import {InventarioDetalleComponent} from './inventario/inventario-detalle.component';
const appRoutes: Routes = [
    {path: 'home',component: HomeComponent},
    {path: 'clientes',component: ClienteComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'inventario',component: InventarioComponent,
        children: [
            {path: '', redirectTo: 'lista', pathMatch: 'full'},
            {path: 'lista', component:InventarioListaComponent},
            {path: 'detalle', component:InventarioDetalleComponent},
            {path: 'detalle/:id', component:InventarioDetalleComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}