import { Component, OnInit } from '@angular/core';
import { ClustersService} from 'src/app/services/clusters.service';
import { ActivatedRoute } from '@angular/router';
import { Prueba } from '../../models/pruebas';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styleUrls: ['./clusters.component.css']
})
export class ClustersComponent implements OnInit {

  title1 = 'Cluster 1';
  title2 = 'Cluster 2';
  pruebas : Prueba[];
  pruebas2 : Prueba[];

  constructor(private service: ClustersService) { }

  ngOnInit(): void {
    this.service.getById(1).subscribe(pruebas=>{this.pruebas = pruebas;});
    this.service.getById(2).subscribe(pruebas2=>{this.pruebas2 = pruebas2;});
  }
}
