import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { LayoutModule } from './layout/layout.module';
import { ClustersComponent } from './components/clusters/clusters.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    ClustersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
