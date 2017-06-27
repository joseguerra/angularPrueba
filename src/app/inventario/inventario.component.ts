import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  animations: [
    trigger('animacion',[
      state('inactive',style({
        transform: 'scale(1)'
      })),
      state('active',style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active',animate('100ms ease-in')),
      transition('active => inactive',animate('100ms ease-out'))
    ])
  ]
})
export class InventarioComponent implements OnInit {
  estado1 = "inactive";
  estado2 = "inactive";
  constructor() { }

  ngOnInit() {
  }

}
