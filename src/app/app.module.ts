import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { MessageService } from './services/index';
import { SidebarModule } from './shared/sidebar';
import { HeaderComponentModule } from './shared/header';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, SidebarModule, HeaderComponentModule],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
