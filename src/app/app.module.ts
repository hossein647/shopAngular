import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPruductsComponent } from './home/list-pruducts/list-pruducts.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { SectionCategoryComponent } from './home/section-category/section-category.component';
import { SliderComponent } from './home/slider/slider.component';
import { BoxFeatureComponent } from './home/box-feature/box-feature.component';
import { CounterComponent } from './home/counter/counter.component';
import { AppPackageComponent } from './home/app-package/app-package.component';
import { SliderFooterComponent } from './home/slider-footer/slider-footer.component';
import { EditClassDirective } from './home/slider-footer/edit-class.directive';
import { EmailComponent } from './home/email/email.component';
import { FeatureFooterComponent } from './home/feature-footer/feature-footer.component';
import { navSearchComponent } from './categories/list-pruduct/nav-search.component';
import { SidebarComponent } from './categories/list-pruduct/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionCategoryComponent,
    ListPruductsComponent,
    SliderComponent,
    BoxFeatureComponent,
    CounterComponent,
    AppPackageComponent,
    SliderFooterComponent,
    EditClassDirective,
    EmailComponent,
    FeatureFooterComponent,
    FooterComponent,
    FooterCopyrightComponent,
    routingComponents,
    navSearchComponent,
    SidebarComponent,
    // ListPruductStateComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
