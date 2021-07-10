import { Component, OnInit } from '@angular/core';
import { GetClientsService } from '../get-clients.service';
import { client } from '../DAO/client';
import {Router} from '@angular/router';

// import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-display-clients',
  templateUrl: './display-clients.component.html',
  styleUrls: ['./display-clients.component.css']
})
export class DisplayClientsComponent implements OnInit {

  Clients: client[]  = null;
 
  
  // check = []
  // URL = 'https://maps.google.com/maps?q=33.524521,-86.774322&hl=es;z=14&amp;output=embed';

  constructor(private api:GetClientsService , private route: Router ) { }

  ngOnInit(): void {
    this.api.getAllClents().subscribe(
      (data:any)=>this.Clients = data
      
    );
 
  }
  viewData(id)
  {
    this.route.navigate(['../clients/',id]);
  }

// setCordinateOf(i){
//   console.log(i);
//   if(!this.check.includes(i)){
//     this.check.push(i);
//     if(this.Clients!==null){
//       this.URL = 'https://maps.google.com/maps?q=' + this.Clients[i].latitude + ',' + this.Clients[i].longitude + '&hl=es;z=14&amp;output=embed';
//       console.log(this.URL);
//     }
//   }
// }
}
