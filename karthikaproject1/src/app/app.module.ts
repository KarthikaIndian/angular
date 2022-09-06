import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AirticalComponent } from './airtical/airtical.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
   

           SidebarComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   RouterModule
   

  ],
  providers: [],
})
export class AppModule { }
