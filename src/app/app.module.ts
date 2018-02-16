import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreaPreventivoProvider } from '../providers/crea-preventivo/crea-preventivo';
import { CalcolaPreventivoProvider } from '../providers/calcola-preventivo/calcola-preventivo';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { VeicoloPage } from '../pages/veicolo/veicolo';
import { ContraentePage } from '../pages/contraente/contraente';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VeicoloPage,
    ContraentePage
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
    TabsPage,
    VeicoloPage,
    ContraentePage
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
