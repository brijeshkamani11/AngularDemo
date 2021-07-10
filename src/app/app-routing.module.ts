import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayClientsComponent } from './display-clients/display-clients.component';
import { DetailsClientComponent } from './details-client/details-client.component';
import { AddClientComponent } from './add-client/add-client.component';

const routes: Routes = [
  {
    path:'', component : DisplayClientsComponent
  },
  {
    path:'clients/:id' , component: DetailsClientComponent
  },
  {
    path:'client/add' , component: AddClientComponent
  },
  {
    path:'client/update/:id' , component: AddClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
