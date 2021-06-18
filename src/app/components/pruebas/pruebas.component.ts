import { Component, OnInit } from '@angular/core';
import {PruebaService} from 'src/app/services/pruebas.service';
import { ActivatedRoute } from '@angular/router';
import { Prueba } from '../../models/pruebas';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  title = 'Listado de pruebas';
  pruebas : Prueba[];

  constructor(private service: PruebaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(pruebas=>{this.pruebas = pruebas;})
        
  }

}
