import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayClientsComponent } from './display-clients/display-clients.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsClientComponent } from './details-client/details-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    DisplayClientsComponent,
    DetailsClientComponent,
    AddClientComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
