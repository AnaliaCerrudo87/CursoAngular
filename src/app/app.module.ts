import { AppComponent } from './app.component';
//import  {AppRoutingModule}  from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
//import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    ContenidoComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
