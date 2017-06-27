import { Component, OnInit } from '@angular/core';
import {InventarioService} from './inventario.service';
import {Inventario} from './inventario';
import {Router} from '@angular/router';

@Component({
  selector: 'inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioListaComponent implements OnInit {
    lista: Inventario[];
  constructor(
      private inventarioService:InventarioService,
      private router: Router
  ) { }

  ngOnInit() {
      this.inventarioService.getInventarios().subscribe(
          rs => this.lista = rs,
          er => console.log(er),
          () => console.log(this.lista)
      )
  }

  editar(item: Inventario){
      let link = ['/inventario/detalle',item.id];
      this.router.navigate(link);
  }

  borrar(item: Inventario){
      if(!item) return;
      this.inventarioService.delInventario(item.id).subscribe(
        rs => console.log(rs),
        er => console.log(er),
        () => {
            this.lista = this.lista.filter(h => h !== item)
        }
      )
      
  }

}
