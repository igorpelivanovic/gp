import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './service/services.component';
import { CtaComponent } from './cta/cta.component';
import { CountsComponent } from './counts/counts.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SectionIndicatorDirective } from './directives/section-indicator.directive';
import { LoadingItemDirective } from './directives/loading-item.directive';
import { ScrolledDirective } from './directives/scrolled.directive';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterLoaderDirective } from './directives/counter-loader.directive';
import { MapComponent } from './contact/map/map.component';
import { ClientsSwipperComponent } from './clients-swipper/clients-swipper.component';
import { RouterModule } from '@angular/router';
import { register } from "swiper/element/bundle";
import { TestimonialsSwipperComponent } from './testimonials-swipper/testimonials-swipper.component';

register()

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    ServicesComponent,
    CtaComponent,
    CountsComponent,
    TeamComponent,
    FooterComponent,
    ContactComponent,
    SectionIndicatorDirective,
    LoadingItemDirective,
    ScrolledDirective,
    ScrollTopDirective,
    CounterLoaderDirective,
    MapComponent,
    ClientsSwipperComponent,
    TestimonialsSwipperComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
