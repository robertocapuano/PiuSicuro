import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb';
@NgModule({
	declarations: [HeaderComponent,
    FooterComponent,
    BreadcrumbComponent],
	imports: [],
	exports: [HeaderComponent,
    FooterComponent,
    BreadcrumbComponent]
})
export class ComponentsModule {}
