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
import { CalcolaPreventivoProvider } from '../providers/calcola-preventivo/calcola-preventivo';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ContraentePage } from '../pages/contraente/contraente';
import {GaranziaPage} from '../pages/garanzia/garanzia';
import { RiepilogoPage } from '../pages/riepilogo/riepilogo';
import {HeaderComponent} from '../components/header/header';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ContraentePage,
    GaranziaPage,
    RiepilogoPage,
    HeaderComponent
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
    HeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CreaPreventivoProvider,
    CalcolaPreventivoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
