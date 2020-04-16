import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/Usuarios/login/login.component';
import { DashboardComponent } from './components/Usuarios/dashboard/dashboard.component';
import { ProductoIndexComponent } from './components/Paquetes/products/producto-index/producto-index.component';
import { HomeComponent } from './components/landingpage/home/home.component';
import { AdminComponent } from './components/admin/admin page/admin/admin.component';
import { QuienesSomosComponent } from './components/nosotros/QuienesSomos/quienes-somos/quienes-somos.component';
import { ContactoPageComponent } from './components/nosotros/contacto/contacto-page/contacto-page.component';
import { CarritoComponent } from './components/Carrito/CarritoPage/carrito/carrito.component';
import { FacturacionComponent } from './components/Carrito/FacturacionPage/facturacion/facturacion.component';
import { EnvioComponent } from './components/Carrito/EnvioPage/envio/envio.component';
import { PagoComponent } from './components/Carrito/PagoPage/pago/pago.component';
import { ConfirmacionComponent } from './components/Carrito/Confirmacion-page/confirmacion/confirmacion.component';
import { PaquetesPageComponent } from './components/Paquetes/paquetes/paquetes-page/paquetes-page.component';
import { AvisoPrivacidadComponent } from './components/nosotros/aviso/aviso-privacidad/aviso-privacidad.component';

const appRoute : Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'productos', component: ProductoIndexComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'Contacto', component: ContactoPageComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'facturacion', component: FacturacionComponent},
    {path: 'envio', component: EnvioComponent},
    {path: 'pago', component: PagoComponent},
    {path: 'confirmacion', component: ConfirmacionComponent},
    {path: 'paquetes', component: PaquetesPageComponent},
    {path: 'aviso', component: AvisoPrivacidadComponent}
    
    
]

export const appRoutingProviders : any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoute);
