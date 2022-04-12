import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { SugarBombComponent } from './sugar-bomb/sugar-bomb.component';
import { SugarbombService } from './shared/sugarbomb.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    SugarBombComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SugarbombService],
  bootstrap: [AppComponent]
})
export class AppModule { }
