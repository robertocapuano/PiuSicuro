import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreaPreventivoProvider } from '../providers/crea-preventivo/crea-preventivo';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ContraentePage } from '../pages/contraente/contraente';
import {GaranziaPage} from '../pages/garanzia/garanzia';
import { RiepilogoPage } from '../pages/riepilogo/riepilogo';
import {HeaderComponent} from '../components/header/header';
import {FooterComponent} from '../components/footer/footer';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';
import { SalvaProvider } from '../providers/salva/salva';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ContraentePage,
    GaranziaPage,
    RiepilogoPage,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ContraentePage,
    GaranziaPage,
    RiepilogoPage,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CreaPreventivoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SalvaProvider
  ]
})
export class AppModule {}
