import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Usuarios/login/login.component';
import { DashboardComponent } from './components/Usuarios/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/Paquetes/products/producto-index/producto-index.component';
import { HomeComponent } from './components/landingpage/home/home.component';
import { NavbarComponent } from './components/utilidades/navbar/navbar.component';
import { HeroHeaderComponent } from './components/landingpage/hero-header/hero-header.component';
import { ProductoAdminComponent } from './components/admin/admin page/producto-admin/producto-admin.component';
import { AdminComponent } from './components/admin/admin page/admin/admin.component';
import { ClienteAdminComponent } from './components/admin/admin page/cliente-admin/cliente-admin.component';
import { MenuAdminComponent } from './components/admin/admin page/menu-admin/menu-admin.component';
import { QuienesSomosComponent } from './components/nosotros/QuienesSomos/quienes-somos/quienes-somos.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { HeaderComponent } from './components/utilidades/header/header.component';
import { CarritoComponent } from './components/Carrito/CarritoPage/carrito/carrito.component';
import { FacturacionComponent } from './components/Carrito/FacturacionPage/facturacion/facturacion.component';
import { EnvioComponent } from './components/Carrito/EnvioPage/envio/envio.component';
import { PagoComponent } from './components/Carrito/PagoPage/pago/pago.component';
import { ConfirmacionComponent } from './components/Carrito/Confirmacion-page/confirmacion/confirmacion.component';
import { PaquetesPageComponent } from './components/Paquetes/paquetes/paquetes-page/paquetes-page.component';
import { AvisoPrivacidadComponent } from './components/nosotros/aviso/aviso-privacidad/aviso-privacidad.component';
import { ContactoPageComponent } from './components/nosotros/contacto/contacto-page/contacto-page.component';
import { EstadoUsuarioPageComponent } from './components/admin/EstadoUsuarioo/estado-usuario-page/estado-usuario-page.component';
import { RastrearPageComponent } from './components/admin/rastrear/rastrear-page/rastrear-page.component';
import { CuadroContactoComponent } from './components/nosotros/contacto/cuadro-contacto/cuadro-contacto.component';
import { CuadronosotrosComponent } from './components/nosotros/QuienesSomos/cuadronosotros/cuadronosotros.component';
import { MasNuevoComponent } from './components/landingpage/mas-nuevo/mas-nuevo.component';
import { ProductosServiciosComponent } from './components/landingpage/productos-servicios/productos-servicios.component';
import { NosotrosNavbarComponent } from './components/nosotros/QuienesSomos/nosotros-navbar/nosotros-navbar.component';
import { AvisoNavbarComponent } from './components/nosotros/aviso/aviso-navbar/aviso-navbar.component';
import { CuadroavisoComponent } from './components/nosotros/aviso/cuadroaviso/cuadroaviso.component';
import { MarvelcarouselComponent } from './components/utilidades/marvelcarousel/marvelcarousel.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductoIndexComponent,
    HomeComponent,
    NavbarComponent,
    HeroHeaderComponent,
    ProductoAdminComponent,
    AdminComponent,
    ClienteAdminComponent,
    MenuAdminComponent,
    QuienesSomosComponent,
    FooterComponent,
    HeaderComponent,
    CarritoComponent,
    FacturacionComponent,
    EnvioComponent,
    PagoComponent,
    ConfirmacionComponent,
    PaquetesPageComponent,
    AvisoPrivacidadComponent,
    ContactoPageComponent,
    EstadoUsuarioPageComponent,
    RastrearPageComponent,
    CuadroContactoComponent,
    CuadronosotrosComponent,
    MasNuevoComponent,
    ProductosServiciosComponent,
    NosotrosNavbarComponent,
    AvisoNavbarComponent,
    CuadroavisoComponent,
    MarvelcarouselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
