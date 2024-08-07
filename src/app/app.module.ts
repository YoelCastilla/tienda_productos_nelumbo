import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraInformacionComponent } from './cabecera-informacion/cabecera-informacion.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { FiltrosProductoComponent } from './filtros-producto/filtros-producto.component';
import { PasarelaProductosComponent } from './pasarela-productos/pasarela-productos.component';
import { NzModalModule } from 'ng-zorro-antd/modal';



registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraInformacionComponent,
    MenuNavegacionComponent,
    FiltrosProductoComponent,
    PasarelaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
