import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingChild } from './properties/prop-binding-child';
import { PropertiesComponent } from './properties/properties.component';
import { BackgroundColorDirective } from './properties/background-color.directive';
import { AttributesComponent } from './attributes/attributes.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChild,
    BackgroundColorDirective,
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BackgroundColorDirective]
})
export class AppModule { }
