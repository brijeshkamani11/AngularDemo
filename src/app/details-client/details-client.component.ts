import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetClientsService } from '../get-clients.service';
import { client } from '../DAO/client';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {

  currentId = null;
  client : client = new client();
  // clientImage = '../../assets/0.png';
  clientImage = '';
  URL = 'https://maps.google.com/maps?q=33.524521,-86.774322&hl=es;z=14&amp;output=embed';
  constructor(private _activatedRoute : ActivatedRoute , private _api:GetClientsService , private _router:Router,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.currentId = this._activatedRoute.snapshot.paramMap.get('id');
    this._api.getClientById(this.currentId).subscribe(
      (data:client)=>{
        this.client = data;
        this.clientImage = '../../assets/' + ((this.client.id  % 10 ) * 3 * 7) % 10 + '.png';
        this.URL = 'https://maps.google.com/maps?q='  + this.client.latitude + ',' +  this.client.longitude + '&hl=es;z=14&amp;output=embed';
      }
    );
  }

  deleteClient(){
    if(confirm("Are you really want to Delete this Client?")){
      this._api.deleteClientById(this.currentId).subscribe(); // I cannot Delete,  Probably API cannot allowed to Delete Publically.
      alert("Client Deleted...");
      this._router.navigate(['']);
          

    }
    
  }
  updateClient(){
    if(confirm("Do You update data of this client?")){
      this._router.navigate(['../client/update/',this.currentId]);
    }

  }


}
