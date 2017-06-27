import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {InventarioService} from './inventario.service';
import {Inventario} from './inventario';
import {FormGroup, FormBuilder,Validators,FormControl} from '@angular/forms';
import {InventarioValidator} from './inventario.validator';
@Component({
  selector: 'inventario-detalle',
  templateUrl: './inventario-detalle.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioDetalleComponent implements OnInit {
  form: FormGroup;
  inventario: Inventario[];
  edicion = false;
  titulo ="";
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private inventarioService: InventarioService,
      private formBuilder: FormBuilder
  ) {     
  }

  ngOnInit() {
      let id = this.route.snapshot.params['id'];
      if(!id){
        this.crearControlesNuevo();
        this.titulo = "Agregar un nuevo registro";
      } 
      this.crearControlesEditar();
      this.titulo = "Edicion del registro";
      this.inventarioService.getInventario(id).subscribe(
        rs => this.inventario = rs,
        er => console.log(er),
        () => {
          if(this.inventario.length > 0){
            this.edicion = true;
            this.form.patchValue({
              id: this.inventario[0].id,
              producto: this.inventario[0].producto,
              existencia: this.inventario[0].existencia,
              precio: this.inventario[0].precio,
              proveedor: this.inventario[0].proveedor
            })
          }
        }
      )
      console.log(id);
  }

  crearControlesNuevo(){
    this.form = this.formBuilder.group({
      id: ['',Validators.required,InventarioValidator.valorUnico(this.inventarioService)] ,
      producto: ['',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      existencia: ['',Validators.required],
      precio: ['',Validators.required],
      proveedor: ['',Validators.required]
    })
  } 

  crearControlesEditar(){
    this.form = this.formBuilder.group({
      id: ['',Validators.required] ,
      producto: ['',Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      existencia: ['',Validators.required],
      precio: ['',Validators.required],
      proveedor: ['',Validators.required]
    })
  } 

  guardarInventario(){
    if(this.edicion){
      this.updateInventario(this.form.value);
    }else{
      this.agregarInventario(this.form.value);
    }    
  }

  agregarInventario(inventario: Inventario){
    console.log(this.form.value)
    this.inventarioService.addInventario(this.form.value).subscribe(
      rt => console.log(rt),
      er => console.log(er),
      () =>   console.log("terminado")
    );
  }

  updateInventario(inventario: Inventario){
    if(!inventario) return;
    this.inventarioService.putInventario(inventario)
      .subscribe(
        rt =>console.log(rt),
        er => console.log(er),
        () => this.goLista()
      )
  }

  goLista(){
    let link = ['/inventario/lista'];
    this.router.navigate(link); 
  }

  limpiarFormulario(){
    this.form.reset();
  }


}
