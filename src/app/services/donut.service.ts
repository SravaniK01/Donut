import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donutlist } from '../interfaces/donutdetails';
import { Eachdonut } from '../interfaces/eachdonut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  response:any;

  constructor(private httpClient: HttpClient) { }
  getDonutList(): Observable<Donutlist>{
    this.response = this.httpClient.get<Donutlist>(`${environment.apiEndpoint}/donuts.json`);
    return this.response;
  }

  getDonutDetail(id:number): Observable<Eachdonut> {
    let donutdetail = this.httpClient.get<Donutlist>(`${environment.apiEndpoint}/donuts/${id}.json`);
    console.log("donutdetail :" , donutdetail)
    return donutdetail;
  }

  
}
