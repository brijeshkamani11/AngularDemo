import { Component, OnInit } from '@angular/core';
import { client } from '../DAO/client';
import { GetClientsService } from '../get-clients.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client : client =  new client();
  update = false;
  id = null;
  
 

  constructor(private api:GetClientsService,private _router:Router , private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
     var id = this._activatedRoute.snapshot.paramMap.get('id');
     this.id = id;
     if(id !== null){
       this.update = true;
       this.api.getClientById(id).subscribe(
        (data : client) =>{
          this.client = data;
          console.log(this.client.id);

        } 
       )
     }
  }

  insert(data){
    if(this.id === null){
      this.api.addNewClient(this.client).subscribe(
        (res:any) => {
          console.log("Data added " + data);  // cannot add becuse don't have access.
        }
      );
      alert("New Client Added Sucessfully...");

    }
    else{

      this.api.updateClientDetailesid(this.id,this.client).subscribe(
        (res:any) => {
          console.log("Data updated " + res);  // cannot update becuse don't have access.
        }
      );
      alert("Client data has been updated Sucessfully...");
    }

    this._router.navigate(['']);


  }
  

}
