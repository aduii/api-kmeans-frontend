import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebasComponent }from './components/pruebas/pruebas.component'
import { ClustersComponent }from './components/clusters/clusters.component'
const routes: Routes = [
  {path: 'pruebas',component: PruebasComponent},
  {path: 'clusters',component: ClustersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
