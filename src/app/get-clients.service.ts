import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetClientsService {
  apiUrl = 'https://api.openbrewerydb.org/breweries/';
  constructor(private _http:HttpClient) { }

  getAllClents(){
    return this._http.get(this.apiUrl);
  }
  getClientById(id: string){
    return this._http.get(this.apiUrl + id);
  }
  deleteClientById(id : string){
    return this._http.delete(this.apiUrl + id);
  }
  addNewClient(data)
  {
    return this._http.post(this.apiUrl,data);
  }

  updateClientDetailesid(id , data){
    return this._http.put(this.apiUrl + id , data);
  }
}
