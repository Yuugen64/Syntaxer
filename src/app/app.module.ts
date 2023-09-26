import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModalComponent } from './components/sub-components/modal/modal.component';
import { TextOutputComponent } from './components/sub-components/text-output/text-output.component';
import { TinkererComponent } from './components/tinkerer/tinkerer.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { DynamicButtonComponent } from './components/sub-components/dynamic-button/dynamic-button.component';
import { NavButtonComponent } from './components/sub-components/nav-button/nav-button.component';
import { BodyCardComponent } from './components/sub-components/body-card/body-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ModalComponent,
    TextOutputComponent,
    TinkererComponent,
    ControlBarComponent,
    DynamicButtonComponent,
    NavButtonComponent,
    BodyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
